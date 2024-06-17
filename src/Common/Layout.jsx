import React from 'react'
import AppAppBar from './Nav'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <>
        <AppAppBar />

        <main>
            {children}
        </main>

        <Footer />
    
    </>
  )
}
