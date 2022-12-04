
import styled from 'styled-components';
import play from "../assets/img/seta_play.png"
import turn from "../assets/img/seta_virar.png"
import { useState } from "react"
import correct from "../assets/img/icone_certo.png"
import wrong from "../assets/img/icone_erro.png"
import almost from "../assets/img/icone_quase.png"




export default function Card({
    card,
    cardNumero,
    clickedArrowsList,
    setClickedArrowsList,
    setClickedTurnList,
    clickedTurnList,
    clickedAnswerList,
    setclickedAnswerList,
    answerdQuestions,
    setAnswerdQuestions,
    setFooterIcons,
    footerIcons

}) {

    const [finalizedImg, setFinalizedImg] = useState("")
    const [finalizedColor, setFinalizedColor] = useState("")
    const [dataTestIcon, setDataTestIcon] = useState("")

    return (
        <div data-test="flashcard">

            <PerguntaFechada display={clickedArrowsList.includes(card) ? true : false} >
                <p data-test="flashcard-text" >pergunta {cardNumero + 1}</p>
                <img data-test="play-btn" src={play} alt="buttonplay"
                    onClick={() => {
                        setClickedArrowsList([...clickedArrowsList, card])
                    }}></img>
            </PerguntaFechada>

            <PerguntaAberta display={!clickedArrowsList.includes(card) || clickedTurnList.includes(card) ? true : false}>
                <h1 data-test="flashcard-text" >{card.question}</h1>
                <img data-test="turn-btn" src={turn} alt="buttonturn"
                    onClick={() => {
                        setClickedTurnList([...clickedTurnList, card])
                    }}></img>
            </PerguntaAberta>

            <PerguntaResposta display={!clickedTurnList.includes(card) || clickedAnswerList.includes(card) ? true : false}>
                <h1 data-test="flashcard-text" >{card.answer}</h1>
                <div>
                    <ButtonContainer data-test="no-btn" color="#FF3030"
                        onClick={() => {
                            setclickedAnswerList([...clickedAnswerList, card])
                            setAnswerdQuestions(answerdQuestions + 1)
                            setFinalizedImg(wrong)
                            setFinalizedColor("#FF3030")
                            setDataTestIcon("no-icon")
                            setFooterIcons([...footerIcons, wrong])
                        }}
                    > Não lembrei</ButtonContainer>

                    <ButtonContainer data-test="partial-btn" color="#FF922E"
                        onClick={() => {
                            setclickedAnswerList([...clickedAnswerList, card])
                            setAnswerdQuestions(answerdQuestions + 1)
                            setFinalizedImg(almost)
                            setFinalizedColor("#FF922E")
                            setDataTestIcon("partial-icon")
                            setFooterIcons([...footerIcons, almost])
                            

                        }}

                    >Quase não lembrei</ButtonContainer>

                    <ButtonContainer data-test="zap-btn" color="#2FBE34"
                        onClick={() => {
                            setclickedAnswerList([...clickedAnswerList, card])
                            setAnswerdQuestions(answerdQuestions + 1)
                            setFinalizedImg(correct)
                            setFinalizedColor("#2FBE34")
                            setDataTestIcon("zap-icon")
                            setFooterIcons([...footerIcons, correct])

                        }}
                    >Zap!</ButtonContainer>

                </div>
            </PerguntaResposta>
            <PerguntaFinalizada color={finalizedColor} display={!clickedAnswerList.includes(card) ? true : false}>
                <p data-test="flashcard-text" >pergunta {cardNumero + 1}</p>
                <img data-test={dataTestIcon}   src={finalizedImg}></img>
            </PerguntaFinalizada>
            </div>
    )
}




const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display:${props => props.display ? 'none' : 'flex'};
    align-items: center;
    justify-content: space-between;

    p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
}
`
const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display:${props => props.display ? 'none' : 'flex'};   
    flex-direction: column;
    justify-content: space-between;

    img{
    position: absolute;
    bottom: 10px;
    right: 10px;
}
`

const PerguntaResposta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display:${props => props.display ? 'none' : 'flex'};   
    flex-direction: column;
    justify-content: space-between;

    div{
        display:flex;
        justify-content:space-between
    }
    `

const ButtonContainer = styled.button`
    
    
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.color} ;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
`

const PerguntaFinalizada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display:${props => props.display ? 'none' : 'flex'};
    align-items: center;
    justify-content: space-between;

    p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color : ${props => props.color} ;
    text-decoration: line-through;
}
`
