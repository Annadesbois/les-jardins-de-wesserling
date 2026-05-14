import Image from "next/image";
import Link from "next/link";

import fse from "@/public/logos/fse.jpeg";
import republicFrancaise from "@/public/logos/republique-francaise.svg";
import grandEst from "@/public/logos/region-grand-est.png";
import alsace from "@/public/logos/collectivite-europeenne-alsace.png";
import thurDoller from "@/public/logos/pays-thur-doller.png";
import stAmarin from "@/public/logos/vallée-de-st-amarin.svg";
import alliance from "@/public/logos/fondation-alliance-cairpsa-carpreca.jpg";
import sm4 from "@/public/logos/sm4.png";
import total from "@/public/logos/total-energies.jpg";
import patrimoine from "@/public/logos/fondation-du-patrimoine.png";
import hermes from "@/public/logos/fondation-hermes.png";

const PartnersPage = () => {

  return (
    <div className="page-layout">
      <section>
        <h1 className="pb-8">Nos partenaires</h1>
        <h2>Nos partenaires financiers</h2>
        <p className="text-justify">
          L’association Les Jardins de Wesserling étant conventionnée Ateliers
          et Chantier d’insertion, elle bénéficie de partenariats financiers
          réguliers, au même titre que l’ensemble des structures d’Insertion par
          l’Activité Economique.
        </p>
        <div className="flex flex-wrap relative flex gap-6 md:gap-8 lg:gap-12 py-14 px-3 md:px-14 justify-center items-center">
          <Image src={stAmarin} alt={"stAmarinAlt"} width={70} />
          <Image src={thurDoller} alt={"thurDollerAlt"} width={70} />
          <Image src={alsace} alt={"alsaceAlt"} width={70} />
          <Image
            src={republicFrancaise}
            alt={"republiqueFrancaiseAlt"}
            width={70}
          />
          <Image src={fse} alt={"fondsSocialEuropeenAlt"} width={70} />
        </div>
        <p className="text-justify">
          D’autres partenaires financiers apportent leur soutien pour des
          projets spécifiques d’investissement ou de création de postes
          associatifs :{" "}
        </p>
        <div className="flex flex-wrap relative flex gap-6 md:gap-8 lg:gap-12 py-14 px-3 md:px-14 justify-center items-center">
          <Image src={grandEst} alt={"grandEstAlt"} width={70} />
          <Image src={sm4} alt={"sm4Alt"} width={70} />
          <Image src={alliance} alt={"allianceAlt"} width={70} />
          <Image src={patrimoine} alt={"fondationPatrimoineAlt"} width={70} />
          <Image src={total} alt={"totalEnergiesAlt"} width={70} />
          <Image src={hermes} alt={"hermesAlt"} width={70} />
        </div>
      </section>
      <section className="text-justify">
        <h2>
          <Link
            href="https://www.europe-en-france.gouv.fr/fr/fonds-europeens-2014-2020/fonds-social-europeen-fse"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Le Fonds Social Européen FSE
          </Link>
        </h2>
        <p>
          Le Fonds Social Européen apporte une aide financière substantielle au
          chantier d’Insertion des Jardins de Wesserling, pour le financement du
          poste d’accompagnement socioprofessionnel et des 3 postes d’encadrants
          techniques. L’ensemble des Structures d’Insertion par l’Activité
          Economique peuvent bénéficier de tels soutiens.
        </p>
        <p>
          Créé en 1957, le Fonds Social Européen avait pour but initial d’aider
          à la reconversion des travailleurs et à leur mobilité. Aujourd’hui, le
          Fonds Social Européen + est un programme de financement de l’Union
          Européenne qui soutient des projets pour l’emploi, l’éducation, la
          formation et l’inclusion sociale.
        </p>
        <p>
          Le FSE s’inscrit dans une programmation européenne de 7 ans. La
          programmation actuelle couvre 2021-2027. La France dispose de 6,7
          milliards d’euros au titre du FSE+ sur cette période. Ces crédits sont
          répartis entre 2 programmes nationaux gérés par l’Etat et 17
          programmes régionaux :
        </p>
        <ul>
          <li>
            La Délégation générale à l’emploi et à la formation professionnelle
            (DGEFP) est autorité de gestion du
            <Link
              href="https://fse.gouv.fr/programmes-nationaux/le-programme-national-fse"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              programme national FSE+ « emploi, inclusion, jeunesse et
              compétences »
            </Link>
            doté de 4 milliards d’euros pour la période 2021-2027
          </li>
          <li>
            • La Direction générale de la cohésion sociale (DGCS) est autorité
            de gestion du
            <Link
              href="https://fse.gouv.fr/programmes-nationaux/le-programme-national-seaa"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              programme national FSE+ « Soutien européen à l’aide alimentaire »
            </Link>
            doté de 582 millions d’euros pour la période 2021-2027
          </li>
          <li>
            Les Régions (ou collectivité unique en Corse, Guyane et Martinique)
            sont autorités de gestion de programmes régionaux FEDER-FSE+ dont
            les volets FSE+ représentent 2,1milliards d’euros. Pour en savoir
            plus sur les programmes régionaux FEDER-FSE+ :
            <Link
              href="https://fse.gouv.fr/programmes-regionaux"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Programmes européens (2021-2027) | L'Europe s'engage en France, le
              portail des Fonds européens
            </Link>
          </li>
        </ul>
        <p>
          Afin de s’assurer de l’absence de double financement des actions par
          le FSE+, des « lignes de partage » définies en concertation entre
          l’Etat et Régions de France définissent les grands principes de
          répartition des compétences entre le programme national FSE+ piloté
          par la DGEFP et les 17 programmes régionaux, en s’appuyant sur les
          compétences légales de chaque autorité de gestion :
        </p>
        <ul>
          <li>
            Les domaines d’actions suivants relèvent du programme national FSE+
            « emploi, inclusion, jeunesse et compétences » : l’insertion sociale
            et professionnelle des personnes les plus éloignées de l’emploi
            (sauf dans les collectivités uniques), l’accompagnement des jeunes
            vers l’emploi et l’apprentissage, le développement des compétences
            des salariés, la qualité de vie de travail et l’égalité
            professionnelle
          </li>
          <li>
            Les domaines d’actions suivants relèvent des programmes régionaux :
            la formation des demandeurs d’emploi, l’appui à la création
            d’entreprise, le soutien à l’économie sociale et solidaire,
            l’orientation tout au long de la vie (sauf à Mayotte et
            Saint-Martin)
          </li>
          <li>
            La répartition des compétences concernant certains sujets tels que
            la lutte contre le décrochage scolaire est déterminée dans des
            accords locaux de lignes de partage.
          </li>
        </ul>
      </section>
      <section className="text-justify space-y-6">
        <h2>Nos partenaires techniques</h2>
        <h3 className="font-bold">
          L’association de Gestion et d’Animation du Parc Textile de Wesserling
        </h3>
        <p>
          Le Parc de Wesserling, dans lequel est intégré l’association Les
          Jardins de Wesserling, est pour partie propriété du Département du
          Haut-Rhin, aujourd’hui Collectivité Européenne d’Alsace, et pour
          partie propriété de la Communauté de Communes de la Vallée de
          Saint-Amarin.
        </p>
        <p>
          Le Département du Haut-Rhin (aujourd’hui la CEA) a délégué à
          l’association de Gestion et d’Animation du Parc Textile de Wesserling,
          la mission de reconvertir cet ancien domaine industriel textile vers
          le tourisme, et de le gérer. Il s’agit d’une fédération
          d’associations, dont l’association Les Jardins de Wesserling est
          membre. Une convention précise les modalités de collaboration sur les
          espaces communs aux deux structures.
        </p>
        <p>
          L’association Les Jardins de Wesserling partage des locaux commun avec
          l’association de Gestion du Parc de Wesserling et le chantier
          d’insertion Patrimoine et Emploi, locaux réhabilités puis mis
          gratuitement à la disposition des structures.
        </p>
        <h3 className="font-bold pt-6">Les autres associations partenaires</h3>
        <p>
          Diverses associations participent aux animations de l’association Les
          Jardins de Wesserling : la médiathèque de Wesserling l’Etoffe des
          Mots, les Jardins Familiaux de Thann, des sociétés d’aviculteurs et
          d’apiculteurs, le SM4, les Ecojardiniers Na’Thur Doller, la recyclerie
          Krempel & Pric a Prac, Les Oiseaux du Stockenberg, le CPIE des Hautes
          Vosges, la LPO, le Moulin de Storckensohn, ...
        </p>
      </section>
    </div>
  );
};
export default PartnersPage;
