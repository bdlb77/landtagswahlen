import styled from "styled-components"

const NormalText = styled.p`
  font-size: 21px;
  span {
    font-weight: 200;
  }
`
const QuoteText = styled.p`
  font-weight: 200;
  font-size: 3rem;
  text-align: center;
  margin: 0 auto;
  font-family: "Garamond";
`

const LinkWrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  justify-content: center;

  a {
    padding: 0 8rem;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
    font-style: italic;
    font-weight: normal;
    margin: 0 2rem;
  }
  h1 {
    margin: 0;
    font-size: 2.5rem;
  }
`
const Title = styled.header`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  margin: 10rem 0;
  p {
    text-align: center;
    font-size: 4rem;
    width: 50%;
    margin: 0 auto;
    font-weight: 300;
    font-family: "Garamond";
  }

  @media screen and (max-width: 450px) {
    margin: 0;
    p {
      width: 90%;
      font-size: 2.5rem;
    }
  }
`
const BodyText = styled.section`
  width: 50%;
  margin: 8rem auto;
  font-size: 2.5rem;
  font-family: "Futura";
  @media screen and (max-width: 450px) {
    width: 95%;
    ${NormalText} {
      margin: 1.5rem;
      font-size: 16px;
    }
    ${QuoteText} {
      font-size: 21px;
    }
  }
`
export { BodyText, NormalText, QuoteText, LinkWrapper, Title }
