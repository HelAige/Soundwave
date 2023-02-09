import React from 'react'
import { Link } from 'react-router-dom'
import { Foot } from './FooterStyle'

const Footer = () => {
    return (
    <Foot>
        <Link to=''>About Us</Link>
        <Link to=''>Contact</Link>
        <Link to=''>Twiter</Link>
        <Link to=''>Facebook</Link>
    </Foot>
    )
}

export default Footer
