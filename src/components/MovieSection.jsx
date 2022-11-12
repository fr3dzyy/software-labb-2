import styled from "styled-components";
import { Api } from "./Api";
import { GetLists } from "./GetLists";

export default function MovieSection() {
  return (
    <>
      <MovieDiv primary>
        <MovieTitle>Popular now</MovieTitle>
        <CardDiv>
          <Api category="popular" />
        </CardDiv>
      </MovieDiv>
      <MovieDiv>
        <MovieTitle>Recommended Movies</MovieTitle>
        <CardDiv>
          <GetLists category="8227557" />
        </CardDiv>
      </MovieDiv>
      <MovieDiv>
        <MovieTitle>Upcoming</MovieTitle>
        <CardDiv>
          <Api category="upcoming" />
        </CardDiv>
      </MovieDiv>
      <MovieDiv>
        <MovieTitle>Disturbing Movies</MovieTitle>
        <CardDiv>
          <GetLists category="8227656" />
        </CardDiv>
      </MovieDiv>
    </>
  );
}

const MovieDiv = styled.div`
  background: ${(props) => (props.primary ? "#000" : "#131516")};
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-evenly;
  margin: 125px 0 25px;
  text-align: center;
`;

const MovieTitle = styled.h3`
  color: #278798;
  background: black;
`;

const CardDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
