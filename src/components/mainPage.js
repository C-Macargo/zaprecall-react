import Logo from "./Logo"
import styled from 'styled-components';
import Card from "./Card"
import Cardcontent from"./Cardcontent"
import Footer from "./Footer"
import {useState} from "react"

export default function MainPage(){
    const [dataTestIcon, setDataTestIcon] = useState("")
    const [cardsSorted] = useState([...Cardcontent.sort( () => .5 - Math.random() )])
    const [cardsSortedsplit] = useState([...cardsSorted.slice(0,6)])
    const [footerIcons, setFooterIcons] = useState([])
    const [answerdQuestions, setAnswerdQuestions] = useState(0)
    const [clickedArrowsList, setClickedArrowsList] = useState([])  
    const [clickedTurnList, setClickedTurnList] = useState([])  
    const [clickedAnswerList, setclickedAnswerList] = useState([])  


    return (

    <ScreenContainer>

        <Logo/>

        {cardsSortedsplit.map((card, index) => (
        <Card
        key={index}
        cardNumero={index}
        card={card}
        clickedArrowsList= {clickedArrowsList}
        setClickedArrowsList = {setClickedArrowsList}
        clickedTurnList = {clickedTurnList}
        setClickedTurnList = {setClickedTurnList}
        clickedAnswerList = {clickedAnswerList}
        setclickedAnswerList = {setclickedAnswerList}
        setAnswerdQuestions = {setAnswerdQuestions}
        answerdQuestions = {answerdQuestions}
        setFooterIcons={setFooterIcons}
        footerIcons = {footerIcons}
        dataTestIcon = {dataTestIcon}
        setDataTestIcon = {setDataTestIcon}
        />
        ))}

        <Footer
        cardsSortedsplit = {cardsSortedsplit}
        answerdQuestions = {answerdQuestions}
        footerIcons = {footerIcons}
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