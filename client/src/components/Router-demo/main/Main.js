import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import NavigationBar from '../navigationbar/NavigationBar'
import './Main.css'

function Main() {
    return (
        <div>
            <NavigationBar />
            <div className='outlet'>
                <Outlet />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Main