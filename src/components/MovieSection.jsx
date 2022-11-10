import styled from 'styled-components'

export default function MovieSection() {
  return (
    <>
    <MovieDiv primary>
      <MovieTitle>Lorem ipsum</MovieTitle>
      <Paragraph>Lorem ipsum</Paragraph>
    </MovieDiv>
    <MovieDiv >
      <MovieTitle>Lorem </MovieTitle>
      <Paragraph>Lorem ipsum</Paragraph>
    </MovieDiv>
    </>
  )
}

const MovieDiv = styled.div`
background: ${props => props.primary ? '#000' : "#131516"};
display: flex;
flex-direction: column;
height: 150px;
justify-content: space-evenly;
margin: 25px 0 25px ;
text-align: center;
`

const MovieTitle = styled.h3`
color: #278798;
background: black;
`

const Paragraph = styled.p`
`
