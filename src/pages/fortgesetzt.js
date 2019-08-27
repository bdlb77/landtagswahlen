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
  Title,
} from "../styles/BodyTextStyles"
import { ImageWrapper } from "../styles/ImageWrapper"

const LineBreak = styled.div`
  margin: 2rem auto;
  width: 20%;
  border-bottom: 3px solid ${props => props.theme.black};
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
      <LineBreak />
      <NormalText>
        <span>Sachsen.</span> Zuhause. Das hieß für mich irgendwie immer:
        Schwatzen. Ein Schwätzchen über den Gartenzaun. Ein freundliches
        „Hallo!“ einfach so. Die Verkäuferin beim Bäcker erzählt mir von ihrem
        Sohn und dem letzten Urlaub. Doch seit ein paar Jahren, jetzt da die
        Berichterstattung über mein Heimatbundesland und die Rufe auf dem
        Altmarkt immer lauter wurden, sind alle dazwischen irgendwie verstummt.
        Schweigsam. Zurückhaltend. Man nickt sich jetzt zu. Oder brüllt sich an.
        Ein Dazwischen – scheint mir – das gibt es nicht mehr. Wahlen sind
        allgemein, unmittelbar, gleich, frei und geheim.<br></br> Geheim. Und
        das ist verdammt gut so!<br></br>  Aber wieso ist alles davor eigentlich
        auch so eine Geheimnistuerei geworden? Wann haben wir eigentlich
        aufgehört miteinander zu reden?<br></br>  – Als mein Onkel der AfD
        beigetreten ist. Als ihr Opa genickt hat, als ein Beitrag der Tagesschau
        Höckes Hetze wiedergab. Als ihr Freund sie vor Geflüchteten warnte. Als
        die Schwester eines Bekannten ein Video der AfD Ortsversammlung auf
        Instagram gepostet hat. Als mir ein Freund ans Herz legte, den Hashtag
        #refugeesarewelcomehere doch besser nicht zu verwenden. „Was stimmt mit
        meiner Familie nicht?“, fragt sie mich unter Tränen. Ich darf niemandem
        erzählen, dass ihre Eltern und Geschwister jeden Montag durch Dresden
        spazieren und rufen. Sie versinkt im Erdboden und ich nehme sie in den
        Arm. Aber statt darüber zu sprechen, sind wir permanent damit
        beschäftigt uns irgendwie zu verteidigen. Die Mauern, die unser Zuhause
        sind, irgendwie bunter aussehen zu lassen, als sie sind. Weil die
        Realität wehtut und wir plötzlich nicht mehr wissen, wo wir hingehören.
        <br></br>
         Also: Wir gehen Konfrontationen aus dem Weg. „Pegida läuft noch, ja –
        aber interessiert ja keinen!“<br></br> Und dann tanzen die einen auf der
        Tolerade und die anderen zu … und das fühlt sich dann an wie eine
        Großraumdisko – in der wir uns gegenseitig das Bier weg kaufen,
        übereinander lachen und lachen und lachen. Bis wir schreien. Und uns
        doch immer wieder nur im selben Kreis drehen. <br></br>„Wir reden heute
        einfach mal nicht über Politik“, sagt sie und schaufelt mir noch eine
        Kelle Bohneneintopf auf den Teller. „Ich will heute nicht streiten.“
        <br></br> Keiner will mehr streiten.<br></br>  Es scheint mir, als wolle
        niemand die Verantwortung übernehmen.<br></br>  Ich sehe keinen Diskurs.{" "}
        <br></br> Oder ist der einfach zu leise?<br></br> Höre ich nicht mehr
        aufmerksam genug hin – weil die Stimmen hier so viel lauter und
        schriller sind? Denn ich wohne jetzt in Berlin: und wir diskutieren
        alles. Nehmen kein Blatt vor den Mund – wie war Euer erstes Mal?
        Geschlächtskrankheiten. Verrückte Stellungen. Menstruation und Trump.
        Ehebrüche. Wir lästern über das Leben und analysieren im Anschluss die
        Krim-Kriese. Du empfiehlst mir Podcasts und wir wissen, wann und wie und
        mit wem Ines Anioli Sex hat. Gesundheit und Krankheit. Single und
        Vergeben. Freitag Nacht wie Montag morgen. Wir sind füreinander da. Wir
        hören einander zu. Immer. Jedes dreckige Detail. Und wir sind so
        weltoffen, dass uns nichts mehr schocken kann. Polyamorie ist ´was für
        Anfänger. Und sie erzählt mir und 350 000 anderen von ihren
        Darmproblemen.<br></br> Alles kein Problem. Wir reden darüber. Es gibt
        keine Tabus mehr. Sagen wir. Fordern wir.  Jeder Körper ist schön und
        jedes Körperteil halten wir bereitwillig in die Kamera. Weil wir darüber
        reden müssen.<br></br> Und das müssen wir. Das müssen wir! Und noch
        mehr!
        <p style={{ fontSize: "3rem", fontWeight: "lighter" }}>
          Also: Was wählst Du?
        </p>
        Und die Frage muss nicht im großen Stil beantwortet werden. Vor keinem
        Publikum.  Aber im kleinen.  Und aus dem Herzen. Mit der ausreichenden
        Portion an Informationen.
        <br></br>
        <p style={{ fontSize: "3rem", fontWeight: "lighter" }}>
           Also: Was wählst Du? Und weißt Du, was Deine Eltern wählen?
        </p>
      </NormalText>
    </BodyText>
    <LinkWrapper>
      <Link to="/">
        <h1>zurück</h1>
      </Link>
      <Link to="/seite-3">
        <h1>weiter</h1>
      </Link>
    </LinkWrapper>
  </Layout>
)

export default Fortgesetzt
