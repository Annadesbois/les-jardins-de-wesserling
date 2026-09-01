import Image from "next/image";

import LinkButton from "@/components/LinkButton";

import { createPageHelpers } from "@/lib/metadata";
import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("association");

export { generateMetadata };

const AssociationPage = async ({ params }: PageProp) => {
  const { locale } = await params;
  const association = await getPageMessages(params);
  const timelineItems = association.history.timelineItems;

  return (
    <div className="page-layout">
      <h1>{association.title}</h1>

      <section className="flex flex-col gap-6 mb-12">
        <p className="text-justify">{association.intro.firstParagraph}</p>

        <p className="pt-5 font-bold text-justify">
          {association.intro.secondParagraph}
        </p>

        <ul>
          <li>
            {association.intro.objectives.employment}
            <LinkButton href={`/${locale}/about/mission`} className="mb-8 mt-6">
              {association.intro.missionButton}
            </LinkButton>
          </li>
          <li>{association.intro.objectives.heritage}</li>
          <li>{association.intro.objectives.environment}</li>
        </ul>

        <Image
          src="/photos/asso/notre-association.JPG"
          alt={association.intro.imageAlt}
          width={1200}
          height={800}
          className="mt-8 w-full rounded-xl object-cover mb-12"
        />

        <p className="text-justify">{association.intro.thirdParagraph}</p>

        <p className="pt-5 font-bold text-justify">
          {association.intro.volunteersTitle}
        </p>

        <ul>
          <li>{association.intro.volunteerActions.gardenDesign}</li>
          <li>{association.intro.volunteerActions.educationalActivities}</li>
          <li>{association.intro.volunteerActions.festiveEvents}</li>
          <li>{association.intro.volunteerActions.maintenance}</li>
          <li>{association.intro.volunteerActions.communication}</li>
          <li>{association.intro.volunteerActions.governance}</li>
        </ul>

        <p className="text-justify">{association.intro.closingParagraph}</p>

        <LinkButton href={`/${locale}/about/support-us`} className="mt-4">
          {association.intro.supportButton}
        </LinkButton>
      </section>

      <Image
        src="/leaf-divider.png"
        alt={association.dividerAlt}
        width={500}
        height={50}
        className="mx-auto mb-20 mt-6"
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="pb-8 md:pb-6 text-center text-3xl font-bold text-title">
          {association.history.title}
        </h2>

        <article className="space-y-6 mb-24 text-justify">
          {association.history.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <div className="relative">
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
                <div className="absolute -left-18 top-8 hidden h-5 w-5 rounded-full bg-primary md:block" />

                <div className="md:sticky md:top-24 md:pt-6">
                  <span className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-bold text-secondary shadow-sm">
                    {item.years}
                  </span>
                </div>

                <article className="rounded-2xl bg-surface-1 p-6 text-left shadow-md ring-1 ring-primary/10">
                  <h3 className="mb-6 text-xl font-bold">{item.title}</h3>

                  <div className="grid gap-8 lg:grid-cols-3">
                    <div>
                      <h4 className="mb-3 text-lg font-bold text-title">
                        {association.history.timelineLabels.actions}
                      </h4>

                      <ul className="list-disc space-y-2 pl-5">
                        {Object.values(item.actions).map((action) => (
                          <li key={action}>{action}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-lg font-bold text-title">
                        {association.history.timelineLabels.employees}
                      </h4>
                      <p>{item.employees}</p>
                    </div>

                    <div>
                      <h4 className="mb-3 text-lg font-bold text-title">
                        {association.history.timelineLabels.volunteers}
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
