import styled from "styled-components";

//sections definitions
export const GostarStyle = styled.section`
    display: flex;
    justify-content: center;
    padding: 100px 0 0;
`
export const GostarTitle = styled.h1`
    margin-bottom: 40px;
    font-size: 28px;
`
export const GostarCards = styled.div`
    width: 1175px;
    display: flex;
    flex-direction: column;
`

//CardsB Area
export const GostarCardB = styled.article`
    width: 375px;
    background-color: #ffffff;
    border: 1px solid #CECECE;
    &:nth-child(2){
        margin: 0 25px;
    }
`
export const GostarCardsB = styled.div`
    display: flex;
`
export const CardBArea = styled.div`
    padding: 19px 16px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 195px;
    justify-content: space-between;
`
export const CardBImg = styled.img`
    width: 100%;
    height: 211px;
`

export const CardBTitle = styled.h3`
    font-size: 20px;
`
export const CardBDate = styled.span`
    color: #5A5A5A;
`


