import { Locale } from "./types";

export const pt: Locale = {
  header: {
    title: "Centro de Suporte Numens",
  },
  grid: {
    systemLabel: "Sistema",
  },
  tip: {
    message: "Se você for redirecionado para o seu painel pessoal, copie o link e abra-o em um navegador para evitar que o aplicativo móvel pule automaticamente. O acesso pelo computador é recomendado.",
  },
  modal: {
    instructionTitle: "Como usar o Manual Inteligente",
    step1Title: "Clique para saltar",
    step1Desc: "O sistema preparará automaticamente a página da base de conhecimento técnico compartilhada para o seu modelo de dispositivo.",
    step2Title: "Consulta Inteligente",
    step2Desc: "Você pode fazer perguntas como um especialista, como \"{prompt0}\" ou \"{prompt1}\"",
    step3Title: "Posicionamento Preciso",
    step3Desc: "A IA fornecerá respostas precisas com base em diagramas oficiais e exibirá números de página de origem específicos.",
    noteTitle: "Dicas",
    noteDesc: "Pode haver atrasos ocasionais no processamento da IA, aguarde a conclusão da geração do conteúdo.",
    button: "Faça suas perguntas aqui",
  },
  footer: {
    contactTitle: "CONTATO",
    address: "Endereço",
    addressVal: "55 Yunhui Road, Yinzhou District, Ningbo, Zhejiang, 315137, China",
    tel: "Tel",
    fax: "Fax",
    email: "E-mail",
    copyright: "© 2026 Ningbo Ambest Electronics Co Ltd",
    chinaAddress: "(中国浙江省，宁波市，鄞州区 邮编：315137)",
  },
  manuals: {
    "system-a": {
      name: "Guia Tecnológico de Sistemas Endereçáveis e Sem Fio",
      description: "Abrange redes endereçáveis e de malha sem fio, fornecendo guias de configuração de sistema confiáveis e sem fios.",
      prompts: ["Como alterar o endereço do dispositivo?", "Etapas de emparelhamento da rede mesh."],
    },
    "system-b": {
      name: "Guia Tecnológico de Sistemas Não Endereçáveis",
      description: "Guias para sistemas convencionais não endereçáveis, oferecendo monitoramento de zona econômico e instruções de fiação.",
      prompts: ["Requisitos do diagrama de fiação da zona.", "Valores do resistor de fim de linha."],
    },
    "system-c": {
      name: "Guia Tecnológico de Sistema de Liberação de Extintores",
      description: "Foca em sistemas de liberação de extintores, detalhando a lógica de detecção, controles de atraso e especificações de descarga segura.",
      prompts: ["Configuração do atraso de descarga.", "Lógica de fiação da chave de aborto."],
    },
    "system-d": {
      name: "Guia Tecnológico Residencial",
      description: "Projetado para cenários residenciais, fornecendo instalação e solução de problemas para alarmes independentes e interconectados.",
      prompts: ["Guia de fiação de interconexão.", "Procedimento de teste e substituição da bateria."],
    },
  },
};
