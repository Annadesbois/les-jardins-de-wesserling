import Link from "next/link";
import Hero from "@/components/Hero";

function MissionPage() {
  return (
    <div className="page-layout text-justify">
      <h1>Mission Sociale</h1>
      <Hero
        imageSrc="/restau-du-potager-steeve-josch.webp"
        imageAlt="Le chantier d'insertion des Jardins de Wesserling"
        title="Le chantier d'insertion"
        firstParagraph={
          <>
            L’association Les Jardins de Wesserling est conventionnée
            <Link
              href="https://travail-emploi.gouv.fr/les-ateliers-et-chantiers-dinsertion-aci"
              target="blank"
              rel="noopener noreferrer"
              className="link"
            >
              Ateliers et Chantiers d’Insertion
            </Link>
            avec l’Etat depuis 2004. Ce dispositif permet à l’association de
            percevoir une compensation financière pour l’embauche et
            l’accompagnement de personnes rencontrant des difficultés d’accès à
            l’emploi : jeunes sans formation, personnes de plus de 50 ans au
            chômage, personnes handicapées ou confrontées à divers problèmes
            passagers, ...
          </>
        }
        secondParagraph={
          <>
            Ainsi, l’association rejoint la grande famille des Structures d’
            <Link
              href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2284"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Insertion par l’Activité Economique
            </Link>
            . Elle fait partie de l’
            <Link
              href="https://www.economie.gouv.fr/ess"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Economie Sociale et Solidaire
            </Link>
            , qui représente 12 millions d’emplois, portés par 11 millions de
            bénévoles dont 5 millions de bénévoles réguliers.
          </>
        }
      />

      <Hero
        imageSrc="/restau-du-potager-steeve-josch.webp"
        imageAlt="Les salariés du chantier d’insertion"
        title="Les salariés du chantier d’insertion"
        textPosition="left"
        firstParagraph="Actuellement, le chantier d’insertion des Jardins de Wesserling offre 20
        postes pour des salariés en insertion professionnelle. 6 salariés
        permanents les accompagnent au quotidien : 3 encadrants techniques, une
        accompagnatrice socioprofessionnelle, une responsable administrative,
        une directrice, 2 saisonniers/saisonnières."
        secondParagraph="La base de travail du chantier d’insertion est le jardinage dans le
        potager pédagogique et dans le champ maraîcher, la confection
        d’aménagements, le service au Resto du Potager, la transformation des
        productions en confitures, sirops, pâtes de coing, pickles, la vente, la
        participation aux animations. Un matériel professionnel est mis à leur
        disposition, afin de les exercer à différents métiers."
        thirdParagraph="Au fil de multiples entretiens individuels et de réflexions en groupes,
        les salariés en insertion professionnelle sont accompagnés pour mûrir
        leur projet, suivre des formations qualifiantes, réaliser des stages en
        entreprise (Période de Mise en Situation en Milieu Professionnel durant
        laquelle le stagiaire reste employé dans le chantier d’insertion), lever
        les freins à l’emploi, répondre aux offres d’emploi."
      />
      <h3 className="bg-accent text-primary font-bold text-xl p-3 rounded-4xl text-center mt-8 mb-4">
        Pour candidater à un poste en insertion professionnelle
      </h3>
      <p className="font-bold">
        Pour candidater à un poste en insertion professionnelle dans un chantier
        d’insertion, l’inscription préalable à France Travail et son agrément
        sont nécessaires. Ces postes sont notamment réservés aux :{" "}
      </p>
      <ul>
        <li>Chômeurs de longue durée (plus d’un an)</li>
        <li>Jeunes de moins de 26 ans et personnes de plus de 50 ans</li>
        <li>Parents isolés</li>
        <li>
          Bénéficiaires du RSA ou en fin de droit à l’indemnité de chômage
        </li>
        <li>Personnes handicapées</li>
        <li>Personnes récemment arrivées en France</li>
      </ul>
      <p className="font-bold text-center">
        Les candidats déposent leur lettre de motivation et curriculum vitae à
        l’association Les Jardins de Wesserling, puis passent un entretien
        préalable à l’embauche, comme dans toute entreprise.
      </p>
      <p className="font-bold text-center">
        Les demandeurs d’emplois peuvent être invités par France Travail à des
        rencontres avec l’ensemble des prestataires de l’Insertion par
        l’Activité Economique, et faire ainsi connaissance avec de futurs
        employeurs.
      </p>
    </div>
  );
}
export default MissionPage