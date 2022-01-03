import styled from "styled-components";

//sections definitions
export const IncluaStyle = styled.section`
    background-color: #33254B;
    display: flex;
    justify-content: center;
    padding: 100px 0;
`
export const IncluaTitle = styled.h1`
    color: #ffffff;
    margin-bottom: 40px;
    font-size: 28px;
`
export const IncluaCards = styled.div`
    width: 1175px;
    display: flex;
    flex-direction: column;
`
//card Area
export const IncluaCardA = styled.article`
    background-color: #ffffff;
    display: flex;
    margin-bottom: 25px;
    padding: 9px 54px 9px 9px;
    `
export const CardAArea = styled.div`
    margin:auto;
`
export const CardAImg = styled.img`
    width: 506px;
    height: 311px;
    margin-right: 47px;
`
export const CardATitle = styled.h2`
    font-size: 24px;
    line-height: 38px;
    margin: 17px 0 14px;
`
export const CardADescription = styled.p`
    font-size: 16px;
    line-height: 25px;
`
export const CardADate = styled.span`
    color: #5A5A5A;
`
//CardsB Area

export const IncluaCardB = styled.article`
    width: 375px;
    background-color: #ffffff;
    padding: 9px 9px 15px;
    &:nth-child(2){
        margin: 0 25px;
    }
`
export const IncluaCardsB = styled.div`
    display: flex;
`
export const CardBArea = styled.div`
    padding: 19px 7px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 175px;
    justify-content: space-between;
`
export const CardBImg = styled.img`
    width: 357px;
    height: 211px;
`

export const CardBTitle = styled.h3`
    font-size: 20px;
`
export const CardBDate = styled.span`
    color: #5A5A5A;
`


