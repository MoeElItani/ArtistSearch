import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AlbumCard from '../AlbumCard/AlbumCard'

const Artist = () => {
   // albums state with initially an empty array
   const [albums, setAlbums] = useState([])
   // get the parameter value (Artist ID) from the URL
   const { artistID } = useParams()
   // get token from local storage
   const token = localStorage.getItem('Spotify_Token')

   // fetch albums API and set albums state
   useEffect(() => {
      async function getAlbums() {
         const searchParams = {
            method: 'GET',
            headers: {
               'Content-Type': 'application-json',
               Authorization: 'Bearer ' + token,
            },
         }
         const response = await fetch(
            `https://api.spotify.com/v1/artists/${artistID}/albums?market=US`,
            searchParams
         )
         const data = await response.json()
         setAlbums(data.items)
      }
      getAlbums()
   }, [artistID, token])

   return (
      <div className='mt-[3rem] mx-auto w-[90%] md:w-[80%]'>
         {/* Artist name */}
         <h1 className='text-3xl font-bold'>
            {albums[0]?.artists[0].name}
         </h1>
         {/* Page Type */}
         <p className='text-xl font-semibold'>Albums</p>
         <br />
         {/* render albums cards */}
         <div className='flex flex-wrap'>
            {albums.map((album) => (
               <AlbumCard key={album.id} album={album} />
            ))}
         </div>
      </div>
   )
}

export default Artist
