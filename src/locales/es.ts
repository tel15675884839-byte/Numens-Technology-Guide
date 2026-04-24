import { Locale } from "./types";

export const es: Locale = {
  header: {
    title: "Centro de Soporte Numens",
  },
  grid: {
    systemLabel: "Sistema",
  },
  tip: {
    message: "Si es redirigido a su panel personal, copie el enlace y ábralo en un navegador para evitar que la aplicación móvil salte automáticamente. Se recomienda el acceso desde escritorio.",
  },
  modal: {
    instructionTitle: "Cómo usar el Manual Inteligente",
    step1Title: "Haga clic para saltar",
    step1Desc: "El sistema preparará automáticamente la página de la base de conocimientos técnicos compartida para su modelo de dispositivo.",
    step2Title: "Consulta Inteligente",
    step2Desc: "Puede hacer preguntas como un experto, como \"{prompt0}\" o \"{prompt1}\"",
    step3Title: "Posicionamiento Preciso",
    step3Desc: "La IA proporcionará respuestas precisas basadas en diagramas oficiales y mostrará los números de página de origen específicos.",
    noteTitle: "Consejos",
    noteDesc: "Puede haber retrasos ocasionales en el procesamiento de la IA, espere a que se complete la generación de contenido.",
    button: "Haga sus preguntas aquí",
  },
  footer: {
    contactTitle: "CONTACTO",
    address: "Dirección",
    addressVal: "55 Yunhui Road, Yinzhou District, Ningbo, Zhejiang, 315137, China",
    tel: "Tel",
    fax: "Fax",
    email: "Correo electrónico",
    copyright: "© 2026 Ningbo Ambest Electronics Co Ltd",
    chinaAddress: "(中国浙江省，宁波市，鄞州区 邮编：315137)",
  },
  manuals: {
    "system-a": {
      name: "Guía Tecnológica de Sistemas Direccionables e Inalámbricos",
      description: "Cubre redes direccionables y de malla inalámbrica, proporcionando guías de configuración de sistemas fiables y sin cables.",
      prompts: ["¿Cómo cambiar la dirección del dispositivo?", "Pasos para el emparejamiento de la red de malla."],
    },
    "system-b": {
      name: "Guía Tecnológica de Sistemas No Direccionables",
      description: "Guías para sistemas convencionales no direccionables, que ofrecen monitoreo de zonas rentable e instrucciones de cableado.",
      prompts: ["Requisitos del diagrama de cableado de zona.", "Valores de resistencia de fin de línea."],
    },
    "system-c": {
      name: "Guía Tecnológica de Sistemas de Liberación de Extintores",
      description: "Se centra en los sistemas de liberación de extintores, detallando la lógica de detección, los controles de retardo y las especificaciones de descarga segura.",
      prompts: ["Configuración del retardo de descarga.", "Lógica de cableado del interruptor de aborto."],
    },
    "system-d": {
      name: "Guía Tecnológica Residencial",
      description: "Diseñado para escenarios residenciales, proporcionando instalación y solución de problemas para alarmas independientes e interconectadas.",
      prompts: ["Guía de cableado de interconexión.", "Procedimiento de prueba y reemplazo de batería."],
    },
  },
};
