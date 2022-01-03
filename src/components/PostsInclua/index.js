import { 
    IncluaStyle,
    IncluaTitle,
    IncluaCards,
    IncluaCardA,
    IncluaCardsB,
    CardAArea,
    CardATitle,
    CardADescription,
    CardADate,
    IncluaCardB,
    CardBTitle,
    CardBDate,
    CardAImg,
    CardBImg,
    CardBArea
} from "./style";
import TopicButton from "../TopicButton";

const PostsInclua = (props) => {
    return(
        <IncluaStyle>
            <IncluaCards>
                <IncluaTitle>{props.title}</IncluaTitle>
                <IncluaCardA>
                    <CardAImg src = {props.cardA.imagen.url}/>
                    <CardAArea>
                        <TopicButton>{props.cardA.topic}</TopicButton>
                        <CardATitle>{props.cardA.title[0].text}</CardATitle>
                        <CardADescription>{props.cardA.description[0].text}</CardADescription>
                        <CardADate>{props.cardA.date}</CardADate>
                    </CardAArea>
                </IncluaCardA>
                
                <IncluaCardsB>
                    <IncluaCardB>
                        <CardBImg src={props.cardB[0].imagen.url}/>
                        <CardBArea>
                            <TopicButton>{props.cardB[0].topic}</TopicButton>
                            <CardBTitle>{props.cardB[0].title[0].text}</CardBTitle>
                            <CardBDate>{props.cardB[0].date}</CardBDate>
                        </CardBArea>
                    </IncluaCardB>
                    <IncluaCardB>
                        <CardBImg src={props.cardB[1].imagen.url}/>
                        <CardBArea>
                            <TopicButton>{props.cardB[1].topic}</TopicButton>
                            <CardBTitle>{props.cardB[1].title[0].text}</CardBTitle>
                            <CardBDate>{props.cardB[1].date}</CardBDate>
                        </CardBArea>
                    </IncluaCardB>
                    <IncluaCardB>
                        <CardBImg src={props.cardB[2].imagen.url}/>
                        <CardBArea>
                            <TopicButton>{props.cardB[2].topic}</TopicButton>
                            <CardBTitle>{props.cardB[2].title[0].text}</CardBTitle>
                            <CardBDate>{props.cardB[2].date}</CardBDate>
                        </CardBArea>
                    </IncluaCardB>
                </IncluaCardsB>
            </IncluaCards>
        </IncluaStyle>
    );
}
export default PostsInclua;