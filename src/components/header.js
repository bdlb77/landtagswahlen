import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Title = styled.div`
  width: 60%;
  margin-left: 15rem;
  h1 {
    font-size: 10rem;
    font-style: italic;
    color: ${props => props.theme.primary};
    font-weight: 400;
    margin-bottom: 0rem;
  }
  p {
    margin-top: 0;
    font-size: 3.5rem;
    font-weight: lighter;
    font-family: "Garamond";
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  margin-bottom: 5rem;

  a {
    padding: 1rem 2.5rem;
    background-color: ${props => props.theme.secondary};
    h3 {
      margin: 0;
      font-style: italic;
    }
  }
`
const HeaderStyled = styled.header`
  background-color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 769px) {
    ${Title}, ${Nav} {
      width: 90%;
    }
  }

  @media screen and (max-width: 450px) {
    ${Title}, ${Nav} {
      width: 90%;
    }
    h1 {
      font-size: 49px;
      text-align: center;
    }
    p {
      font-size: 24px;
      text-align: center;
    }
    ${Nav}, ${Title} {
      margin-left: 0;
    }
    a {
      font-size: 20px;
      padding: 1rem;
      width: 250px;
    }
    ${Nav} {
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 200px;
    }
  }
`
const Header = () => (
  <HeaderStyled>
    <Title>
      <h1>Und wen wählst Du?</h1>
      <p>
        - Darf man das eigentlich fragen? Sollte man? Und vor allem: Will man?
      </p>
    </Title>

    <Nav>
      <Link to="/">
        <h3>Startseite</h3>
      </Link>
      <Link to="informiere-dich">
        <h3>Informiere Dich</h3>
      </Link>

      <a href="https://www.handgeschrieben-verlag.net" target="_blank">
        <h3> Handgeschrieben</h3>
      </a>
    </Nav>
  </HeaderStyled>
)

export default Header
