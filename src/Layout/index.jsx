import React from 'react'
import { Footer, Navbar } from '../Components'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
    <Navbar/>
        <main className="flex-1">
            <Outlet/>
        </main>

    <Footer/>
    </div>
  )
}
