import {
    CarouselStyle,
    CarouselSlides,
    CarouselSlide,
    CarouselContent, 
    CarouselChoice,
    CarouselButton,
    CarouselImg,
    CarouselDescription,
    CarouselDate,
    CarouselTitle}         
from "./style";
import TopicButton from "../TopicButton";
import { useState } from "react";

const Carousel = (props) => {
    
    const [position, setPosition] = useState(0);

    return(
        <CarouselStyle>
            
            <CarouselSlides pos={position}>
                
                <CarouselSlide>
                    <CarouselImg src={props.items[0].imagen.url}/>
                    <CarouselContent>
                        <TopicButton>{props.items[0].topic[0].text}</TopicButton>
                        <CarouselTitle>{props.items[0].title[0].text}</CarouselTitle>
                        <CarouselDescription>{props.items[0].descricao[0].text}</CarouselDescription>
                        <CarouselDate>{props.items[0].date}</CarouselDate>
                    </CarouselContent>
                </CarouselSlide>
                
                <CarouselSlide>
                    <CarouselImg src={props.items[1].imagen.url}/>
                    <CarouselContent>
                        <TopicButton>{props.items[1].topic[0].text}</TopicButton>
                        <CarouselTitle>{props.items[1].title[0].text}</CarouselTitle>
                        <CarouselDescription>{props.items[1].descricao[0].text}</CarouselDescription>
                        <CarouselDate>{props.items[1].date}</CarouselDate>
                    </CarouselContent>
                </CarouselSlide>
                
                <CarouselSlide>
                    <CarouselImg src={props.items[2].imagen.url}/>
                    <CarouselContent>
                        <TopicButton>{props.items[2].topic[0].text}</TopicButton>
                        <CarouselTitle>{props.items[2].title[0].text}</CarouselTitle>
                        <CarouselDescription>{props.items[2].descricao[0].text}</CarouselDescription>
                        <CarouselDate>{props.items[2].date}</CarouselDate>
                    </CarouselContent>
                </CarouselSlide>
            
            </CarouselSlides>
            
            <CarouselChoice>
                <CarouselButton 
                    onClick = {() => setPosition(0)}
                    pos = {position}
                />
                <CarouselButton 
                    onClick = {() => setPosition(100)}
                    pos = {position}
                />
                <CarouselButton
                    onClick = {() => setPosition(200)}
                    pos = {position}
                />
            </CarouselChoice>
        
        </CarouselStyle>
    );
};
export default Carousel;