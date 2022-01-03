import { 
    RecentesStyle,
    RecentesTitle,
    RecentesCards,
    RecentesCardA,
    RecentesCardsB,
    CardAArea,
    CardATitle,
    CardADescription,
    CardADate,
    RecentesCardB,
    CardBTitle,
    CardBDate,
    CardAImg,
    CardBImg,
    CardBArea
} from "./style";
import TopicButton from "../TopicButton";

const PostsRecentes = (props) => {
    return(
        <RecentesStyle>
            <RecentesTitle>{props.title}</RecentesTitle>
            <RecentesCards>
                <RecentesCardA>
                    <CardAImg src = {props.cardA.imagen.url}/>
                    <CardAArea>
                        <TopicButton>{props.cardA.topic}</TopicButton>
                        <CardATitle>{props.cardA.title[0].text}</CardATitle>
                        <CardADescription>{props.cardA.description[0].text}</CardADescription>
                        <CardADate>{props.cardA.date}</CardADate>
                    </CardAArea>
                </RecentesCardA>
                
                <RecentesCardsB>
                    <RecentesCardB>
                        <CardBImg src={props.cardB[0].imagen.url}/>
                        <CardBArea>
                            <TopicButton>{props.cardB[0].topic}</TopicButton>
                            <CardBTitle>{props.cardB[0].title[0].text}</CardBTitle>
                            <CardBDate>{props.cardB[0].date}</CardBDate>
                        </CardBArea>
                    </RecentesCardB>
                    <RecentesCardB>
                        <CardBImg src={props.cardB[1].imagen.url}/>
                        <CardBArea>
                            <TopicButton>{props.cardB[1].topic}</TopicButton>
                            <CardBTitle>{props.cardB[1].title[0].text}</CardBTitle>
                            <CardBDate>{props.cardB[1].date}</CardBDate>
                        </CardBArea>
                    </RecentesCardB>
                    <RecentesCardB>
                        <CardBImg src={props.cardB[2].imagen.url}/>
                        <CardBArea>
                            <TopicButton>{props.cardB[2].topic}</TopicButton>
                            <CardBTitle>{props.cardB[2].title[0].text}</CardBTitle>
                            <CardBDate>{props.cardB[2].date}</CardBDate>
                        </CardBArea>
                    </RecentesCardB>
                </RecentesCardsB>
            </RecentesCards>
        </RecentesStyle>
    );
}
export default PostsRecentes;