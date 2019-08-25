import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Title = styled.div`
  width: 55%;
  h1 {
    font-style: italic;
    font-weight: normal;
    font-size: 6rem;
    color: ${props => props.theme.primary};
  }
  p {
    font-size: 3rem;
    font-weight: lighter;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  margin-left: -15rem;
  margin-bottom: 5rem;

  a {
    padding: 0 2rem;
    background-color: ${props => props.theme.secondary};
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
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
    ${Nav} {
      margin-left: 0;
    }
    a {
      font-size: 1.5rem;
      padding: 0;
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
      <Link to="/">Startseite</Link>
      <Link to="informiere-dich">Informiere Dich</Link>
      <Link to="https://www.handgeschrieben-verlag.net" target="_blank">
        handgeschrieben
      </Link>
    </Nav>
  </HeaderStyled>
)

export default Header
