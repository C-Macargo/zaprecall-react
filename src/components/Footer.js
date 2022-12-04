import styled from 'styled-components';
import cards from "./Cardcontent"
import correct from "../assets/img/icone_certo.png"
import wrong from "../assets/img/icone_erro.png"
import almost from "../assets/img/icone_quase.png"


export default function Footer({
    answerdQuestions,
    footerIcons,
    cardsSortedsplit
}){

    const iconImg = [...footerIcons]
    return(
        
        <FooterConcluidos data-test="footer">

            <IconHolder>
                {footerIcons.map((iconImg, index) => <img key ={index}  src ={iconImg} data-test={index}></img>)}
            </IconHolder>
                <p>CONCLUÍDOS {answerdQuestions}/{cardsSortedsplit.length}</p>
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

const IconHolder = styled.div`
    display:flex;

    img{
        margin-left: 5px ;
        margin-bottom: 10px ;
    }
`
