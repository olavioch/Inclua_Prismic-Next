import GreenButton from "../GreenButton";
import { 
    AgendaCard,
    AgendaContent,
    AgendaDescription,
    AgendaStyle,
    AgendaImg,
    AgendaTitle 
} from "./style";

const SectionAgenda = (props) => {
    return(
        <AgendaStyle>
            <AgendaCard>
                <AgendaImg src={props.img}/>
                <AgendaContent>
                    <AgendaTitle>{props.titlecolor[0].text}</AgendaTitle>
                    <AgendaTitle>{props.titlecolor[1].text}</AgendaTitle>
                    <AgendaDescription>{props.description}</AgendaDescription>
                    <GreenButton>{props.button}</GreenButton>
                </AgendaContent>
            </AgendaCard>
        </AgendaStyle>
    );
}
export default SectionAgenda;