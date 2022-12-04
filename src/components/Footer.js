import styled from 'styled-components';
import cards from "./Cardcontent"

export default function Footer({answerdQuestions}){

    return(
        
        <FooterConcluidos>
            <div data-test="footer">
            <p>CONCLUÍDOS {answerdQuestions} / {cards.length}</p>
            </div>
        </FooterConcluidos>
        
    )

}



const FooterConcluidos = styled.footer`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`
