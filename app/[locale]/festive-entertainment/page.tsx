import Hero from "@/components/Hero";
import Link from "next/link";

const festive = () => {
  return (
    <div className="page-layout text-center font-bold">
      <h1>Les animations festives</h1>
      <p className="mb-14">
        De nombreuses animations festives donnent vie au patrimoine industriel
        de Wesserling tout au long de l’année (lien vers le site internet du
        Parc). La buvette et la petite restauration sont assurées par le
        chantier d’insertion de l’association Les Jardins de Wesserling : tartes
        flambées, bretzels nature ou gratiné, crêpes sucrées (et glaces selon la
        saison), boissons dont sirops du potager. L’association Les Jardins de
        Wesserling organise trois animations : le Troc’Jardin, la Fête de la
        Musique et les Soirées cocktails. Elle assure également la petite
        restauration lors des fêtes organisées dans le Parc de Wesserling,
        telles que Pâques en Folie, la Fête du Patrimoine et la Fête du Sentier
        Pieds-nus, les Féeries Nocturnes, la Fête d’Automne et Le Noël Au
        jardin.
      </p>
      <Hero
        imageSrc="/restau-du-potager-steeve-josch.webp"
        imageAlt="Pâques en Folie aux Jardins de Wesserling"
        title="Pâques en Folie"
        subtitle="Dans la semaine autour de Pâques. De 12h à 17h. Dans la cour de la Ferme de Wesserling. Entrée payante."
        firstParagraph={"Chasse aux œufs. Ateliers ludiques ou créatifs."}
        secondParagraph={
          "Buvette, tartes flambées, bretzels natures ou gratinés, crêpes, goûter du lièvre de Pâques."
        }
        thirdParagraph={
          "Des milliers d’œufs en bois sont dissimulés dans le Parc Rural. Les participants recherchent ces trésors en résolvant des énigmes et en suivant des indices. Les œufs de bois sont ensuite échangés contre de vrais œufs en chocolat."
        }
        textPosition="right"
      />
      <Hero
        imageSrc="/restau-du-potager-steeve-josch.webp"
        imageAlt="Troc’Jardin aux Jardins de Wesserling"
        title="Troc’Jardin"
        subtitle="Le dernier dimanche d’avril de 10h à 18h. Dans la cour de la Ferme de Wesserling. Entrée gratuite."
        firstParagraph={
          "Espace Troc. Ateliers ludiques. Stands de conseils. Stand de vente de légumes."
        }
        secondParagraph={
          "Buvette, tartes flambées, bretzels natures ou gratinés, crêpes."
        }
        thirdParagraph={
          "C’est un moment privilégié pour les jardiniers amateurs, pour échanger des plants, des outils ou des conseils. Les Troqueurs peuvent déposer leurs objets dès 10h le matin. Ils sont « payés » en monnaie du jour : la monnaie de radis, avec lesquels ils peuvent acquérir les plantes et objets de leur choix.  La monnaie de radis peut également s’acquérir en participant à des jeux, en achetant une Tarte Flambée ou la carte de membre de l’association."
        }
        textPosition="left"
      />
      <Hero
        imageSrc="/restau-du-potager-steeve-josch.webp"
        imageAlt="Festival des Jardins Métissés aux Jardins de Wesserling"
        title="Festival des Jardins Métissés"
        subtitle="De juin à octobre. De 10h à 18h30."
        firstParagraph={
          "Buvette, tartes, crudités, assiettes de charcuteries ou de fromage, bretzels natures ou gratinés, crêpes, glaces."
        }
        secondParagraph={
          "L’écomusée du Parc de Wesserling est ouvert dès le mois de mai. Mais le Festival des Jardins Métissés, débute à partir de juin. Ses jardins éphémères, chaque année selon une thématique nouvelle, emportent les visiteurs vers des univers poétiques, artistiques, ludiques dépaysants... De quoi passer de belles journées en famille ! "
        }
        textPosition="right"
      />
      <Hero
        imageSrc="/restau-du-potager-steeve-josch.webp"
        imageAlt="Fête de la Musique aux Jardins de Wesserling"
        title="Fête de la Musique"
        subtitle="Le vendredi le plus proche du 21 juin. De 18h à 23h. Dans la cour de la Ferme de Wesserling. Entrée gratuite."
        firstParagraph={
          "Musique tout au long de la soirée. Visite gratuite des jardins et du Festival des Jardins Métissés."
        }
        secondParagraph={
          "Buvette, tartes flambées, bretzels natures ou gratinés, crêpes, glaces."
        }
        thirdParagraph={
          "Les mélomanes peuvent découvrir des musiques de styles variés, attablés sous les auvents de la ferme ou assis sur les pentes du Parc Rural. La fête de la musique à Wesserling se déroule dans le cadre remarquable du patrimoine industriel de Wesserling."
        }
        textPosition="left"
      />
      <Hero
        imageSrc="/restau-du-potager-steeve-josch.webp"
        imageAlt="Soirées cocktail aux Jardins de Wesserling"
        title="Soirée cocktail"
        subtitle="3 vendredis de juillet. De 18h à 22h. Dans les potagers de Wesserling. Entrée payante par les jardins. Un cocktail offert avec le ticket d’entrée. "
        firstParagraph={
          "Cocktails avec ou sans alcool, buvette, tartes flambées, bretzels natures ou gratinés, crêpes, glaces. "
        }
        secondParagraph={"Ambiance musicale. Stand de créateurs."}
        thirdParagraph={
          "C’est le moment de la détente, de la convivialité, dans un jardin qui apparaît différent sous le soleil couchant. Un moment pour apprécier l’art au jardin, sous toutes ses formes, musicales, graphiques, sculpturales, chorégraphique, ..."
        }
        textPosition="right"
      />
      <Hero
        imageSrc="/restau-du-potager-steeve-josch.webp"
        imageAlt="Féeries Nocturnes aux Jardins de Wesserling"
        title="Féeries Nocturnes"
        subtitle={
          <>
            "Les jeudis, vendredis, samedis et dimanches du mois d’août et la
            semaine du 15 août. De 18h30 à 23h30. Entrée payante par les
            jardins. Lien vers le site internet du Parc"
            <br />
            <Link
              href="https://www.parc-wesserling.fr"
              target="blank"
              rel="noopener noreferrer"
              className="link"
            >
              Plus d’info sur le site du Parc de Wesserling
            </Link>
          </>
        }
        firstParagraph={"Grand jeu. Balades contées. Spectacle de feu."}
        secondParagraph={
          "Buvette, tartes flambées, bretzels natures ou gratinés, crêpes, glaces."
        }
        thirdParagraph={
          "Dès la nuit tombée, les jardins s’illuminent, tout devient magie. Les Féeries Nocturnes sont un moment inoubliable, en famille ou entre amis."
        }
        textPosition="left"
      />
      <Hero
        imageSrc="/restau-du-potager-steeve-josch.webp"
        imageAlt="Fête d'Automne aux Jardins de Wesserling"
        title="Fête d’Automne"
        subtitle="Le dimanche à la mi-octobre. De 10h à 18h30. Entrée payante par le Château des Manufacturiers."
        firstParagraph={
          "Conseils de jardinage. Presse de jus de pomme. Ateliers créatifs. Stand de vente de légumes."
        }
        secondParagraph={
          "Buvette, tartes flambées, bar à soupes, bretzels natures ou gratinés, crêpes, glaces."
        }
        thirdParagraph={
          "Jardins aux coloris flamboyants de l’automne, abondance de production légumière, ... C’est le dernier 2vénement avant la fin du Festival des Jardins Métissés. Le jardinier prodigue ses conseils. Les visiteurs peuvent assister à la presse de jus de pomme et déguster ce produit de saison. Un bar à soupe bien achalandé met à l’honneur les légumes fraichement récoltés. Tout est mis en œuvre pour le plaisir des yeux et des papilles."
        }
        textPosition="right"
      />
      <Hero
        imageSrc="/restau-du-potager-steeve-josch.webp"
        imageAlt="Le Noël au jardin aux Jardins de Wesserling"
        title="Le Noël au jardin"
        subtitle={
          <>
            "Les jeudis, vendredis, samedis et dimanches du mois de décembre et
            la semaine entre Noël et Nouvel An. De 17h à 23h. Entrée payante par
            le Château des Manufacturiers. Vin chaud ou jus de pomme chaud
            offert avec le ticket d’entrée."
            <br />
            <Link
              href="https://www.parc-wesserling.fr"
              target="blank"
              rel="noopener noreferrer"
              className="link"
            >
              Plus d’info sur le site du Parc de Wesserling
            </Link>
          </>
        }
        firstParagraph={"Balade théâtralisée dans les jardins illuminés."}
        secondParagraph={
          "Buvette, vin chaud, jus de pomme chaud, chocolat chaud, tartines chaudes, soupes, desserts."
        }
        thirdParagraph={
          "Pendant environ une heure, les participants embarquent dans une balade contée qui les mène à la découverte de l’univers de Noël, de ses valeurs, de sa magie. Tout cela au travers des jardins illuminés. La balade se termine à la Ferme de Wesserling, aux décors de Noël chaleureux, autour d’une boisson chaude ou d’un repas convivial."
        }
        // button={{ href: "https://www.parc-wesserling.fr", external: true, label: "Plus d’info sur le site du Parc de Wesserling"}}
        textPosition="left"
      />
    </div>
  );
};
export default festive;
