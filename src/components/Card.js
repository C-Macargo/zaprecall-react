
import styled from 'styled-components';
import play from "../assets/img/seta_play.png"
import turn from "../assets/img/seta_virar.png"


export default function Card({
    card,
    cardNumero,
    clickedArrowsList,
    setClickedArrowsList,
    setClickedTurnList,
    clickedTurnList
}) {

    console.log(clickedTurnList)



    return (
        <>
        <PerguntaFechada display={clickedArrowsList.includes(card) ? true : false} >
            <p>pergunta {cardNumero + 1}</p>
            <img src ={play} alt="buttonplay" 
                onClick={() => {setClickedArrowsList([...clickedArrowsList, card])
            }}></img>
        </PerguntaFechada>

        <PerguntaAberta display={!clickedArrowsList.includes(card) || clickedTurnList.includes(card) ? true : false}>
            <h1>{card.question}</h1>
            <img src ={turn} alt="buttonturn"
                onClick={() => {setClickedTurnList([...clickedTurnList, card])
            }}></img>
        </PerguntaAberta>
        <PerguntaResposta display={!clickedTurnList.includes(card)  ? true : false}>
            <h1>{card.answer}</h1>
                <div>
                <ButtonContainer> Não lembrei</ButtonContainer>
                <ButtonContainer>Quase não lembrei</ButtonContainer>
                <ButtonContainer>Zap!</ButtonContainer>
                </div>
        </PerguntaResposta>
        
        
        
        </>
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


const ButtonContainer = styled.button `

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
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;


`
