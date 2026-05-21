import LinkButton from "@/components/LinkButton";
import Image from "next/image";
import Link from "next/link";

type TimelineItem = {
  years: string;
  title: string;
  actions: string[];
  employees: string;
  volunteers: string;
};

const timelineItems: TimelineItem[] = [
  {
    years: "2000",
    title: "Création de l’association",
    actions: [
      "Création de l’association par une trentaine d’habitants.",
      "Reconversion touristique du Parc industriel de Wesserling.",
      "Création d’un potager décoratif et pédagogique ouvert au public.",
      "Premier événement festif : le Potager en Fête.",
    ],
    employees:
      "Embauche de 3 emplois en insertion professionnelle selon le dispositif CES.",
    volunteers:
      "Les bénévoles assurent la gestion, l’accompagnement vers l’emploi, le défrichement, les plantations, la récolte, la vente et les animations.",
  },
  {
    years: "2002–2003",
    title: "Mise en place de l’encadrement technique",
    actions: [
      "Encadrement technique grâce au dispositif Emplois Jeunes.",
      "Aide financière de l’État pendant 5 ans, à condition de pérenniser les postes.",
    ],
    employees:
      "Embauche de 2 encadrants techniques et 6 postes en insertion professionnelle.",
    volunteers:
      "Les bénévoles se recentrent sur la gestion, la vente, l’accompagnement vers l’emploi et l’animation.",
  },
  {
    years: "2004–2009",
    title: "Conventionnement Atelier et Chantier d’Insertion",
    actions: [
      "Conventionnement avec l’État à partir de 2004.",
      "Développement d’une activité hivernale : confitures, sirops et pâtes de coing.",
      "Participation à Noël au Jardin.",
    ],
    employees:
      "Pérennisation des encadrants techniques. 10 postes en insertion professionnelle, puis CDDI à partir de 2008.",
    volunteers:
      "Les salariés assurent l’entretien, la production et la transformation. Les bénévoles développent les aménagements pédagogiques, les animations et la gestion.",
  },
  {
    years: "2009–2010",
    title: "Professionnalisation de la gestion",
    actions: [
      "Professionnalisation des tâches administratives et d’accompagnement socioprofessionnel.",
      "Création de postes mutualisés avec le chantier d’insertion Patrimoine et Emploi.",
      "Accompagnement par un conseiller en gestion d’entreprise dans le cadre d’un DLA.",
    ],
    employees:
      "Création de 2 postes : une administrative et une personne chargée de l’accompagnement socioprofessionnel.",
    volunteers:
      "Un membre de l’association assure bénévolement la direction du personnel. Les bénévoles restent impliqués dans la conception, l’aménagement et la gestion.",
  },
  {
    years: "2011–2020",
    title: "Développement des activités",
    actions: [
      "Accompagnement socioprofessionnel renforcé.",
      "Attractivité croissante du potager pédagogique.",
      "Nombreuses animations et produits transformés.",
      "Création de la petite restauration en 2014/2017 avec l’appui d’un DLA.",
    ],
    employees:
      "Fin 2018, création d’un poste de direction mutualisé avec le chantier d’insertion PE.",
    volunteers:
      "L’implication bénévole reste forte, notamment dans les animations, qui passent de 1 à 8 au cours de l’année.",
  },
  {
    years: "2021–2026",
    title: "Structuration et développement de l’équipe",
    actions: [
      "Démutualisation des postes de direction, de gestion et d’accompagnement socioprofessionnel.",
      "Passage des postes à plein temps.",
      "Création d’un secteur maraîcher.",
    ],
    employees:
      "L’association compte une trentaine de salariés : 22 postes en insertion, une direction, une administrative, une ASP et 3 encadrants techniques.",
    volunteers:
      "L’implication bénévole représente environ 6500 heures de travail chaque année.",
  },
];

const AssociationPage = () => {
  return (
    <div className="page-layout">
      <h1>Notre association</h1>
      <section className="flex flex-col gap-6 mb-12">
        <p className="text-justify">
          Le potager pédagogique et le Resto du Potager sont gérés par
          l’association Les Jardins de Wesserling, reconnue d’utilité publique.
          L’association compte 240 membres en 2025, à titre individuel ou
          familial, ce qui représente environ 800 personnes en comptant les
          membres de la famille.
        </p>
        <p className="pt-5 font-bold text-justify">
          Leur motivation correspond aux objectifs de l’association :
        </p>
        <ul>
          <li>
            Créer de l’emploi notamment pour des personnes rencontrant des
            difficultés dans ce domaine
            <LinkButton href={`/$locale/about/mission`} className="mb-8 mt-6">
              Plus d'info sur notre mission sociale
            </LinkButton>
          </li>
          <li>
            Contribuer à mettre en valeur le remarquable patrimoine industriel
            de Wesserling
          </li>
          <li>Sensibiliser au respect de l’environnement</li>
        </ul>
        <Image
          src="/restau-du-potager-steeve-josch.webp"
          alt="Photo de l'association"
          width={1200}
          height={800}
          className="mt-8 w-full rounded-xl object-cover mb-12"
        />
        <p className="text-justify">
          L’association est conventionnée Chantier d’Insertion avec l’Etat
          depuis 2004, bénéficiant ainsi de financements intercommunaux,
          départementaux, nationaux et européens pour amplifier son action
          auprès des personnes à la recherche d’emplois. Aujourd’hui, le
          chantier d’insertion des Jardins de Wesserling compte une trentaine de
          salariés.
        </p>
        <Image
          src="/restau-du-potager-steeve-josch.webp"
          alt="Photo de l'association"
          width={1200}
          height={800}
          className="mt-8 w-full rounded-xl object-cover mb-12"
        />
        <p className="font-bold text-justify">
          Les bénévoles s’impliquent dans différents domaines, selon leurs goûts
          et leurs compétences :
        </p>
        <ul>
          <li>
            Les aménagements pédagogiques, la conception et les décors du
            potager
          </li>
          <li>
            Les animations, en participant notamment à la buvette et à la petite
            restauration lorsque la fréquentation est trop importante pour être
            assumée uniquement par les salariés
          </li>
          <li>
            La gestion du chantier d’insertion, en tant qu’employeur, des
            actions de communication, ...
          </li>
        </ul>
        <p className="font-bold text-center">
          Les activités de l’association sont l’occasion de rencontres
          constructives et conviviales, ouvertes à toutes les bonnes volontés.
        </p>
        <LinkButton href={`/$locale/about/support-us`}className="mt-8">
          Nous soutenir ou devenir bénévole
        </LinkButton>
      </section>
      <Image
        src="/leaf-divider.png"
        alt="Feuille de division"
        width={500}
        height={50}
        className="mx-auto mb-20 mt-6"
      />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="pb-8 md:pb-6 text-center text-3xl font-bold text-title">
          Historique de l’association
        </h2>
        <article className="space-y-6 mb-24 text-justify">
          <p>
            L’association Les Jardins de Wesserling a été créée en 2000 par une
            trentaine d’habitants afin de relever un défi ambitieux : créer de
            l’emploi à partir de la reconversion de la friche industrielle du
            Parc de Wesserling.
          </p>
          <p>
            Elle a rejoint la fédération d’associations chargée, d’abord par le
            Département du Haut-Rhin puis par la Collectivité Européenne
            d’Alsace, d’assurer la reconversion touristique de cet ancien haut
            lieu de l’industrie textile du Massif Vosgien.
          </p>
          <p>
            Les jardins ont été imaginés par les paysagistes Agnès Daval et
            Philippe Raguin dans le respect de l’histoire du site. Leur
            implantation a été réalisée grâce au travail d’un géomètre bénévole,
            puis développée au fil des années par l’implication constante des
            bénévoles de l’association.
          </p>
          <p>
            Les premières années reposaient essentiellement sur l’engagement
            collectif : défrichage, plantations, culture maraîchère, gestion du
            site, vente des productions, accompagnement vers l’emploi et
            organisation des animations. Plus de cent bénévoles participaient
            notamment à la fête annuelle du potager.
          </p>
          <p>
            L’association a toujours poursuivi le même objectif :
            professionnaliser progressivement les activités dès que les moyens
            financiers le permettaient, afin de pérenniser les emplois et les
            missions du projet associatif.
          </p>
        </article>
        <div className="relative">
          {/* Vertical arrow */}
          <div className="absolute left-4 top-8 hidden h-full md:block">
            <div className="h-[calc(100%-1.5rem)] w-1 rounded-full bg-primary" />

            <div className="absolute bottom-4 left-1/2 h-0 w-0 -translate-x-1/2 border-l-10 border-r-10 border-t-16 border-l-transparent border-r-transparent border-t-primary" />
          </div>

          <ol className="mx-auto w-full max-w-xl space-y-10 md:max-w-none md:pl-20">
            {timelineItems.map((item) => (
              <li
                key={item.years}
                className="relative grid gap-4 md:grid-cols-[8rem_1fr] md:items-start"
              >
                {/* Round marker */}
                <div className="absolute -left-18 top-8 hidden h-5 w-5 rounded-full bg-primary md:block" />

                {/* Date */}
                <div className="md:sticky md:top-24 md:pt-6">
                  <span className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-bold text-secondary shadow-sm">
                    {item.years}
                  </span>
                </div>

                {/* Card */}
                <article className="rounded-2xl bg-surface-1 p-6 text-left shadow-md ring-1 ring-primary/10">
                  <h3 className="mb-6 text-xl font-bold">{item.title}</h3>

                  <div className="grid gap-8 lg:grid-cols-3">
                    <div>
                      <h4 className="mb-3 text-lg font-bold text-title">
                        Actions
                      </h4>

                      <ul className="list-disc space-y-2 pl-5">
                        {item.actions.map((action) => (
                          <li key={action}>{action}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-lg font-bold text-title">
                        Nombre et fonctions des salariés
                      </h4>

                      <p>{item.employees}</p>
                    </div>

                    <div>
                      <h4 className="mb-3 text-lg font-bold text-title">
                        Fonctions des bénévoles
                      </h4>

                      <p>{item.volunteers}</p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};
export default AssociationPage;
