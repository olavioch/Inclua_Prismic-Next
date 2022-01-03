import styled from "styled-components";

export const CadastroStyle = styled.section`
    background-color: #33254B;
`
export const CadastroContent = styled.div`
    margin: auto;
`
export const CadastroDescription = styled.p`
    color: #fff;
    margin-right: 100px;
    font-size: 24px;
    line-height: 38px;
    width: 371px;
`
export const CadastroArea = styled.div`
    width: 1175px;
    margin: auto;
    display:flex;
    padding: 50px 0;
`
export const CadastroOrder = styled.p`
    color: #fff;
    font-size: 18px;
`
export const CadastroEmail = styled.input`
    width: 320px;
    background-color: #33254B;
    color: #fff;
    border:none;
    border-bottom: 1px solid #fff;
    height: 34px;
    &::placeholder{
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
    }
    &:focus{
        border: none;
    }
`
export const CasdastroButton = styled.button`
    background-color: #fff;
    color: #33254B;
    font-size: 24px;
    padding: 10px 34px;
    border-radius: 24px;
    border: none;
    margin-left: 35px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
`
