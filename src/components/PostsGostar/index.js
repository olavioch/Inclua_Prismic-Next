import { 
    GostarStyle,
    GostarTitle,
    GostarCards,
    GostarCardsB,
    GostarCardB,
    CardBTitle,
    CardBDate,
    CardBImg,
    CardBArea
} from "./style";
import TopicButton from "../TopicButton";

const PostsGostar = (props) => {
    return(
        <GostarStyle>
            <GostarCards>
                <GostarTitle>{props.title}</GostarTitle>
                <GostarCardsB>
                    <GostarCardB>
                        <CardBImg src={props.cardB[0].imagen.url}/>
                        <CardBArea>
                            <TopicButton>{props.cardB[0].topic}</TopicButton>
                            <CardBTitle>{props.cardB[0].title[0].text}</CardBTitle>
                            <CardBDate>{props.cardB[0].date}</CardBDate>
                        </CardBArea>
                    </GostarCardB>
                    <GostarCardB>
                        <CardBImg src={props.cardB[1].imagen.url}/>
                        <CardBArea>
                            <TopicButton>{props.cardB[1].topic}</TopicButton>
                            <CardBTitle>{props.cardB[1].title[0].text}</CardBTitle>
                            <CardBDate>{props.cardB[1].date}</CardBDate>
                        </CardBArea>
                    </GostarCardB>
                    <GostarCardB>
                        <CardBImg src={props.cardB[2].imagen.url}/>
                        <CardBArea>
                            <TopicButton>{props.cardB[2].topic}</TopicButton>
                            <CardBTitle>{props.cardB[2].title[0].text}</CardBTitle>
                            <CardBDate>{props.cardB[2].date}</CardBDate>
                        </CardBArea>
                    </GostarCardB>
                </GostarCardsB>
            </GostarCards>
        </GostarStyle>
    );
}
export default PostsGostar;