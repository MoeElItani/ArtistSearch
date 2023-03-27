import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import magnifier from '../../assets/magnifier.svg'
import Artist from '../Albums/Albums'
import ArtistCard from '../ArtistCard/ArtistCard'

const Search = () => {
   const artists = []

   // state variable for the  search query
   const [searchQuery, setSearchQuery] = useState('')
   // state variable  for the search results having artists as the initial data
   const [searchResult, setSearchResult] = useState(artists)
   // get token from local storage
   const token = localStorage.getItem('Spotify_Token')

   // search
   async function search() {
      // get Artist ID
      const searchParams = {
         method: 'GET',
         headers: {
            'Content-Type': 'application-json',
            Authorization: 'Bearer ' + token,
         },
      }
      const artistsID = await fetch(
         `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`,
         searchParams
      )
         .then((res) => res.json())
         .then((data) =>
            // map through the artists array and get their IDs
            data.artists.items.map((item) => {
               return item.id
            })
         )

      // get details of all artists using their IDs
      const artistRequests = artistsID.map((artistID) =>
         fetch(
            `https://api.spotify.com/v1/artists/${artistID}`,
            searchParams
         )
      )
      // make multiple HTTP requests to API
      const artistResponses = await Promise.all(
         artistRequests
      )
      const artistsData = await Promise.all(
         artistResponses.map((res) => res.json())
      )

      // update artists array with details fetched from API
      const updatedArtists = artistsData.map(
         (artistData) => {
            return {
               id: artistData.id,
               name: artistData.name,
               image:
                  artistData.images.length > 0
                     ? artistData.images[0].url
                     : '',
               genres: artistData.genres,
               followers: artistData.followers.total,
            }
         }
      )
      setSearchResult(updatedArtists)
   }

   // function to handle form submission
   const handleSubmit = (event) => {
      event.preventDefault()
      setSearchResult(searchResult)
   }

   return (
      <>
         {/* Search Input: */}
         <form
            className='flex flex-row items-center justify-center mt-10'
            onSubmit={handleSubmit}
         >
            <input
               type='text'
               className='border-solid border-[3px] border-gray-400 rounded-l-full w-[80%] md:w-[60%] h-12 text-xl pl-5 inline'
               placeholder='Search for an artist...'
               value={searchQuery}
               onChange={(event) =>
                  setSearchQuery(event.target.value)
               }
            />
            <button
               type='submit'
               className='h-12 px-2 md:px-6 font-semibold tracking-wide transition duration-200 rounded shadow-md rounded-r-full focus:shadow-outline focus:outline-none w-[50px] md:w-[80px] bg-[#1DB954]'
               onClick={search}
            >
               <img
                  src={magnifier}
                  alt='search'
                  className='w-6 md:w-[20px]'
               />
            </button>
         </form>

         {/* Artist Cards: */}
         <div className='flex flex-wrap mx-auto mt-[3rem] w-[100%] md:w-[80%]'>
            {/* render artists cards */}
            {searchResult.map((artist) => (
               <Link
                  key={artist.id}
                  to={`/albums/${artist.id}`}
                  element={<Artist />}
                  className='w-1/2 lg:w-1/6 px-4'
               >
                  <ArtistCard artist={artist} />
               </Link>
            ))}
         </div>
      </>
   )
}

export default Search