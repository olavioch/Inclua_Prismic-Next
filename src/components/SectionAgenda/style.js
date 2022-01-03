import styled from "styled-components";
import back from "../elipse.svg";

export const AgendaStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${back.src});
    background-repeat: no-repeat;
    background-position: 173px;
`
export const AgendaCard = styled.div`
    display: flex;
    width: 1000px;
    padding: 200px 0;
`
export const AgendaImg = styled.img`
    width: 438px;
    height: 297px;
    margin-right: 90px;
`
export const AgendaContent = styled.div`
    margin: auto;
`
export const AgendaTitle = styled.h1`
    font-size: 36px;
    line-height: 46px;
    margin:0;
    &:nth-child(2){
        color: #FF8847;
    }
`
export const AgendaDescription = styled.p`
    font-size 20px;
    line-height: 32px;
`