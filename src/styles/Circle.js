import styled from "styled-components"

const Circle = styled.div`
  position: relative;
  height: 350px;
  width: 350px;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${props => props.theme.white};
    font-size: 4.5rem;
    width: 60%;
    text-align: center;
    line-height: 5rem;
    font-weight: lighter;
  }
`

export { Circle }
