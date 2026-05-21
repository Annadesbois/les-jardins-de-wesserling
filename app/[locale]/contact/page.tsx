import LinkButton from "@/components/LinkButton";
import { getMessages } from "@/lib/i18n";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp, ContactFormMessages } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("contact");

export { generateMetadata };

const ContactPage = async ({ params }: PageProp) => {
  const { locale } = await params;
  const contact = await getPageMessages(params);

  const emailName = "giteaufildeleau68";
  const provider = "gmail.com";
  const email = `${emailName}@${provider}`;

  return (
    <div className="page-layout">
      <h1>{contact.title}</h1>
      <div className="relative w-full rounded-xl flex flex-col gap-6 md:gap-8 md:p-8 ">
        <div className="text-center">
          <p className="font-bold">Les Jardins de Wesserling</p>
          <address className="not-italic">
            <p>16, rue de Ranspach</p>
            <p>68470 HUSSEREN-WESSERLING</p>
          </address>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-sm aspect-3/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d1401.712215200502!2d6.997052396193473!3d47.88364612758219!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4793d323ca57c30f%3A0x8f003138143c2ca!2sLes%20Jardins%20de%20Wesserling!5e1!3m2!1sen!2suk!4v1775056643917!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Localisation du Gîte Au fil de l'eau"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="text-center">
          <p className="font-bold mb-2">{contact.info}</p>
          <address className="not-italic">
            <p className="pb-2">
              Tel :{" "}
              <a href="tel:+33607961086">
                <span className="font-bold">
                  +33&nbsp;3&nbsp;67&nbsp;35&nbsp;09&nbsp;55
                </span>
              </a>
            </p>
            <p>
              Email :{" "}
              <a href={email}>
                <span className="font-bold">
                  contact&#64;jardins-wesserling.fr
                </span>
              </a>
            </p>
          </address>
        </div>
        <div className="my-7">
          <LinkButton
            href={`https://www.parc-wesserling.fr/preparez-votre-visite/`}
            external
          >
            {contact.reservation}
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
