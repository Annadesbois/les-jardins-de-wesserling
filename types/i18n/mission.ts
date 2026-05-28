export type MissionMessages = {
  title: string;
  insertionWorksite: {
    imageAlt: string;
    title: string;
    firstParagraphStart: string;
    aciLinkLabel: string;
    firstParagraphEnd: string;
    secondParagraphStart: string;
    iaeLinkLabel: string;
    secondParagraphMiddle: string;
    essLinkLabel: string;
    secondParagraphEnd: string;
  };
  employees: {
    imageAlt: string;
    title: string;
    firstParagraph: string;
    secondParagraph: string;
    thirdParagraph: string;
  };
  application: {
    title: string;
    introduction: string;
    eligibility: {
      longTermUnemployed: string;
      youngAndSenior: string;
      singleParents: string;
      rsaRecipients: string;
      disabledPeople: string;
      newcomers: string;
    };
    applicationProcess: string;
    franceTravailInfo: string;
    contactButton: string;
  };
};
