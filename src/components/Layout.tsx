import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar/NavBar'

type Props = {}

const Layout = (props: Props) => {
    return (
    <>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
    </>
    )
}

export default Layout