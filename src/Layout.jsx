import React from 'react'
import Header from './components/Header/Header.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {/* <footer className="bg-black w-full h-full min-h-[400px]"></footer> */}
    </div>
  )
}