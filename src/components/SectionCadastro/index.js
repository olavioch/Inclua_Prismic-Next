import { 
    CadastroArea,
    CadastroContent,
    CadastroDescription,
    CadastroEmail,
    CadastroOrder,
    CadastroStyle,
    CasdastroButton 
} from "./style";

const SectionCadastro = (props) => {
    return(
        <CadastroStyle>
            <CadastroArea>
                <CadastroDescription>{props.description}</CadastroDescription>
                <CadastroContent>
                    <CadastroOrder>{props.order}</CadastroOrder>
                    <CadastroEmail placeholder={props.placeholder}/>
                    <CasdastroButton>{props.button}</CasdastroButton>
                </CadastroContent>
            </CadastroArea>
        </CadastroStyle>
    );
}
export default SectionCadastro;