import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("home");

export { generateMetadata };

const HomePage = async ({ params }: PageProp) => {
  const home = await getPageMessages(params);

  return (
    <>
      <div className="content-area relative fabric-surface-light flex flex-col gap-6 p-6 md:pb-10 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <div className="flex flex-col gap-6 text-center font-bold">
          <h1 className="text-2xl md:mb-4">
            {home.hero.title}
            <br className="block md:hidden" />Jardins de Wesserling
          </h1>
</div>
      </div>
    </>
  );
};

export default HomePage;
