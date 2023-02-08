import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

export const NavBar = (props: Props) => {
    return (
    <>
        <Link to='/'>Soundwave</Link>
        <Link to='/discover'>Discover</Link>
        <Link to='/join'>Join</Link>
    </>
    )
}

export default NavBar