import Logo from "./Logo"
import styled from 'styled-components';
import Card from "./Card"
import Cardcontent from"./Cardcontent"
import Footer from "./Footer"
import {useState} from "react"

export default function MainPage(){

    const [answerdQuestions, setAnswerdQuestions] = useState(0)
    const [clickedArrowsList, setClickedArrowsList] = useState([])  
    const [clickedTurnList, setClickedTurnList] = useState([])  

    return (

    <ScreenContainer>

        <Logo/>

        {Cardcontent.map((card, index) => (
        <Card
        key={index}
        cardNumero={index}
        card={card}
        clickedArrowsList= {clickedArrowsList}
        setClickedArrowsList = {setClickedArrowsList}
        clickedTurnList = {clickedTurnList}
        setClickedTurnList = {setClickedTurnList}
        />
        ))}

        <Footer
        answerdQuestions = {answerdQuestions}
        />

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