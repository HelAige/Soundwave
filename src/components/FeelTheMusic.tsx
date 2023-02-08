import React from 'react';
import landingPage from './prueva.svg';

type Props = {}

const FeelTheMusic = (props: Props) => {
    return (
    <section>
        <img src={landingPage} alt="" />
        <h1>FeelTheMusic</h1>
        <p>Stream over 20 thousand songs with one clik</p>
        <button>Join Now</button>
    </section>
    )
}

export default FeelTheMusic