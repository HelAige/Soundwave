import React from 'react'

import { Foot, Div, Link } from './FooterStyle'


const Footer = () => {
    return (
    <Foot>
        <Div>
            <Link>About Us</Link>
            <Link>Contact</Link>
        </Div>
        <Div>
            <Link>Twiter</Link>
            <Link>Facebook</Link>
        </Div>
    </Foot>
    )
}

export default Footer
