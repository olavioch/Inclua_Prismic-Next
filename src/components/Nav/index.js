import React from 'react';
import {NavStyle, LogoStyle, LinkStyle, LinksStyle} from './style';
import GreenButton from '../GreenButton';
export default function Nav(props){
    return(
        <NavStyle>
            <LogoStyle src={props.img}/>
            <LinksStyle>
                <LinkStyle>{props.links[0].text}</LinkStyle>
                <LinkStyle>{props.links[1].text} </LinkStyle>
                <LinkStyle>{props.links[2].text} </LinkStyle>
                <LinkStyle>{props.links[3].text} </LinkStyle>
            </LinksStyle>
            <GreenButton>{props.button}</GreenButton>
        </NavStyle>
    )
};