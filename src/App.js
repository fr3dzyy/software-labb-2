import LogRocket from "logrocket";
import styled from "styled-components";
import { useCookies } from "react-cookie";

import { ImageCarousel } from "./components/ImageCarousel";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import MovieSection from "./components/MovieSection";
import { useEffect, useState } from "react";

function App() {
  const [cookies, setCookie] = useCookies(["name"]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (!cookies.name) {
      setDisplay(true);
    }
  }, [cookies]);

  function acceptCookie() {
    LogRocket.init("znathy/mango-tree");

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
            <CookieMsgSmall>
              We collect cookies to deliver better user experience! Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Deleniti minima nam
              molestias, quisquam quos sit suscipit ipsum quidem, porro libero
              veniam. Ipsam cupiditate exercitationem ex fugiat, est error dolor
              delectus!
            </CookieMsgSmall>
          </CookieMessage>
          <DeclineBtn onClick={(e) => setDisplay(false)}>Decline</DeclineBtn>
          <AcceptBtn onClick={acceptCookie}>Allow cookies</AcceptBtn>
        </CookieDiv>
      )}
      <ImageCarousel />
      <MovieSection />
      <Footer />
    </>
  );
}

export default App;

const AcceptBtn = styled.button`
  :hover {
    font-weight: bold;
  }
`;

const CookieMsgSmall = styled.p`
  font-size: 15px;
  margin: 15px 25px 0;
`;

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

  :hover {
    font-weight: bold;
  }
`;
