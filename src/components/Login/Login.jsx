import React from 'react'
import SpotifyLogo from '../../assets/spotify-2.svg'

const Login = () => {
   const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
   const REDIRECT_URI =
      'https://spotify-artist-search.vercel.app/search'
   const AUTH_ENDPOINT =
      'https://accounts.spotify.com/authorize'
   const RESPONSE_TYPE = 'token'

   return (
      <div className='h-[90vh] flex flex-col items-center justify-center'>
         <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            className='px-10 py-4 rounded-full text-2xl text-[#1DB954] font-semibold bg-gray-50  shadow-lg'
         >
            Login with Spotify
            <img
               className='w-[35px] inline ml-4'
               src={SpotifyLogo}
               alt='Spotify Logo'
            />
         </a>
      </div>
   )
}

export default Login
