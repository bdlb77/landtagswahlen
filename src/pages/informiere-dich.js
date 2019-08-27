import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Lulu from "../images/a.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LinkWrapper, Title } from "../styles/BodyTextStyles"
import { Circle } from "../styles/Circle"
import AudioLu from "../components/AudioLu"
const DankeText = styled.h1`
  text-align: center;
  margin: 10rem 0;
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

const PictureSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .image {
    position: relative;
    margin: 0 auto;
    background-image: url(${Lulu});
    height: 900px;
    width: 100%;
    object-fit: image;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  ${Circle} {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: -150px;
    left: -25px;
  }
`

const AberSection = styled.section`
  background-color: ${props => props.theme.secondary};
`

const GesprachSection = styled.section`
  span {
    color: ${props => props.theme.primary};
  }
`

const KannSection = styled.section``

const InfoSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  background-color: ${props => props.theme.secondary};
  width: 90%;
  margin: 15rem auto;
  padding: 2rem 5rem;
  min-height: 500px;
  span {
    color: ${props => props.theme.primary};
  }

  .info {
    grid-column: span 7;
  }
  .pen {
    grid-column: span 3;
    width: 600px;
    transform: rotate(-18deg) translate(-100px, -106px);
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    .pen {
      transform: rotate(-18deg);
    }
  }
  @media screen and (max-width: 450px) {
    .pen {
      width: 250px;
    }
  }
`
const MainWrapper = styled.main`
  margin: 0 auto;
  width: 95%;
  word-break: break-word;

  h1 {
    color: ${props => props.theme.primary};
    font-size: 4rem;
  }

  ${Circle} {
    h1 {
      font-size: 2.5rem;
      width: 80%;
      margin-left: 0;
      color: ${props => props.theme.white};
    }
  }

  ${KannSection}, ${GesprachSection}, ${AberSection}{
    margin: 0 auto;
    padding: 2rem 5rem;
    width: 90%;
  }
  @media screen and (min-width: 451px) and (max-width: 1024px){
    ${AberSection} {
      margin-top: 25rem;
    }
    ${Circle} {
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      bottom: -35rem;
    }
    
  }
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 20px;
  grid-row-gap: 50px;

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

    ${Circle} {
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      bottom: -15rem;
    }

    ${PictureSection} {
      display: flex;
      justify-content: center;
      height: 800px;
      align-items: flex-start;
      margin-bottom: 25rem;
    }
    ${PictureSection}, ${KannSection}, ${GesprachSection}, ${AberSection} {
      width: 100%;
      padding: 1rem;
    }
  }
`
const Pen = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Kugelschreiber.png" }) {
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
const InformiereDich = () => {
  return (
    <Layout>
      <SEO title="Informiere Dich" />
      <Title>
        <p>
          Am 1. September sind Landtagswahlen in Sachsen, Brandenburg und
          Thüringen.
        </p>
      </Title>
      <MainWrapper>
        <GridWrapper>
          <PictureSection>
            <div className="image">
              <Circle color={props => props.theme.accent}>
                <AudioLu />
                <h1>MEINE VERSUCHE UND WAS MAN DARAUS LERNEN KANN</h1>
              </Circle>
            </div>
          </PictureSection>
          <AberSection>
            <h1>Aber Warum ist das eigentlich so?</h1>
            <p>
              Aber warum ist das eigentlich so? Ich bin in Dresden groß
              geworden, habe dort Politikwissenschaft studiert und meine zu
              wissen, wie die Menschen Zuhause ticken. Ich kenne viele Ursachen
              für den Rechtsdrang in Ostdeutschland, aber online eine Erklärung,
              Dokumentation, einen Beitrag zu finden, der wissenschaft- lich und
              faktenbasiert zusammenfasst, was die Unterschiede zu
              Westdeutschland ausmacht, gestaltet sich schwierig.
            </p>
            <p>
              Immer wieder aber trifft man auf Titeln wie
              diesen:„Rechtsextremismus - Der Osten muss erst mal seine eigene
              Geschichte aufarbeiten“ (
              <a href="https://www.zeit.de/gesellschaft/zeitgeschehen/2019-03/rechts-extremismus-ostdeutschland-verantwortung-erwiderung">
                https://www.zeit.de/gesellschaft/zeitgeschehen/2019-03/rechts-extremismus-ostdeutschland-verantwortung-erwiderung
              </a>
              ) . Die in den Köpfen immer noch existierende Spaltung verstärkt
              und die Verantwortlichkeit ganz klar an eine Seite haftet. Dennoch
              schafft es der Artikel, differenziert zu sein.
            </p>
            <p>
              Auch Puls hat einen Erklärungsversuch gewagt (
              <a href="https://www.youtube.com/-watch?v=3paOFE33UNE">
                https://www.youtube.com/-watch?v=3paOFE33UNE
              </a>
              ) und einen kurzen Beitrag des WDR möchte ich euch als groben
              Einstieg in die Thematik außerdem ans Herz legen (
              <a href="https://www1.w-dr.de/mediathek/video/sendungen/aktuelle-stun-de/video-warum-ist-der-osten-so-anfaellig-fuer-rechts-100.html">
                https://www1.w-dr.de/mediathek/video/sendungen/aktuelle-stun-de/video-warum-ist-der-osten-so-anfaellig-fuer-rechts-100.html
              </a>
              ) .
            </p>
            <p>
              Besonders ab Minute vier wird aktiv dazu aufgerufen, auf einander
              zuzugehen und sich mit der Historie des jeweils anderen Systems
              auseinanderzusetzen. Auch ich merke immer wieder, wie Freunde -
              aus den alten Bundesländern stam- mend - kaum oder nur sehr
              lückenhaft über die Geschichte der ehemaligen DDR bescheid wissen.
            </p>
            <p>
              Unbedingt lesen „Es kann auf eine dämonische Art befreiend sein,
              wenn von dir und den Leuten um dich herum nur noch das
              Schlechteste erwartet wird.“ – aus einem (
              <a href="https://taz.de/Jugendliche-in-Ostdeutschland/!5536453/">
                https://taz.de/Jugendliche-in-Ostdeutschland/!5536453/
              </a>
              ), der mich sprachlos macht. Der Fragen aufwirft. An meine
              Verwandtschaft. Wir müssen darüber reden! „Sitzen wir lieber mit
              einem uns vertrauten Rechtsext- remen am Tisch und tun so, als
              wäre alles normal oder stellen wir ihn und damit auch uns selbst
              infrage, indem wir uns für die einsetzen, die für uns Fremde
              sind?“
            </p>
          </AberSection>
          <GesprachSection>
            <h1>Gesprächshilfen</h1>
            <p>
              Worauf ich aber schließlich mit meinem Text hinaus will und was
              ich jetzt, eine Woche vor den Landtagswahlen als letzte
              Möglichkeit für uns sehe ist: reden. Den Onkel anrufen, die
              Großeltern besuchen, den Sitznachbarn aus der 3. Klasse
              anschreiben.
            </p>
            <p>
              Nicht mehr Kleinbei geben, sondern aktiv ansprechen und Raum und
              Zeit für ein Gespräch, eine Diskussion geben. Das ist nicht
              einfach und das tut weh und das kann im schlechtesten Fall dazu
              führen, dass sich die Fronten verhärten. Also solltest Du Dich auf
              so ein Gespräch entsprechend vorbereiten. <br />
              <span>Nimm Dir also Zeit – davor, dafür und danach!</span>
            </p>

            <p>
              Auf dem Blog des Politologen und Landtagsabgeordneten Lasse Pet-
              ersdotter könnt ihr Euch kostenfrei eine Argumentationshilfe als
              PDF (
              <a href="http://lasse-petersdotter.de/rechtspopulismus-beim-weihnachts-essen-eine-argumentationshilfe/">
                http://lasse-petersdotter.de/rechtspopulismus-beim-weihnachts-essen-eine-argumentationshilfe/
              </a>
              )herunter laden, die ganz konkret auf ein Familienessen
              ausgerichtet ist.
            </p>
            <p>
              Besonders Beeindruckt hat mich die Initiative Kleiner Fünf (
              <a href="https://www.kleinerfuenf.de/de">
                https://www.kleinerfuenf.de/de
              </a>
              ) die sich seit den Bundestagswahlen 2017 gegen rechtpopulistische
              Parteien einsetzen. Das Team aus mitt- lerweile mehr als 100
              jungen, engagierten Menschen stellt jedem kos- tenfrei eine Fülle
              an Informationen und Diskutionsleitfäden zur Verfü- gung. Alle
              Materialien findet ihr hier (
              <a href="https://www.kleinerfuenf.-de/de/unsere-materialien-fuer-dich">
                https://www.kleinerfuenf.-de/de/unsere-materialien-fuer-dich
              </a>
              ) – unbedingt reinschauen, aufs Smartphone ziehen und
              verinnerlichen
            </p>
          </GesprachSection>
          <KannSection>
            <h1>Was kann ich tun?</h1>
            <p>
              Gerade auch in privaten Diskussionen andere Schwerpunkte setzen
              als Flücht- lings-Politik. Die Landtagswahlen müssen genau wie die
              Europwahlen Klimawah- len werden! Auch in Dresden und anderen
              ostdeutschen Städten findet wöchent- lich die #FFF
              Klimademonstration statt. Belies Dich zum Pariser Abkommen, zum
              Brand des Amazonas, zu Mikroplastik im Meer. Und dann: Hingehen!
              Laut werden! Und das Thema von den Städten aus auch aufs Land
              bringen! Von Berlin Mitte auch in Dein altes Kinderzimmer.
            </p>
            <p>
              Überprüfe Dich selbst immer wieder - Deinen Humor, Deine Grenzen.
              Welche Aussagen akzeptierst Du? Sensiblere Dich! Solche Videos (
              <a href="https://www.youtube.com/watch?v=ZdPk-vfD-iM">
                https://www.youtube.com/watch?v=ZdPk-vfD-iM
              </a>
              ) und andere Erfahrungsberichte können helfen, immer wieder
              Empathie zu lernen. Bei Alltagsrassismus und rechten Tendenzen
              gilt es: den Opfern zuzuhören und deren Grenzen zu akzeptieren!
              Hilfreich dafür auch: die Beiträge unter dem Hashtag{" "}
              <span>#MeToo</span>! : lesen, zuhören, lernen!
            </p>
            <p>
              Das Thema Alltagsrassiusmus immer auf die Agenda holen. Wir müssen
              rassismus- kritisch denken lernen und uns Umgang damit
              weiterbilden. Seminare (
              <a href="http://www.buendnis-toleranz.de/archiv/themen/gewaltpraeventi-on/170778/seminar-zum-thema-rechtspopulismus-erkennen-und-bekaempfen-jetzt-anmelden">
                http://www.buendnis-toleranz.de/archiv/themen/gewaltpraeventi-on/170778/seminar-zum-thema-rechtspopulismus-erkennen-und-bekaempfen-jetzt-anmelden
              </a>
              ) und Workshops helfen dabei ungemein. Du kannst beispielsweise
              einen entsprechenden Workshop (
              <a href="https://detektor.fm/gesellschaft/rassis-mus-workshops">
                https://detektor.fm/gesellschaft/rassis-mus-workshops
              </a>
              ) in Deiner Firma initiieren.
            </p>
          </KannSection>
        </GridWrapper>
        <InfoSection>
          <div className="info">
            <h1>Infomaterial</h1>
            <p>
              Was bedeutet Diskriminierung und in welchen Formen tritt sie auf?
              <br />(
              <a href="https://www.antidiskriminierungsstelle.de/DE/Home/home_node.html">
                https://www.antidiskriminierungsstelle.de/DE/Home/home_node.html
              </a>
              )
            </p>
            <p>
              Wie kann ich mich engagieren? Welche Projekte und Bewegungen gibt
              es in meiner Umgebung? <br />(
              <a href="http://www.buendnis-toleranz.de">
                http://www.buendnis-toleranz.de
              </a>
              )
            </p>
            <p>
              Auf den Twitterprofil von Strassengezwitscher{" "}
              <span>(@streetcoverage)</span> wird über Aktionen, Konflikte und
              Demonstrationen rund um das Thema Flüchtlinge und Asyl berichtet.
              Das Ziel der Betreiber ist es möglichst nüchtern und objektiv
              direkt von Brennpunkten aus zu twittern.
            </p>
          </div>
          <div className="pen">
            <Pen />
          </div>
        </InfoSection>
        <DankeText>Danke für Dein Engagement!</DankeText>
      </MainWrapper>

      <LinkWrapper>
        <Link to="/seite-3">
          <h1>zurück</h1>
        </Link>
      </LinkWrapper>
    </Layout>
  )
}

export default InformiereDich
