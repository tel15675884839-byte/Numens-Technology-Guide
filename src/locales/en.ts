import { Locale } from "./types";

export const en: Locale = {
  header: {
    title: "Numens Support Center",
  },
  grid: {
    systemLabel: "System",
  },
  tip: {
    message: "If you are redirected to your personal dashboard, please copy the link and open it in a browser to prevent mobile app auto-jumping. Desktop access is recommended.",
  },
  modal: {
    instructionTitle: "How to Use the Smart Manual",
    step1Title: "Click to Jump",
    step1Desc: "The system will automatically prepare the shared technical knowledge base page for your device model.",
    step2Title: "Smart Inquiry",
    step2Desc: "You can ask questions like an expert, such as \"{prompt0}\" or \"{prompt1}\"",
    step3Title: "Precise Positioning",
    step3Desc: "AI will provide precise answers based on official diagrams and display specific source page numbers.",
    noteTitle: "Tips",
    noteDesc: "There may be occasional delays in AI processing, please wait for the content generation to complete.",
    button: "Ask your questions here",
  },
  footer: {
    contactTitle: "CONTACT",
    address: "Address",
    addressVal: "55 Yunhui Road, Yinzhou District, Ningbo, Zhejiang, 315137, China",
    tel: "Tel",
    fax: "Fax",
    email: "Email",
    copyright: "© 2026 Ningbo Ambest Electronics Co Ltd",
    chinaAddress: "(中国浙江省，宁波市，鄞州区 邮编：315137)",
  },
  manuals: {
    "system-a": {
      name: "Addressable & Wireless System Technology Guide",
      description: "Covers addressable and Wireless Mesh networking, providing reliable and wire-free system configuration guides.",
      prompts: ["How to change the device address?", "Mesh network pairing steps."],
    },
    "system-b": {
      name: "Non-Addressable System Technology Guide",
      description: "Guides for conventional non-addressable systems, offering cost-effective zone monitoring and wiring instructions.",
      prompts: ["Zone wiring diagram requirements.", "End-of-line resistor values."],
    },
    "system-c": {
      name: "Extinguishant Releasing System Technology Guide",
      description: "Focuses on extinguishant releasing systems, detailing detection logic, delay controls, and safe discharge specs.",
      prompts: ["Discharge delay configuration.", "Abort switch wiring logic."],
    },
    "system-d": {
      name: "Residential Technology Guide",
      description: "Designed for residential scenarios, providing installation and troubleshooting for standalone and interconnected alarms.",
      prompts: ["Interconnection wiring guide.", "Battery replacement and test procedure."],
    },
  },
};
