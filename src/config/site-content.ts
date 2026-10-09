import { 
  Activity, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  HeartHandshake, 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Flame, 
  BrainCircuit, 
  Users, 
  Stethoscope,
  Smile,
  CalendarCheck
} from "lucide-react";

export const siteConfig = {
  clinicName: "Clínica Logos",
  subName: "Fisioterapia Avançada & Reabilitação",
  professionalName: "Dra. Ivonete Ribeiro",
  crefito: "CREFITO-TO 387261",
  specialty: "Fisioterapeuta Especialista em Coluna, Reabilitação e Pilates Clínico",
  
  // Contato & Localização
  phoneRaw: "556392899971",
  phoneFormatted: "(63) 99289-9971",
  address: "Av. Filadélfia, 2815 - Jardim América, Araguaína - TO, 77805-221",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Clínica Logos Dra. Ivonete Ribeiro Fisioterapia Av. Filadélfia, 2815 - Jardim América, Araguaína - TO"),
  hours: "Segunda a Sexta, das 07h às 20h",
  googleRating: 4.9,
  googleReviewCount: 36,

  // Links rápidos
  whatsappMessageDefault: "Olá! Vim através do site e gostaria de agendar uma avaliação na clínica com a Dra Ivonete.",
  get whatsappUrl() {
    return `https://wa.me/${this.phoneRaw}?text=${encodeURIComponent(this.whatsappMessageDefault)}`;
  }
};

export const heroContent = {
  badge: "Clínica Logos · Fisioterapia de Alta Performance em Araguaína-TO",
  titlePart1: "Livre-se da dor e recupere sua",
  titleHighlight: "liberdade de movimento",
  titlePart2: "com tratamento humanizado.",
  description: "Tratamentos personalizados e baseados em evidências que tratam a causa raiz do seu problema, e não apenas o sintoma. Volte a viver com qualidade, autonomia e sem limitações.",
  ctaPrimary: "Agendar Minha Avaliação",
  ctaSecondary: "Falar no WhatsApp",
  floatingBadges: [
    { text: "Atendimento 1 a 1 Exclusivo", icon: HeartHandshake },
    { text: "Nota 4.9 ★★★★★ no Google", icon: Smile },
    { text: "Alívio Rápido & Duradouro", icon: Sparkles },
  ]
};

export const metricsData = [
  { value: "+1.000", label: "Vidas Reabilitadas", description: "Pacientes sem dor e com mais qualidade de vida" },
  { value: "CREFITO", label: "387261", description: "Profissional habilitada e certificada" },
  { value: "4.9 / 5.0", label: "Avaliação Google", description: "Baseado em dezenas de avaliações reais" },
  { value: "100%", label: "Individualizado", description: "Foco total em você durante toda a sessão" },
];

export const painPointsContent = {
  tagline: "Identifique seu caso",
  title: "Você convive com alguma dessas dores no seu dia a dia?",
  subtitle: "Sentir dor constante não é normal e não deve fazer parte da sua rotina. Veja os casos mais comuns que tratamos com alto índice de sucesso:",
  items: [
    {
      title: "Dor na Lombar & Coluna Travada",
      description: "Dificuldade para levantar da cama, amarrar os sapatos ou ficar muito tempo sentado no trabalho.",
      symptoms: ["Pontadas agudas", "Rigidez matinal", "Sensação de peso"]
    },
    {
      title: "Hérnia de Disco & Nervo Ciático",
      description: "Dores que irradiam para os glúteos ou pernas, formigamentos, queimação e perda de força.",
      symptoms: ["Dores irradiadas", "Formigamento", "Fraqueza nas pernas"]
    },
    {
      title: "Dores no Pescoço, Ombros & Escápula",
      description: "Tensão muscular crônica acumulada por estresse, uso excessivo de telas ou postura inadequada.",
      symptoms: ["Cefaleia tensional", "Nódulos de tensão", "Pescoço travado"]
    },
    {
      title: "Dores nos Joelhos, Quadris & Articulações",
      description: "Estalos, inchaço ou limitação para caminhar, subir escadas, praticar corrida ou agachar.",
      symptoms: ["Estalos dolorosos", "Falta de estabilidade", "Desgaste articular"]
    },
    {
      title: "Pós-Operatório & Lesões Esportivas",
      description: "Reabilitação acelerada e segura após cirurgias ortopédicas ou entorses e estiramentos musculares.",
      symptoms: ["Inchaço pós-cirúrgico", "Perda de amplitude", "Recuperação de força"]
    },
    {
      title: "Má Postura & Falta de Mobilidade",
      description: "Corpo rígido, falta de flexibilidade e desconforto postural que afetam o rendimento e o sono.",
      symptoms: ["Ombros caídos", "Cansaço constante", "Hipercifose/Escoliose"]
    }
  ],
  callout: "👉 O diagnóstico precoce evita cirurgias e remédios em excesso. Dê o primeiro passo hoje."
};

export const treatmentsContent = {
  tagline: "Nossos Tratamentos",
  title: "Especialidades integradas para a sua recuperação completa",
  subtitle: "Na Clínica Logos, combinamos métodos terapêuticos manuais e exercícios guiados para resultados consistentes.",
  services: [
    {
      id: "pilates",
      title: "Pilates Clínico & Funcional",
      summary: "Fortalecimento profundo do CORE, alinhamento postural e controle motor em aparelhos de última geração.",
      benefits: ["Aumento da estabilidade da coluna", "Melhora expressiva da flexibilidade", "Prevenção de novas lesões"],
      icon: Activity,
      highlight: "Ideal para pós-reabilitação e postura"
    },
    {
      id: "quiro",
      title: "Quiropraxia & Terapia Manual",
      summary: "Ajustes articulares precisos e mobilizações para destravar a coluna e restaurar o equilíbrio do corpo.",
      benefits: ["Alívio imediato da sensação de travamento", "Descompressão das articulações", "Restauração da mobilidade"],
      icon: Zap,
      highlight: "Alívio rápido de dores agudas"
    },
    {
      id: "hernia",
      title: "Tratamento da Dor & Hérnia de Disco",
      summary: "Protocolo especializado com foco em descompressão neural, redução do processo inflamatório e estabilização.",
      benefits: ["Alívio da queimação e formigamento", "Evita procedimentos invasivos", "Regeneração da funcionalidade"],
      icon: Sparkles,
      highlight: "Método comprovado"
    },
    {
      id: "miofascial",
      title: "Liberação Miofascial & Dry Needling",
      summary: "Técnicas de desativação de pontos-gatilho (trigger points) e quebra de aderências nos tecidos musculares.",
      benefits: ["Relaxamento de contraturas profundas", "Melhora instantânea da circulação", "Redução do estresse muscular"],
      icon: Flame,
      highlight: "Para tensões crônicas"
    },
    {
      id: "ortopedia",
      title: "Reabilitação Traumato-Ortopédica",
      summary: "Recuperação funcional para lesões de ligamentos, tendinites, bursites e reabilitação pós-cirurgias.",
      benefits: ["Ganho de amplitude de movimento", "Reeducação neuromuscular", "Retorno seguro ao esporte e rotina"],
      icon: ShieldCheck,
      highlight: "Retorno seguro às atividades"
    },
    {
      id: "laser",
      title: "Terapia Neural & Laserterapia",
      summary: "Tecnologia fototerapêutica para bioestimulação celular, cicatrização acelerada e ação anti-inflamatória.",
      benefits: ["Acelera o reparo celular", "Reduz edema e inflamação", "Tratamento indolor e seguro"],
      icon: BrainCircuit,
      highlight: "Tecnologia de ponta"
    }
  ]
};

export const methodContent = {
  tagline: "Como Trabalhamos",
  title: "O Método Logos: 4 Passos para Você Viver sem Dor",
  subtitle: "Diferente de sessões padronizadas e impessoais, nosso método acompanha cada detalhe da sua evolução.",
  steps: [
    {
      number: "01",
      title: "Avaliação Biomecânica Detalhada",
      description: "Analisamos sua postura, testes de força, amplitude articular e histórico clínico para descobrir a verdadeira origem da dor.",
      highlight: "Escuta atenta e diagnóstico preciso"
    },
    {
      number: "02",
      title: "Plano Terapêutico Sob Medida",
      description: "Desenhamos um protocolo exclusivo com a combinação ideal de terapias manuais, exercícios e tecnologia.",
      highlight: "100% focado na sua rotina e objetivos"
    },
    {
      number: "03",
      title: "Alívio Imediato & Fortalecimento Ativo",
      description: "Atuamos tanto na redução rápida do desconforto agudo quanto no fortalecimento dos grupos musculares de suporte.",
      highlight: "Técnicas seguras com evolução contínua"
    },
    {
      number: "04",
      title: "Autonomia & Prevenção de Crises",
      description: "Você recebe orientações ergonômicas e exercícios preventivos para ter alta com segurança e nunca mais voltar a travar.",
      highlight: "Sua liberdade de movimento de volta"
    }
  ],
  quote: "“Não tratamos apenas exames ou laudos. Cuidamos de pessoas reais que querem voltar a trabalhar, brincar com os filhos e viver sem dor.”",
  quoteAuthor: "Dra. Ivonete Ribeiro · Fisioterapeuta"
};

export const aboutContent = {
  tagline: "Sobre a Profissional & Clínica Logos",
  title: "Dra. Ivonete Ribeiro",
  subtitle: "Fisioterapeuta e Fundadora da Clínica Logos",
  image: "/ivone-home.jpg",
  paragraphs: [
    "A história da Dra. Ivonete com a fisioterapia começou de dentro para fora: após vivenciar na própria pele os desafios e limitações de uma crise de dor na coluna, ela compreendeu a importância de um tratamento que olhe para o paciente com empatia, escuta ativa e dedicação real.",
    "Graduada e com ampla formação contínua em Pilates Clínico, Terapias Manuais, Quiropraxia e Reabilitação de Coluna, fundou a Clínica Logos com um único propósito: transformar a dor de seus pacientes em liberdade e saúde duradoura.",
    "Na Clínica Logos, você não é mais um número. Cada atendimento é individualizado, pontual e realizado em um espaço moderno, acolhedor e com equipamentos de alta tecnologia em Araguaína."
  ],
  badges: [
    "Graduação em Fisioterapia",
    "Especialista em Reabilitação da Coluna",
    "Certificação Internacional em Pilates Clínico",
    "Membro do CREFITO-TO",
    "Mais de 1.000 pacientes atendidos"
  ]
};

export const testimonialsContent = {
  tagline: "Histórias Reais",
  title: "O que dizem os pacientes que recuperaram a qualidade de vida",
  subtitle: "Veja relatos espontâneos de quem confiou na Dra. Ivonete e na Clínica Logos.",
  reviews: [
    {
      name: "Aislany Oliveira",
      treatment: "Tratamento de Coluna & Pilates",
      rating: 5,
      comment: "Excelente profissional! Trata cada caso de forma única, com foco na identificação e resolução da causa raiz de cada situação. Recomendo de olhos fechados!",
      date: "Avaliação no Google"
    },
    {
      name: "Franciléia Soares",
      treatment: "Reabilitação Postural",
      rating: 5,
      comment: "Profissional extremamente dedicada e competente! O trabalho dela tem feito muita diferença na minha vida e na das minhas alunas. Recomendo demais!",
      date: "Avaliação no Google"
    },
    {
      name: "Bruna de Paula",
      treatment: "Alívio de Dores Crônicas",
      rating: 5,
      comment: "Extremamente dedicada, atenciosa e competente. Demonstra profundo conhecimento técnico aliado a um cuidado genuíno com o paciente. Recomendo com total confiança!",
      date: "Avaliação no Google"
    },
    {
      name: "Marcos Vinícius",
      treatment: "Hérnia de Disco e Ciático",
      rating: 5,
      comment: "Cheguei na clínica praticamente travado e sem conseguir sentar direito. Em poucas semanas de tratamento voltei às minhas atividades normais. Atendimento impecável!",
      date: "Avaliação no Google"
    }
  ]
};

export const captureFormContent = {
  tagline: "Primeiro Passo",
  title: "Agende sua Avaliação Personalizada",
  subtitle: "Preencha os campos abaixo para receber o contato direto da nossa equipe e garantir seu horário na Clínica Logos.",
  complaintOptions: [
    "Dor na Lombar / Coluna",
    "Hérnia de Disco / Ciático",
    "Dor no Pescoço / Ombros",
    "Dor no Joelho / Articulações",
    "Pilates Clínico",
    "Pós-Operatório / Reabilitação",
    "Outra queixa"
  ],
  periodOptions: [
    "Manhã (07h às 12h)",
    "Tarde (13h às 18h)",
    "Noite (18h às 20h)",
    "Qualquer horário"
  ],
  buttonText: "Solicitar Agendamento Agora",
  trustBadges: [
    "Resposta rápida no WhatsApp",
    "Seus dados estão 100% protegidos",
    "Avaliação com especialista"
  ]
};

export const faqContent = {
  tagline: "Tire Suas Dúvidas",
  title: "Perguntas Frequentes",
  subtitle: "Reunimos as respostas para as principais dúvidas de quem vai agendar pela primeira vez.",
  items: [
    {
      question: "Como funciona a primeira consulta de avaliação?",
      answer: "A primeira sessão é dedicada a uma anamnese minuciosa, testes biomecânicos específicos de postura, flexibilidade e força, e a identificação precisa da causa da sua dor. Já na primeira consulta, você recebe as primeiras condutas de alívio e um plano de tratamento personalizado."
    },
    {
      question: "Preciso de encaminhamento médico para iniciar a fisioterapia?",
      answer: "Não é obrigatório. O fisioterapeuta é um profissional de primeiro contato, legalmente capacitado e habilitado pelo Conselho de Fisioterapia para avaliar, diagnosticar disfunções cinético-funcionais e prescrever o melhor tratamento. Caso você já possua laudos ou exames de imagem, traga-os na consulta para enriquecer a análise."
    },
    {
      question: "A Clínica Logos atende convênios médicos?",
      answer: "Trabalhamos na modalidade de atendimento particular para garantir tempo integral e dedicação 1 a 1 de 50 a 60 minutos por paciente. No entanto, fornecemos recibo e relatório detalhado para que você possa solicitar reembolso junto ao seu plano de saúde com facilidade."
    },
    {
      question: "Em quantas sessões começo a sentir alívio da dor?",
      answer: "A grande maioria dos pacientes relata alívio significativo já nas primeiras 2 a 4 sessões, especialmente com a aplicação de terapias manuais e liberação miofascial. O tempo total do plano varia de acordo com a cronicidade da lesão e a resposta individual do seu organismo."
    },
    {
      question: "Qual a diferença do Pilates Clínico para o Pilates comum de academia?",
      answer: "O Pilates Clínico é conduzido exclusivamente por uma fisioterapeuta capacitada, com foco em tratar lesões, desvios de postura e patologias como hérnia de disco. Os exercícios são adaptados de forma segura, respeitando os limites da sua dor e prevenindo sobrecargas."
    },
    {
      question: "Onde fica a Clínica Logos e como agendar?",
      answer: "Estamos localizados na Av. Filadélfia, 2815 - Jardim América, Araguaína - TO. Você pode agendar preenchendo o formulário nesta página ou clicando no botão do WhatsApp para falar diretamente conosco."
    }
  ]
};
