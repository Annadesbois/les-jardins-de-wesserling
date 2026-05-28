export type AssociationMessages = {
  title: string;
  intro: {
    firstParagraph: string;
    secondParagraph: string;
    objectivesTitle: string;
    objectives: {
      employment: string;
      heritage: string;
      environment: string;
    };
    missionButton: string;
    imageAlt: string;
    thirdParagraph: string;
    volunteersTitle: string;
    volunteerActions: {
      gardenDesign: string;
      educationalActivities: string;
      festiveEvents: string;
      maintenance: string;
      communication: string;
      governance: string;
    };
    closingParagraph: string;
    supportButton: string;
  };
  dividerAlt: string;
  history: {
    title: string;
    paragraphs: string[];
    timelineLabels: {
      actions: string;
      employees: string;
      volunteers: string;
    };
    timelineItems: {
      years: string;
      title: string;
      actions: {
        first: string;
        second?: string;
        third?: string;
        fourth?: string;
        fifth?: string;
      };
      employees: string;
      volunteers: string;
    }[];
  };
};