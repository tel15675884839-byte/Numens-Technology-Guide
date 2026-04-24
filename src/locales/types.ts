export interface Locale {
  header: {
    title: string;
  };
  grid: {
    systemLabel: string;
  };
  tip: {
    message: string;
  };
  modal: {
    instructionTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    noteTitle: string;
    noteDesc: string;
    button: string;
  };
  footer: {
    contactTitle: string;
    address: string;
    addressVal: string;
    tel: string;
    fax: string;
    email: string;
    copyright: string;
    chinaAddress: string;
  };
  manuals: {
    [key: string]: {
      name: string;
      description: string;
      prompts: string[];
    };
  };
}
