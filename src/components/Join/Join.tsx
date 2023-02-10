import React from 'react'
import Footer from '../Footer/Footer';
import { Form, Label, Sect, Titl, Bold, LargeButton, Input } from './JoinStyle'

type Props = {}

const Join = (props: Props) => {
    return (
    <>
        <Sect>
            <Titl>Join the 
                <Bold>fun.</Bold>
                </Titl>
            <Form>
                <Label>Name:
                    <Input type='text' name='name' />
                </Label>
                <Label>Email:
                    <Input type='email' name='email' />
                </Label>
                <Label>Pasword:
                    <Input type='pasword' name='pasword' />
                </Label>
                <LargeButton>Join Now</LargeButton>
            </Form>
        </Sect>
        <Footer/>
    </>
    )
}

export default Join
