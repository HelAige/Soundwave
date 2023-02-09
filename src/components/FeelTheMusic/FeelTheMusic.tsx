import React from 'react';
import landingPage from '../../assets/landing-page-girl.png';
import { Img, Container, H1, P, Button } from './FeelStyle';


type Props = {}

const FeelTheMusic = (props: Props) => {

    return (
    <Container>
        <Img src={landingPage} alt="" />
        <div>
        <H1>Feel The Music</H1>
        <P>Stream over 20 thousand songs with one clik</P>
        <Button>Join Now</Button>
        </div>
    </Container>
    )
}

export default FeelTheMusic