import styled from "styled-components"
const BodyText = styled.section`
  width: 50%;
  margin: 8rem auto;
  font-size: 2.5rem;
`
const NormalText = styled.p`
  font-weight: 400;
`
const QuoteText = styled.p`
  font-weight: 250;
  font-size: 3rem;
  width: 80%;
  text-align: center;
  margin: 0 auto;
`

const LinkWrapper = styled.div`
  margin-top: 5rem;
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

export { BodyText, NormalText, QuoteText, LinkWrapper }
