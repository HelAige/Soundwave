import React from 'react'
import Footer from './Footer/Footer'

type Props = {}

const Join = (props: Props) => {
    return (
    <>
        <section>
            <form>
                <label>Name:
                    <input type='text' name='name' />
                </label>
                <label>Email:
                    <input type='email' name='email' />
                </label>
                <label>Pasword:
                    <input type='pasword' name='pasword' />
                </label>
                <button>Join Now</button>
            </form>
        </section>
        <Footer/>
    </>
    )
}

export default Join
