import Logo from "./Logo"
import styled from 'styled-components';
import Card from "./Card"
import Cardcontent from"./Cardcontent"
import Footer from "./Footer"

export default function MainPage(){

    return (

    <ScreenContainer>

        <Logo/>

        {Cardcontent.map((card, index) => (
        <Card
        key={index}
        cardNumero={index}
        card={card}
        />
        ))}

        <Footer/>

    </ScreenContainer>
    )

}





const ScreenContainer = styled.header`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`