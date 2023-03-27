import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Search from './components/Search/Search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'
import Albums from './components/Albums/Albums';

function App() {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route exact path='/' element={<ProtectedRoute element=<Login /> />} />
            <Route path='/search' element={<ProtectedRoute element={<Search />} />} />
            <Route
               exact
               path="/albums/:artistID"
               element={
                  <ProtectedRoute
                     element={<Albums />}
                  />
               }
            />
            <Route path="*" element={<h1 className='text-3xl font-bold text-red-600 text-center mt-[3%]'>404 Page Not Found!</h1>} />
         </Routes>
      </Router >
   )
}

export default App
