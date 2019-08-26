import styled from "styled-components"

const NormalText = styled.p`
  font-weight: 600;
  span {
    font-size: 3.5rem;
    font-weight: 200;
  }
`
const QuoteText = styled.p`
  font-weight: 200;
  font-size: 3rem;
  width: 80%;
  text-align: center;
  margin: 0 auto;
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
  }

  @media screen and (max-width: 450px) {
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

  @media screen and (max-width: 450px) {
    width: 95%;
    ${NormalText} {
      margin: 1.5rem;
      font-size: 2.5rem;
    }
    ${QuoteText} {
      font-size: 3rem;
    }
  }
`
export { BodyText, NormalText, QuoteText, LinkWrapper, Title }
