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
  LinkWrapper,
  Title,
} from "../styles/BodyTextStyles"
import { Circle } from "../styles/Circle"
const HandPic = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Hand_Weiss.png" }) {
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

const AuthorText = styled.div`
  margin-top: 25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-weight: lighter;

  p {
    color: ${props => props.theme.primary};
  }
`

const FingerAndCircle = styled.div`
  margin: 10rem auto;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  .circle {
    position: relative;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    background-color: ${props => props.theme.primary};
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
  }
  .pic {
    position: absolute;
    width: 500px;
    bottom: -120px;
    right: 80px;
    transform: rotate(-10deg);
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    justify-content: center;

    .pic {
      width: 200px;
      bottom: -66px;
      right: 138px;
    }
  }
`

const Seite3 = () => (
  <Layout>
    <SEO title="Seite-3" />
    <Title>
      <p>Am 1. September sind Landtagswahlen in Sachsen und Brandenburg.</p>
    </Title>
    <BodyText>
      <NormalText>
        „Weißt Du, was Deine Eltern wählen?“
        <br />
        „Weißt Du, was Deine beste Freundin aus der Schulzeit, die Du seit dem
        Abi nicht gesehen hast, wählt?“
        <br />
        „Weißt Du, für welche Partei sich Dein Cousin entscheidet, mit dem Du
        früher immer im Sandkasten gespielt und dich mit Erde beschmiert hast?“
        <br />
        Und die Antwort ist:  „Mit denen kann man ja sowieso nicht
        diskutieren“ „Ganz ehrlich? Mit solchen Menschen will ich mich nicht
        abgeben.“ „Alles Nazis! – Nazis raus!“
        <br /> „Wir haben da so eine Regel, dass wir auf Familienfeiern nicht
        mehr über Politik diskutieren. Ist meiner Mama total wichtig.“ <br />
        „Ich weiß es nicht.“
        <br />
        „Geht mich das was an?“
        <br />
         „Ist nicht meine Verantwortung!“
        <br />
         Verantwortlichkeit ist eine Frage der Identität. Doch ist es nicht so,
        dass wir immer nur und wirklich maximal die Verantwortung für uns selbst
        tragen wollen. Und das allein überfordert ja manchmal schon. <br />
         Aber: Verpflichtet Familie? Herkunft? Geschichte? Heimat? Identität?{" "}
        <br />
        Also: Sind wir für sie verantwortlich? <br />
         Mit Pflichten haben wir es in unserer modernen Gesellschaft ja ohnehin
        nicht so, scheint mir. Wir müssen dazu gezwungen werden, wenn wir tot
        sind anderen Menschen das Leben zu retten. Wollen partout nicht auf
        unsere Plastiktüten verzichten, obwohl wir uns damit selbst die Kehle
        zuschnüren.  Also sage ich: Familie, Herkunft, Geschichte, Heimat,
        Identität ist keine Pflicht, dafür aber ein Privileg, eine Möglichkeit,
        ein Ansatzpunkt, ein Sprachrohr.  Eine gemeinsame Ebene. Aus dieser
        gefühlten Machtlosigkeit und Untätigkeit herauszubrechen, Dir Gehör zu
        verschaffen. <br />
        Influencer, Menschen mit Reichweite, Stars – wir verpflichten sie im
        Geiste dazu, Gutes zu tun, ihre Stimme zu nutzen! „Mach doch mal etwas
        Sinnvolles mit Deiner Reichweite!“, denkst Du Dir, als sie den 3748.
        Lippenstift in die Kamera hält, während Du es dir das 3748. mal ansiehst
        und seit 4 Monaten nicht mit Deinem Vater geredet hast, seit er diese
        ausländerfeindliche, rassisstische Kackscheiße geschickt in einen
        Nebensatz eingebaut hatte. „Mach doch mal etwas Sinnvolles mit Deiner
        Reichweite!“, sage ich. Nutze Deine Stimme! Ruf ihn an. Er wird Dir
        zuhören. Weil er das schon immer tut. Weil Du die richtige Frequenz
        hast, Reichweite, Nähe, – verschaff Dir und Deiner Überzeugung Gehör.
        Schaff Nähe! Schafft wieder Nähe! Das brauchen wir.  Denn Du bist
        vielleicht der einzige, dem er zuhört. Wirklich zuhört. Und er wird
        antworten. <br />
        Das kann weh tun. Es kann verdammt unangenehm sein. Anstrengend.
        Nervenaufreibend. Herausfordernd. <br />
        Wichtig!  Zuhörern und Mund aufmachen. Aufeinander zugehen und Kontra
        geben.  Es ist nicht einfach, den richtigen Ton zu finden oder die
        richtigen Fragen zu stellen, wenn Eure Antworten so unterschiedlich sind
        – Was ist Wahrheit? Was ist Deine Wahrheit? Für wen setzt Du Dein
        Kreuz? Wieso?  Wieso nicht?  Aus einer gemeinsamen Wellenlänge kann
        ziemlich schnell ein Unwetter werden. Die Vorstellung, die man von
        seinem Gegenüber hat, kann ins Wanken geraten. Enttäuschung macht sich
        so schnell breit, wird zu Wut wird zu Scham. Unverständnis überschattet
        und treibt auseinander.  Aber dieses unsichtbare Band darf nicht reißen.
         Wir dürfen den Kontakt nicht verlieren. Zueinander. Zum Boden. Zur
        Menschlichkeit.  Hauptsache wir hören nicht auf einander zuzuhören, zu
        hinterfragen, kritisch und sanft zugleich. <br />
           „Mein Onkel hat kein Instagram, der hat Angst“ Ich hatte überlegt
        Euch dazu aufzurufen, Bilder mit weit geöffneten Mündern zu Posten,
        #ichmachdenMundauf zu verbreiten und online Wellen zu schlagen, aber:
        „Mein Opa hat kein Instagram, der hat Angst!“  Hashtags und Co. – würde
        doch bedeuten, dass wir uns einmal mehr gegenseitig auf die Schulter
        klopfen. Angezeigt werden die Bilder dem, der sie sehen will. Es ist
        gut, einander Mut zu machen, sich zu solidarisieren und anzuerkennen,
        dass es „im Osten nicht nur Nazis“ gibt. Aber jetzt, so kurz vor der
        Wahl, geht es darum: aktiv zu werden. Die eigene Blase zu verlassen und
        mit den Menschen zu sprechen, die anders denken. Fakten, Emotionen,
        Erfahrungen, Wissen, Enttäuschungen, Ängste und Träume auszutauschen.
        Mit anderen Generationen, anderen Gruppen, anderen Menschen!  Sich den
        Protest anzuhören.  Die Sorgen anzuerkennen. <br /> Die Last abzunehmen.{" "}
        <br />
        Und wirkliche Alternativen aufzuzeigen. <br />{" "}
        <p>Einfacher als gesagt?</p>
        Definitiv! <br />
         Wie das konkret funktionieren kann? Ich habe Euch einiges an
        Infomaterial herausgesucht:
      </NormalText>
      <FingerAndCircle>
        <Link to="/informiere-dich/#infomaterial" style={{ cursor: "pointer" }}>
          <Circle color={props => props.theme.primary}>
            <h1>Informiere Dich hier!</h1>
            <div className="pic">
              <HandPic />
            </div>
          </Circle>
        </Link>
      </FingerAndCircle>

      <AuthorText>
        <p>Text: Luise Morgeneyer</p>
        <p style={{ marginTop: "0px" }}>Illustration: Tatjana Junker</p>
      </AuthorText>
    </BodyText>
    <LinkWrapper>
      <Link to="/fortgesetzt">
        <h1>zurück</h1>
      </Link>
      <Link to="/informiere-dich">
        <h1>weiter</h1>
      </Link>
    </LinkWrapper>
  </Layout>
)

export default Seite3

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
