import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled, {keyframes} from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Lulu from "../images/a.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LinkWrapper, Title } from "../styles/BodyTextStyles"
import { Circle } from "../styles/Circle"
import LuluAudio from "../media/audio.mp3"

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
  svg {
    height: 75px;
    width: 75px;
    fill: ${props => props.theme.secondary};
  }
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

const useAudio = (audioFile) => {
  const [audio] = useState(new Audio(audioFile));
  const [playing, setPlay] = useState(false);
  
  const togglePlay = () => setPlay(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);
  return [playing, togglePlay];
}
const InformiereDich = () => {
  const [playing, togglePlay] = useAudio(LuluAudio);
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
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1280.000000pt"
                  height="1021.000000pt"
                  viewBox="0 0 1280.000000 1021.000000"
                  preserveAspectRatio="xMidYMid meet"
                  onClick={togglePlay}
                >
                  <metadata>
                    Created by potrace 1.15, written by Peter Selinger 2001-2017
                  </metadata>
                  <g
                    transform="translate(0.000000,1021.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M6539 10204 c-79 -15 -191 -103 -1789 -1419 l-1640 -1350 -1267 -5
  -1268 -5 -80 -27 c-201 -69 -362 -218 -439 -408 -59 -145 -57 -58 -54 -1920 3
  -1606 5 -1708 21 -1765 72 -238 236 -410 477 -497 l65 -23 1273 -5 1272 -5
  1641 -1350 c902 -742 1660 -1362 1685 -1376 99 -58 229 -62 337 -11 81 38 142
  98 180 180 l32 67 5 1190 5 1190 23 44 c70 131 198 507 267 781 133 532 187
  1002 187 1615 0 604 -54 1080 -183 1600 -67 269 -185 619 -273 805 l-26 55 0
  1163 c0 1153 0 1163 -21 1225 -51 150 -175 245 -332 252 -40 2 -84 1 -98 -1z"
                    />
                    <path
                      d="M10780 9386 c-246 -46 -443 -196 -551 -421 -56 -116 -73 -190 -73
                      -325 0 -199 33 -283 223 -568 152 -228 241 -380 360 -622 307 -622 484 -1281
                      532 -1980 16 -243 7 -674 -21 -903 -107 -912 -428 -1747 -953 -2482 -146 -205
                      -190 -323 -191 -515 0 -210 74 -389 221 -537 136 -136 344 -222 533 -222 192
  0 404 89 540 228 80 82 276 364 424 609 547 908 862 1891 958 2992 16 189 16
  822 0 1000 -89 954 -305 1727 -707 2530 -197 394 -496 870 -630 1005 -172 171
  -431 253 -665 211z"
                    />
                    <path
                      d="M8661 8374 c-274 -74 -465 -363 -421 -639 17 -112 44 -168 169 -360
                      141 -216 179 -281 261 -445 478 -955 559 -2045 226 -3050 -122 -370 -306 -739
                      -521 -1045 -145 -205 -176 -283 -176 -440 0 -168 49 -284 171 -405 121 -121
  237 -171 405 -171 201 -1 353 80 484 255 477 638 818 1466 945 2291 67 437 73
  962 16 1410 -102 799 -388 1560 -845 2250 -179 270 -330 366 -573 364 -48 0
  -111 -7 -141 -15z"
                    />
                  </g>
                </svg>
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
