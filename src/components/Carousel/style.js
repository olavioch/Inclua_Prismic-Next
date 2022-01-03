import styled from "styled-components";

export const CarouselStyle = styled.section`
    padding-top:90px
`
export const CarouselSlides = styled.div`
    display:flex;
    width: 300vw;
    position: relative;
    transform: translateX(-${props => props.pos}vw);
    transition: transform 1s;
`
export const CarouselSlide = styled.div`
    display: flex;
    width: 100vw;
`
export const CarouselContent = styled.div`
    padding: 94px 158px 90px 63px;
    margin: auto;
`
export const CarouselChoice = styled.div`
    text-align: center;
    padding-top: 35px;
`
export const CarouselButton = styled.span`
    display: inline-block;
    width: 17px;
    height:17px;
    margin-right: 21px;
    border-radius: 100%;
    cursor: pointer;
    &:nth-child(1){
        background-color:${props => props.pos === 0? "#FF8848" : "#C1C1C1"}
    }
    &:nth-child(2){
        background-color:${props => props.pos === 100? "#FF8848" : "#C1C1C1"}
    }
    &:nth-child(3){
        background-color:${props => props.pos === 200? "#FF8848" : "#C1C1C1"}
    }
`
export const CarouselImg = styled.img`
    width: 80vw;
`
export const CarouselTitle = styled.h1`
    margin: 20px 0 20px;
`
export const CarouselDescription = styled.p`
    margin-bottom: 32px;
` 
export const CarouselDate = styled.span`
    color: #5A5A5A;
`