import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'
import Grade from '../components/Grade'
import Subject from '../components/Subject'

export default function AppRouters() {
    return (

        <div>
            <NavBar/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Subject/>}/>
                    <Route path='/grades' element={<Grade/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>

    )
}