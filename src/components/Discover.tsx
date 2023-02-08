import React from 'react';
import microphone from '../assets/microphone.svg';
import albums from '../assets/albums.svg';
import more from '../assets/more.svg';
import covers from '../assets/covers.jpg'
import Footer from './Footer';

type Props = {}

const Discover = (props: Props) => {
    return (
    <>
        <section>
            <h1>Discover new music</h1>
            <img src={microphone} alt="" />
            <p>Charts</p>
            <img src={albums} alt="" />
            <p>Albums</p>
            <img src={more} alt="" />
            <p>More</p>
            <p>
                By joining you can benefit by listening to the latest albums released.
            </p>
            <img src={covers} alt="" />
        </section>
        <Footer />
    </>
    )
}

export default Discover