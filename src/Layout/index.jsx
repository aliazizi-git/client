import React from 'react'
import { Footer, Navbar } from '../Components'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbar/>
        <main>
            <Outlet/>
        </main>

    <Footer/>
    </>
  )
}
