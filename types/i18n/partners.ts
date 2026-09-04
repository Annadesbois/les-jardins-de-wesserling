export type PartnersMessages = {
  title: string;

  financialPartners: {
    title: string;
    firstParagraph: string;
    secondParagraph: string;

    logos: {
      stAmarinAlt: string;
      thurDollerAlt: string;
      alsaceAlt: string;
      republiqueFrancaiseAlt: string;
      fondsSocialEuropeenAlt: string;
      leaderAlt: string;
      grandEstAlt: string;
      sm4Alt: string;
      allianceAlt: string;
      fondationPatrimoineAlt: string;
      totalEnergiesAlt: string;
      hermesAlt: string;
    };
  };

  fse: {
    title: string;
    firstParagraph: string;
    secondParagraph: string;
    thirdParagraph: string;
  };

  technicalPartners: {
    title: string;

    textileParkAssociation: {
      title: string;
      firstParagraph: string;
      secondParagraph: string;
      thirdParagraph: string;
    };

    otherAssociations: {
      title: string;
      paragraph: string;
    };
  };
};
