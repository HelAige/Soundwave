import React from 'react';
import microphone from '../../assets/microphone.svg';
import albums from '../../assets/albums.svg';
import more from '../../assets/more.svg';
import covers from '../../assets/covers.jpg';
import Footer from '../Footer/Footer';
import { Cart, Section, Image, Name, Carts, Title, Albums, Cont } from './DiscoverStyle';

type Props = {}

const Discover = (props: Props) => {
    return (
    <>
        <Section>
        <Cont>
            <Title>Discover new music</Title>
            <Carts>
                <Cart>
                    <Image src={microphone} alt="" />
                    <Name>Charts</Name>
                </Cart>
                <Cart>
                    <Image src={albums} alt="" />
                    <Name>Albums</Name>
                </Cart>
                <Cart>
                    <Image src={more} alt="" />
                    <Name>More</Name>
                </Cart>
            </Carts>
                <p>
                By joining you can benefit by listening to the latest albums released.
                </p>
        </Cont>
            <Albums src={covers} alt="" />
        
        </Section>
        <Footer />
    </>
    )
}

export default Discover