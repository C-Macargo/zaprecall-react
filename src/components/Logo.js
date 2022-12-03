import logo from "../assets/img/logo.png"
import React from 'react';
import styled from 'styled-components';


export default function Logo(){
        return(
        <LogoConteiner>
        <img src={logo} alt="logo" ></img>
        <h1>Zap Recall</h1>
        </LogoConteiner>
        )
}


const LogoConteiner = styled.header`

    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    
    > img {
        width: 52px;
    }
    
    > h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }    
`;