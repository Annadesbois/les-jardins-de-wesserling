import LinkButton from "@/components/LinkButton";

import type { PageProp } from "@/types/i18n";
import { createPageHelpers } from "@/lib/metadata";

// const { generateMetadata, getPageMessages } = createPageHelpers("support-us");

// export { generateMetadata };

const SupportUsPage = async ({ params }: PageProp) => {
  const { locale } = await params;
  // const supportUs = await getPageMessages(params);

  return (
    <div className="page-layout">
      <h1>Soutenir et participer</h1>
      <section>
        <p className="font-bold">
          Un soutien peut être apporté à l’association de multiples façons
          :{" "}
        </p>
        <ul>
          <li>
            En visitant les jardins, en achetant ses productions ou en
            consommant au Resto du potager, ce qui est un encouragement pour les
            salariés en insertion professionnelle qui y travaillent
          </li>
          <li>
            En adhérant à l’association ou en devenant donateur (avantage fiscal
            de 66%, l’association étant reconnue d’intérêt public), ce qui
            participe au financement des actions en faveur de l’emploi
          </li>
          <li>
            En participant aux activités de l’association ce qui contribue à ses
            objectifs d’intérêt public
          </li>
        </ul>
        <LinkButton href={`/${locale}/contact`}>Nous contacter</LinkButton>
      </section>
      <section className="space-y-4">
        <p className="font-bold">
          Pour adhérer à l’association Les Jardins de Wesserling :
        </p>
        <p>
          Remplir le bulletin d’adhésion et le renvoyer avec le règlement par
          chèque à « Association Les Jardins de Wesserling 16 rue de Ranspach
          68470 Husseren-Wesserling ».
        </p>
        <p>
          Le règlement peut également être fait par virement bancaire, ou en se
          rendant sur place dans les bureaux de l’association.
        </p>
        <p className="text-blue-800">
          Lien vers bulletin d’adhésion imprimable
        </p>
      </section>
    </div>
  );
};
export default SupportUsPage;
