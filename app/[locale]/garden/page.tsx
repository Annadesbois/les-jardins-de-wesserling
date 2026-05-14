import Hero from "@/components/Hero";
import Link from "next/link";

const GardenPage = () => {
  return (
    <div className="page-layout">
      <h1>Un potager à visiter</h1>
      <section className="text-center">
        <h3 className="pb-10">
          Les potagers de Wesserling sont situés au cœur du remarquable
          <Link
            href="https://www.parc-wesserling.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            parc industriel de Wesserling
          </Link>
          , ouvert au public, intégré au{" "}
          <Link
            href="https://www.erih.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            réseau ERIH
          </Link>
          du tourisme industriel européen.
        </h3>
        <p>
          Toutes les architectures industrielles y sont représentées, de la
          révolution industrielle au 18ème siècle jusqu’au déclin du 20ème
          siècle. La partie haute de ce domaine fait l’objet d’une découverte
          touristique structurée :
        </p>
        <div className="mt-10">
          <Hero
            imageSrc="/restau-du-potager-steeve-josch.webp"
            imageAlt=""
            description={"Accueil au niveau du château des manufacturiers"}
            textPosition="right"
          />
          <Hero
            imageSrc="/restau-du-potager-steeve-josch.webp"
            imageAlt=""
            description={
              "Traversée des jardins par les terrasses méditerranéennes, le parc arboré à l’anglaise, le jardin régulier et son festival, le potager pédagogique, et le parc rural"
            }
            textPosition="left"
          />
          <Hero
            imageSrc="/restau-du-potager-steeve-josch.webp"
            imageAlt=""
            description={
              "Visite de la ferme et de son rôle dans l’ancienne industrie"
            }
            textPosition="right"
          />
          <Hero
            imageSrc="/restau-du-potager-steeve-josch.webp"
            imageAlt=""
            description={
              "Découverte des bâtiments industriels et du 'son et lumière' dans la grande chaufferie"
            }
            textPosition="left"
          />
          <Hero
            imageSrc="/restau-du-potager-steeve-josch.webp"
            imageAlt=""
            description={
              "Sortie par la boutique et le café de la salle des turbines"
            }
            textPosition="right"
          />
        </div>
        <p className="font-bold pt-6">
          C’est dans cet ensemble que l’association Les Jardins de Wesserling a
          développé son projet social : un potager pédagogique et une
          restauration légère, dans lesquels travaillent les salariés en
          insertion professionnelle.
        </p>
      </section>
      <section className="space-y-6">
        <h2 className="text-center pt-10">
          Le potager de Wesserling initie le visiteur à l’art du jardinage
          respectueux de l’environnement, tout en offrant une flânerie insolite.
        </h2>
        <div className="mt-10">
          <Hero
            imageSrc="/restau-du-potager-steeve-josch.webp"
            imageAlt=""
            description={"L’allée centrale qui relie les anciens bassins, est l’ossature du potager. Elle fait le lien entre horticulture et patrimoine industriel de Wesserling. L’agencement des légumes, fleurs et aromates, représente des motifs textiles créés dans l’ancienne Manufacture. Chaque année, une nouvelle composition est présentée, en lien avec le thème du Festival des Jardins Métissés."}
            textPosition="right"
          />
          <Hero
            imageSrc="/restau-du-potager-steeve-josch.webp"
            imageAlt=""
            description={
              "De part et d’autre de cet axe s’étendent les quatre secteurs du potager pédagogique. Leurs parcelles mettent en scène les façons de cultiver en tenant compte des processus naturels : rotation des cultures, associations bénéfiques entre plantes, aide des auxiliaires de culture, gestion du sol et de l’eau, ... Un cheminement au cœur d’une haie dévoile les habitats d’auxiliaires de culture utiles au jardinier. Des panneaux pédagogiques et des jeux éducatifs initient aux secrets du jardinier."
            }
            textPosition="left"
          />
          <Hero
            imageSrc="/restau-du-potager-steeve-josch.webp"
            imageAlt=""
            description={
              "Un verger conservatoire de cognassiers, une terrasse de petits fruits et d’aromatiques, complètent ce jardin gourmand, dont les productions sont vendues ou transformées au Resto du Potager."
            }
            textPosition="right"
          />
          <Hero
            imageSrc="/restau-du-potager-steeve-josch.webp"
            imageAlt=""
            description={
              "Afin d’être accessible à tous, y compris aux personnes à mobilité réduite, de nombreux lieux de repos, immergés dans la végétation,ponctuent les allées du potager."
            }
            textPosition="left"
          />
        </div>
      </section>
    </div>
  );
}
export default GardenPage