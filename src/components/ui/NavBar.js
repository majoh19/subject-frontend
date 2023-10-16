import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <header className='d-flex justify-content-center py-3'>

            <ul className='nav nav-pills'>

                <NavLink tabIndex={1} className='nav-item nav-link' to='/'>
                    Subject
                </NavLink>

                <NavLink tabIndex={2} className='nav-item nav-link' to='/grades'>
                    Grade
                </NavLink>

            </ul>

        </header>
    )
}