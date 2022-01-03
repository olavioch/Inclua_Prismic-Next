import { 
    FooterArea,
    FooterAreas,
    FooterDescription,
    FooterImg,
    FooterList,
    FooterPhone,
    FooterSocialImg,
    FooterSocials,
    FooterStyle,
    FooterTitle,
    FooterItem
} from "./style";

const Footer = (props) => {
    return(
        <FooterStyle>
            <FooterAreas>
                <FooterImg src={props.logo}/>
                <FooterArea>
                    <FooterTitle>{props.titlemenuA}</FooterTitle>
                    <FooterList>
                        <FooterItem>{props.menuA[0].text}</FooterItem>
                        <FooterItem>{props.menuA[1].text}</FooterItem>
                        <FooterItem>{props.menuA[2].text}</FooterItem>
                        <FooterItem>{props.menuA[3].text}</FooterItem>
                    </FooterList>
                </FooterArea>
                <FooterArea>
                    <FooterTitle>{props.titlemenuB}</FooterTitle>
                    <FooterList>
                        <FooterItem>{props.menuB[0].text}</FooterItem>
                        <FooterItem>{props.menuB[1].text}</FooterItem>
                        <FooterItem>{props.menuB[2].text}</FooterItem>
                    </FooterList>
                </FooterArea>
                <FooterArea>
                    <FooterTitle>{props.titleContacts}</FooterTitle>
                    <FooterDescription>{props.description}</FooterDescription>
                    <FooterPhone>{props.phone}</FooterPhone>
                    <FooterSocials>
                        <FooterSocialImg src={props.socials[0].socialimage.url}/>
                        <FooterSocialImg src={props.socials[1].socialimage.url}/>
                        <FooterSocialImg src={props.socials[2].socialimage.url}/>
                    </FooterSocials>
                </FooterArea>
            </FooterAreas>
        </FooterStyle>
    );
}

export default Footer;