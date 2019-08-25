import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  BodyText,
  NormalText,
  QuoteText,
  LinkWrapper,
} from "../styles/BodyTextStyles"

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

const AuthorText = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: flex-end;
  font-weight: lighter;

  p {
    color: ${props => props.theme.primary};
  }
`
const Footer = styled.footer`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  overflow-wrap: break-word;

  h1 {
    margin: 0;
    font-size: 2.5rem;
    color: ${props => props.theme.primary};
    font-style: italic;
    font-weight: normal;
    text-transform: capitalize;
  }

  p,
  h1 {
    padding: 1rem 2rem;
  }
  p {
    font-weight: 600;
    font-size: 1.9rem;
    opacity: 0.8;
  }
`

const LeftSide = styled.div`
  background-color: ${props => props.theme.secondary};
  grid-column: span 1;
`
const Middle = styled.div`
  background-color: ${props => props.theme.secondary};
  grid-column: span 1;
`
const RightSide = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2rem;

  .top {
    grid-row: span 1;
    background-color: ${props => props.theme.primary};
    text-align: center;
    h1 {
      color: ${props => props.theme.white};
      font-size: 3rem;
      margin: 3rem;
    }
  }
  .bottom {
    background-color: ${props => props.theme.secondary};
    grid-row: span 3;
  }
`

const InformiereDich = () => (
  <Layout>
    <SEO title="Informiere Dich" />
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
      <AuthorText>
        <p>Text: Luise Morgeneyer</p>
      </AuthorText>
    </BodyText>
    <Footer>
      <LeftSide>
        <h1>{`infomaterial`.toUpperCase()}</h1>
        <p>
          http://lasse-petersdotter.de/category/strategien-gegen-rechts-extremismus
        </p>
        <p>
          Holocaustleugnern entschlossen entgegen treten: "Nova eine Stunde
          Wissen"
        </p>
        <p>
          "März 2015 berichten sie seitedem auf dem Twitter-Profil
          @streetcoverage von [3] und über Aktionen, Konflikte und
          Demonstrationen rund um das Thema Flüchtlinge und Asyl. [1] Unter
          anderem über die fremdenfeindlichen Proteste in Freital und den
          Brandanschlag in Meißen.[2]" "'Reportagen und Liveticker von dort, wo
          es brennt. Gegen Rassismus und Fremdenfeindlickeit' lautet die
          Beschreibung auf Twitter.[4] Ziel sei es, in einem Format zu
          berichten, das nüchtern und objektiv ein Bild der Lage liefern könne.
          - @strassengezschitzer"
        </p>
        <p>**https://www.antidiskriminierungsstele.de/DE/Home/home_node.html</p>
        <p>http://www.buendnis-toleranz.de/Veranstaltungstipss!</p>
        <p>Wieso ist die AfD im Osten so stark?</p>
      </LeftSide>
      <Middle>
        <h1>Was kann ich tun?</h1>
      </Middle>
      <RightSide>
        <div className="top">
          <h1>MEINE VERSUCHE UND WAS MAN DARAUS LERNEN KANN</h1>
        </div>
        <div className="bottom">
          <h1>Gesprächshilfen</h1>
        </div>
      </RightSide>
    </Footer>
    <LinkWrapper>
      <Link to="/fortgesetzt">
        <h1>züruck</h1>
      </Link>
    </LinkWrapper>
  </Layout>
)

export default InformiereDich

// INFOMATERIAL
// http://lasse-petersdotter.de/category/strategien-gegen-rechts-extremismus

// Holocaustleugnern entschlossen entgegen treten: "Nova eine Stunde Wissen"

// "März 2015 berichten sie seitedem auf dem Twitter-Profil @streetcoverage von [3] und über Aktionen, Konflikte und Demonstrationen rund um das Thema Flüchtlinge und Asyl. [1] Unter anderem über die fremdenfeindlichen Proteste in Freital und den Brandanschlag in Meißen.[2]"
// "'Reportagen und Liveticker von dort, wo es brennt. Gegen Rassismus und Fremdenfeindlickeit' lautet die Beschreibung auf Twitter.[4] Ziel sei es, in einem Format zu berichten, das nüchtern und objektiv ein Bild der Lage liefern könne. - @strassengezschitzer"

// **https://www.antidiskriminierungsstele.de/DE/Home/home_node.html

// http://www.buendnis-toleranz.de/Veranstaltungstipss!
// Wieso ist die AfD im Osten so stark?
// Was kann ich tun?
// Andere Schwerpunkte als Flüchtlings-Politik zu setzten, Auch die Landtagswahl muss eine KLimawahl WebGLRenderingContext. FFF FFF Dresden
// @kleinerfünf

// Überprüfe Dich selbst immer wieder - Humor, Grenze, welche Aussage akzeptierst du?

// WORKSHOPS
// Rassismuskritisch denken lernen in deiner Firma initieren https://detektor.fm/gesllschaft/rassismus-workshops
