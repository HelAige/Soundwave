import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Nav, Soundwave, Disc, Logo } from './NavBarStyle'

type Props = {}

export const NavBar = (props: Props) => {
    return (
    <Nav>
        <Soundwave>
        <Logo src={logo} alt="" />
        <Link to='/'>Soundwave</Link>
        </Soundwave>
        <Disc>
        <Link to='/discover'>Discover</Link>
        <Link to='/join'>Join</Link>
        </Disc>
    </Nav>
    )
}

export default NavBar