import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Albums from '../Albums/Albums'
import Login from '../Login/Login'
import Search from '../Search/Search'

const ProtectedRoute = ({ artistID }) => {
   const navigate = useNavigate()

   const getToken = () => {
      // get token from URL
      const hash = window.location.hash.substring(1)
      const token = hash.split('=')[1]?.split('&')[0]
      // Check if token is valid (!undefined)
      if (token) {
         // storing token in localStorage
         localStorage.setItem('Spotify_Token', token)
      }
      return token
   }
   // calling the function
   getToken()

   // get token from Local Storage
   const token = localStorage.getItem('Spotify_Token')

   useEffect(() => {
      if (token && window.location.pathname === '/') {
         navigate('/search')
      }
   }, [navigate, token])

   if (!token) {
      navigate('/')
      return <Login />
   }
   // Render the protected component based on the route
   if (window.location.pathname === '/search') {
      return <Search />
   } else if (
      window.location.pathname.startsWith('/albums/')
   ) {
      return <Albums artistID={artistID} />
   }
}

export default ProtectedRoute
