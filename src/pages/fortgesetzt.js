import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  BodyText,
  NormalText,
  QuoteText,
  LinkWrapper,
} from "../styles/BodyTextStyles"
import { ImageWrapper } from "../styles/ImageWrapper"

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
`
const InformierePic = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Illustration2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const Fortgesetzt = () => (
  <Layout>
    <SEO title="Fortgesetzt" />
    <ImageWrapper>
      <InformierePic />
    </ImageWrapper>
    <Title>
      <p>
        Am 1. September sind Landtagswahlen in Sachsen, Brandenburg und
        Thüringen.
      </p>
    </Title>
    <BodyText>
      <NormalText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt modi
        porro magni fugit? Fugiat fuga non recusandae nesciunt quos autem
        pariatur voluptatem distinctio exercitationem! Ab eum nulla id quaerat
        quas rem fugiat tenetur error nesciunt labore cumque iure ut possimus
        dolorum laboriosam placeat mollitia aspernatur ipsa dolore voluptatem
        at, inventore in. Natus, ipsam quibusdam animi minus quae voluptatem
        incidunt, delectus rem id corporis distinctio aliquam nesciunt sit
        facere, nam hic ab vel perspiciatis veritatis porro? Cumque distinctio
        eveniet sint ducimus tenetur commodi totam corrupti, debitis officia
        nulla pariatur enim, corporis amet! Ex labore mollitia soluta. Minima
        tempora eos adipisci odio.
      </NormalText>
      <QuoteText>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Magnam dicta perferendis
        pariatur corrupti officiis sit distinctio fuga itaque porro est nostrum,
        ipsam quisquam non facere veniam deserunt laudantium ratione eaque?"
      </QuoteText>
      <NormalText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt modi
        porro magni fugit? Fugiat fuga non recusandae nesciunt quos autem
        pariatur voluptatem distinctio exercitationem! Ab eum nulla id quaerat
        quas rem fugiat tenetur error nesciunt labore cumque iure ut possimus
        dolorum laboriosam placeat mollitia aspernatur ipsa dolore voluptatem
        at, inventore in. Natus, ipsam quibusdam animi minus quae voluptatem
        incidunt, delectus rem id corporis distinctio aliquam nesciunt sit
        facere, nam hic ab vel perspiciatis veritatis porro? Cumque distinctio
        eveniet sint ducimus tenetur commodi totam corrupti, debitis officia
        nulla pariatur enim, corporis amet! Ex labore mollitia soluta. Minima
        tempora eos adipisci odio.
      </NormalText>
      <QuoteText>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Magnam dicta perferendis
        pariatur corrupti officiis sit distinctio fuga itaque porro est nostrum,
        ipsam quisquam non facere veniam deserunt laudantium ratione eaque?"
      </QuoteText>
    </BodyText>
    <LinkWrapper>
      <Link to="/">
        <h1>züruck</h1>
      </Link>
      <Link to="/informiere-dich">
        <h1>weiter</h1>
      </Link>
    </LinkWrapper>
  </Layout>
)

export default Fortgesetzt
