import {Header} from "../components/Header";
import {ImageCarousel} from "../components/ImageCarousel";
import MovieSection from "../components/MovieSection";
import {Footer} from "../components/Footer";
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";
import styled from "styled-components";
import LogRocket from "logrocket";


LogRocket.init("znathy/mango-tree");


export const Home = () => {
    const [cookies, setCookie] = useCookies(["name"]);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        if (!cookies.name) {
            setDisplay(true);
        }
    }, [cookies]);

    function acceptCookie() {
        let expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + 1 * 3600 * 1000);

        setCookie("name", "cookie-from-hell", {
            expires: expireDate,
            httpOnly: false,
            path: "/",
            secure: true,
        });
        setDisplay(false);
    }
    return (
        <>
        <Header />
    {display && (
        <CookieDiv>
            <CookieMessage>
                Allow the use of cookies from SharkMovies in this browser?
            </CookieMessage>
            <DeclineBtn onClick={(e) => setDisplay(false)}>Decline</DeclineBtn>
            <AcceptBtn onClick={acceptCookie}>Allow cookies</AcceptBtn>
        </CookieDiv>
    )}
    <ImageCarousel />
    <MovieSection />
    <Footer />
        </>
    )
}

const AcceptBtn = styled.button``;

const CookieDiv = styled.div`
  border: 1px solid grey;
  margin: 50px 10% 0;
  padding-bottom: 20px;
  position: absolute;
  text-align: center;
  width: 80%;
  z-index: 1;

  @media (min-width: 769px) {
    margin-left: 30%;
    width: 40%;
  }
`;

const CookieMessage = styled.h3`
  margin-bottom: 20px;
  padding: 5px 10px 0 10px;
`;

const DeclineBtn = styled.button`
  margin-right: 25px;
`;
