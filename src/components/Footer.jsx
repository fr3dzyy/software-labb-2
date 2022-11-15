import styled from 'styled-components'
import { Cloudinary } from "@cloudinary/url-gen";
import { fit } from "@cloudinary/url-gen/actions/resize";
import {
  Facebook,
  Instagram,
  SuitHeartFill,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";

export const Footer = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dvvauf785",
    },
  });

  const logoImage2 = cld.image("TMDb_af2p0i");
  const tmdbLogo = logoImage2.resize(fit().width(80).height(80)).toURL();

  return (
    <>
    <BottomSection>
        <Links>
          <Paragraph>About</Paragraph>
          <Paragraph>Contact</Paragraph>
          <Paragraph>Help</Paragraph>
          <Paragraph>
            Sharks
            <SuitHeartFill />
          </Paragraph>
        </Links>
        <Img alt="logo" src={tmdbLogo}  />
        <IconContainer>
        <Instagram size="30" />
        <Facebook size="30" />
        <Twitter size="30" />
        <Youtube size="30" />
        </IconContainer>
    </BottomSection>
        <Copy>&copy; SharkMovies 2022</Copy>

    </>
  );
};

const BottomSection = styled.footer`
border-top: 1px solid #fff;
  display: flex;
  margin: 5% 10% 25px;
  padding-top: 25px;
  align-items: center;
`

const Copy = styled.p`
display: flex;
justify-content: center;
font-size: large;
`

const Img = styled.img`
display: flex;
justify-content: center;
height: 3rem;
margin: auto;
padding: 0 40px 0 40px;
`

const IconContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 0 25px 0 15px;
width: 400px;
`

const Links = styled.div`
display: flex;
width: 400px;
`
const Paragraph = styled.p`
display: flex;
justify-content: space-around;
margin: auto;
padding: 5px;
`
