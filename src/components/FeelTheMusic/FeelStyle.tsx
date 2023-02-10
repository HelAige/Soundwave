/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components'


export const Img = styled.img`
    width: 20em;
    display: flex;
    align-self: flex-end;
    margin-top: 7.5em;
    @media screen and (max-width: 600px) {
        display: none;
    }
    
    `
export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5em;
`
export const H1 = styled.h1`
    grid-column: 1/3;
    grid-row: 1/2;
    margin: 5%;
    font-size: 40px;
`
export const P = styled.p`
    grid-row: 2/3;
    margin: 5%;
`
export const Button = styled.button`
    grid-row: 3/4;
    margin: 5%;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    background-color: #1762a7;
    width: 6.5em;
    height: 2.5em;
    cursor: pointer;
`