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
  Title,
} from "../styles/BodyTextStyles"

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
  margin-bottom: 5rem;
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
    font-size: 2rem;
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

      <AuthorText>
        <p>Text: Luise Morgeneyer</p>
      </AuthorText>
    </BodyText>
    <Footer>
      <LeftSide>
        <h1>{`infomaterial`.toUpperCase()}</h1>
        <p>
          <a
            href="http://lasse-petersdotter.de/category/strategien-gegen-rechts-extremismus
"
          >
            http://lasse-petersdotter.de/category/strategien-gegen-rechts-extremismus
          </a>
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
        <p>
          **
          <a href="https://www.antidiskriminierungsstele.de/DE/Home/home_node.html">
            https://www.antidiskriminierungsstele.de/DE/Home/home_node.html
          </a>{" "}
        </p>
        <p>
          <a href="http://www.buendnis-toleranz.de/Veranstaltungstipss">
            http://www.buendnis-toleranz.de/Veranstaltungstipss!
          </a>
        </p>
        <p>Wieso ist die AfD im Osten so stark?</p>
      </LeftSide>
      <Middle>
        <h1>Was kann ich tun?</h1>
        <p>
          Gerade auch in privaten Diskussionen andere Schwerpunkte setzen als
          Flüchtlings-Politik. Auch die Landtagswahl muss eine Klimawahl werden!
          Auch in Dresden und anderen ostdeutschen Städten findet wöchentlich
          die FFF Klimademonstration statt. Hingehen! Laut werden! Und das Thema
          von den Städten aus auch aufs Land bringen! 
        </p>
        <p>
          Überprüfe Dich selbst immer wieder - Humor, Grenzen, welche Aussagen
          akzeptierst Du? Sensiblere Dich! Solche Videos{" "}
          <a href="https://www.youtube.com/watch?v=ZdPk-vfD-iM">
            https://www.youtube.com/watch?v=ZdPk-vfD-iM
          </a>{" "}
          und andere Erfahrungsberichte können hilfen. Bei Alltagsrassismus und
          rechten Tendenzen gilt es: den Opfern dessen zuzuhören und deren
          Grenzen zu akzeptieren! Wir alle müssen uns immer wieder. Hilfreich
          dafür: die Beiträge unter dem Hashtag <bold>#MeToo!</bold> : lesen,
          zuhören, lernen!
        </p>
        <p>
          Das Thema Alltagsrassiusmus immer auf die Agenda holen. Wir müssen
          rassismuskritisch denken lernen und uns Umgang damit weiterbilden.
          Seminare{" "}
          <a href="http://www.buendnis-toleranz.de/archiv/themen/gewaltpraevention/170778/seminar-zum-thema-rechtspopulismus-erkennen-und-bekaempfen-jetzt-anmelden">
            http://www.buendnis-toleranz.de/archiv/themen/gewaltpraevention/170778/seminar-zum-thema-rechtspopulismus-erkennen-und-bekaempfen-jetzt-anmelden
          </a>{" "}
          und Workshops helfen dabei ungemein! Du kannst beispielsweise einen
          entsprechenden Workshop{" "}
          <a href="https://detektor.fm/gesellschaft/rassismus-workshops">
            https://detektor.fm/gesellschaft/rassismus-workshops
          </a>{" "}
          in Deiner Firma initiieren.
        </p>
      </Middle>
      <RightSide>
        <div className="top">
          <h1>MEINE VERSUCHE UND WAS MAN DARAUS LERNEN KANN</h1>
        </div>
        <div className="bottom">
          <h1>Gesprächshilfen</h1>
          <p>
            Worauf ich aber schließlich mit meinem Text hinaus will und was ich
            jetzt, eine Woche vor den Landtagswahlen als letzte Möglichkeit für
            uns sehe ist: reden.  Den Onkel anrufen, die Großeltern besuchen,
            den Sitznachbarn aus der 3. Klasse anschreiben.
          </p>
          <p>
            Nicht mehr Kleinbei geben, sondern aktiv ansprechen und Raum und
            Zeit für ein Gespräch, eine Diskussion geben. Das ist nicht einfach
            und das tut weh und das kann im schlechtesten Fall dazu führen, dass
            sich die Fronten verhärten. Also solltest Du Dich auf so ein
            Gespräch entsprechend vorbereiten. Nimm Dir also Zeit –{" "}
          </p>
          <p>
            Auf dem Blog des Politologen und Landtagsabgeordneten Lasse
            Petersdotter könnt ihr Euch kostenfrei eine Argumentationshilfe als
            PDF herunter laden.{" "}
            <a href="http://lasse-petersdotter.de/rechtspopulismus-beim-weihnachtsessen-eine-argumentationshilfe/">
              http://lasse-petersdotter.de/rechtspopulismus-beim-weihnachtsessen-eine-argumentationshilfe/
            </a>
          </p>
          <p>
            Besonders Beeindruckt hat mich die Initiative Kleiner Fünf{" "}
            <a href="https://www.kleinerfuenf.de/de">
              https://www.kleinerfuenf.de/de
            </a>
            , die sich seit den Bundestagswahlen 2017 gegen rechtpopulistische
            Parteien einsetzen. Das Team aus mittlerweile mehr als 100 jungen,
            engagierten Menschen stellt jedem kostenfrei eine Fülle an
            Informationen und Diskutionsleitfäden zur Verfügung. Alle
            Materialien findet ihr hier{" "}
            <a href="https://www.kleinerfuenf.de/de">
              https://www.kleinerfuenf.de/de/unsere-materialien-fuer-dich
            </a>
            .
          </p>
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
