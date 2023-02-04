import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './Home/Home'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Login from './Login/Login'
import Hotel from "./Hotel/Hotel"
import Book from "./Book/Book"

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
        
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/main' element={<Main/>}/>
            <Route path="/footer" element={<Footer/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/hotel" element={<Hotel/>}/>
            <Route path="/book" element={<Book/>}/>


        </Routes>
    </BrowserRouter>
  )
}
