import { Locale } from "./types";

export const fr: Locale = {
  header: {
    title: "Centre de Support Numens",
  },
  grid: {
    systemLabel: "Système",
  },
  tip: {
    message: "Si vous êtes redirigé vers votre tableau de bord personnel, veuillez copier le lien et l'ouvrir dans un navigateur pour éviter que l'application mobile ne saute automatiquement. L'accès par ordinateur est recommandé.",
  },
  modal: {
    instructionTitle: "Comment utiliser le manuel intelligent",
    step1Title: "Cliquez pour sauter",
    step1Desc: "Le système préparera automatiquement la page de la base de connaissances techniques partagée pour votre modèle d'appareil.",
    step2Title: "Enquête intelligente",
    step2Desc: "Vous pouvez poser des questions comme un expert, telles que \"{prompt0}\" ou \"{prompt1}\"",
    step3Title: "Positionnement précis",
    step3Desc: "L'IA fournira des réponses précises basées sur les diagrammes officiels et affichera les numéros de page source spécifiques.",
    noteTitle: "Conseils",
    noteDesc: "Il peut y avoir des retards occasionnels dans le traitement de l'IA, veuillez attendre la fin de la génération du contenu.",
    button: "Posez vos questions ici",
  },
  footer: {
    contactTitle: "CONTACT",
    address: "Adresse",
    addressVal: "55 Yunhui Road, Yinzhou District, Ningbo, Zhejiang, 315137, China",
    tel: "Tél",
    fax: "Fax",
    email: "E-mail",
    copyright: "© 2026 Ningbo Ambest Electronics Co Ltd",
    chinaAddress: "(中国浙江省，宁波市，鄞州区 邮编：315137)",
  },
  manuals: {
    "system-a": {
      name: "Guide technologique des systèmes adressables et sans fil",
      description: "Couvre les réseaux adressables et maillés sans fil, fournissant des guides de configuration de système fiables et sans fil.",
      prompts: ["Comment changer l'adresse de l'appareil ?", "Étapes d'appairage du réseau maillé."],
    },
    "system-b": {
      name: "Guide technologique des systèmes non adressables",
      description: "Guides pour les systèmes conventionnels non adressables, offrant une surveillance de zone rentable et des instructions de câblage.",
      prompts: ["Exigences du schéma de câblage de zone.", "Valeurs de la résistance de fin de ligne."],
    },
    "system-c": {
      name: "Guide technologique du système de déclenchement d'extinction",
      description: "Se concentre sur les systèmes de déclenchement d'extinction, détaillant la logique de détection, les contrôles de retard et les spécifications de décharge sûre.",
      prompts: ["Configuration du délai de décharge.", "Logique de câblage de l'interrupteur d'arrêt."],
    },
    "system-d": {
      name: "Guide technologique résidentiel",
      description: "Conçu pour les scénarios résidentiels, fournissant l'installation et le dépannage des alarmes autonomes et interconnectées.",
      prompts: ["Guide de câblage d'interconnexion.", "Procédure de test et de remplacement de la batterie."],
    },
  },
};
