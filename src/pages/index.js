import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
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
const StartImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Illustration1.png" }) {
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

const IndexPage = () => (
  <Layout>
    <SEO title="Startseit" />
    <ImageWrapper>
      <StartImage />
    </ImageWrapper>
    <Title>
      <p>
        Am 1. September sind Landtagswahlen in Sachsen, Brandenburg und
        Thüringen.
      </p>
    </Title>
    <BodyText>
      <NormalText>
        Wir sitzen in der U-Bahn Richtung Neuköln und sind gut drauf. Ein Bier
        in der Hand und ein Lachen auf dem Gesicht. Es ist 23:30 Uhr und wir
        sind auf dem Weg in eine Bar.  Ein paar unbekannte Gesichter in der
        Runde, wir stellen uns vor und erzählen, was wir so machen und tun und
        wer wir gern sein würden. Und dann kommt die Frage auf, wo wir
        herkommen. Weil man das eben fragt in Berlin. Einer kommt aus Bayern,
        ist aber in Peru aufgewachsen und hat letztes Jahr in Madrid gelebt. Das
        klingt spannend. Ich würde gern mehr darüber erfahren. Aber: „Ich komme
        aus einem kleinen Ort bei Dresden.“ und das scheint viel spannender zu
        sein. Wie immer der gleiche Gesichtsausdruck: die Augen werden
        übertrieben groß aufgerissen, ein peinlich berührtes Lächeln auf den
        Lippen und dieser wissende Blick: „Ist ja schon krass, was da bei Euch
        abgeht, oder?“ Ich lebe seit zwei Jahren nicht mehr in Sachsen, trotzdem
        fühlt sich dieses euch nach uns an. Das sind meine Wurzeln, mein
        Zuhause. Viel zu oft und zu lange habe ich mit kalten Füßen auf den
        Straßen der Stadt gestanden und Farbe bekannt, als das ich jetzt etwas
        gegen dieses euch einwenden würde. Aber wir ist nicht immer gleich alle
        und wer ist und wieso eigentlich ihr? Wir sprechen lange, ich erzähle
        viel, erinnere mich. Wir sitzen da also in dieser Bar. Das drittes Bier
        in der Hand und wir reden darüber, wie schlimm es doch ist und wie sehr
        wir dagegen sind. Irgendwann sagt er:
      </NormalText>
      <QuoteText>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;„Ganz ehrlich,
        voll gut, dass Du das alles machst und Dich engagierst und so – aber ich
        will mit diesen Menschen gar nicht reden! Die sollen bleiben wo der
        Pfeffer wächst – wer so denkt, den kann man ohnehin nicht umstimmen und
        weißt Du was, ich rede nicht mit Nazis, basta! Ich war noch nie im Osten
        und hab da auch gar keinen Bock drauf – sorry!“
      </QuoteText>
      <NormalText>
        Sorry. Ich schlucke. Ich horche nach. Ich denke an all die wundervollen
        Menschen Zuhause. An die Krönertstraße 22, in Freital. Ich denke an den
        ersten Montag, an dem Deutschlandflaggen durch die Straßen zogen und
        Parolen lauter wurden als das Leuten der Frauenkirche. Gänsehaut und
        Einzug in den Kampf, den wir nur gemeinsam gewinnen können. Jeden
        Montag. Laut. Und Intensiv. Scham. Angst. Angst. Angst. Aber wovor
        eigentlich? Unsicherheit und das ständige Bedürfnis nach Harmonie,
        stehend zwischen Lautsprechern und Megaphonen und so vielen leisen
        Herzen. Und ich konnte nichts tun als zuzusehen, wie Menschen braune
        Farbe auf den Canaletto Blick schmierten. Ich stellte mich immer wieder
        schützend vor die Frauenkirche, vor Busse, vor Menschlichkeit und
        plötzlich war alles braun und kalt und Hass. So wurde Dresden diesen
        Anstrich gegeben und seit Jahren waschen wir den ab und ab und ab. Doch
        ihr hört nicht auf die Farbbeutel zu werfen. Von allen Seiten auf einmal
        – Ich denke an den Kommentar des Polizeibeamten, der mir empfahl meine
        politische Meinung online doch einfach nicht mehr kund zu tun und wie
        ich daraufhin erst recht meine Stimme erhob.  Und ich denke an jedes
        Gespräch, jede Reise, jede neue Chance und frage mich: Was wäre ich ohne
        all das geworden? Und ich frage ihn:
      </NormalText>
      <QuoteText>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;„Du schreibst also
        kategorisch die Bevölkerung eines ganzen Bundeslandes ab? Du schreibst
        Kinder ab, die gerade jetzt noch gar nicht politisch denken können und
        wollen und müssen und Du stellst sie in eine Ecke, bevor sie sich
        überhaupt selbst einordnen können? Wir müssen differenzieren, wir müssen
        zuhören, wir müssen offen bleiben und die Lasten auf unseren Schultern
        ausgleichen, unbegründete Wut lindern und vor allem acht geben, was
        gelehrt wird – wie sonst sollen wir etwas ändern?  Wie sonst willst Du
        etwas ändern?  Gerade dann, wenn Du alle verhöhnst, die das täglich
        versuchen?“
      </QuoteText>
    </BodyText>
    <LinkWrapper>
      <Link to="/fortgesetzt">
        <h1>weiter</h1>
      </Link>
    </LinkWrapper>
  </Layout>
)

export default IndexPage
