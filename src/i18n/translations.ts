// src/i18n/translations.ts
export type Lang = "pt-BR" | "en-US" | "es";

export const availableLangs: { code: Lang; label: string }[] = [
  { code: "pt-BR", label: "PT" },
  { code: "en-US", label: "EN" },
  { code: "es", label: "ES" },
];

type Messages = Record<string, string>;

export const translations: Record<Lang, Messages> = {
  "pt-BR": {
    // ===== HEADER =====
    "header.home": "Início",
    "header.benefits": "Benefícios",
    "header.features": "Recursos",
    "header.partners": "Hotéis parceiros",
    "header.about": "Sobre a HAMORA",
    "header.contactCta": "Fale com a gente",

    // ===== HERO =====
    "hero.badge": "Plataforma de gerenciamento de manutenção para hotéis",
    "hero.title": "Manutenção em dia, hóspedes sempre satisfeitos.",
    "hero.descriptionRest":
      "centraliza e automatiza toda a manutenção do seu hotel em um só lugar, evitando imprevistos e garantindo uma experiência impecável para seus hóspedes.",
    "hero.cta": "Teste grátis por 30 dias",

    // ===== COUNTERS =====
    "counters.title": "Resultados da HAMORA em operações reais de hotelaria",
    "counters.card1.text": "Ocorrências de manutenção gerenciadas",
    "counters.card2.text": "Itens cadastrados e rastreados",
    "counters.card3.text": "Locais monitorados pelos clientes",
    "counters.card4.text": "Taxa média de O.S. concluídas",

    // ===== BENEFÍCIOS =====
    "benefits.title": "Nossos principais benefícios",
    "benefits.subtitle":
      "Centralize toda a manutenção em um único lugar, evitando surpresas desagradáveis para você e para seus hóspedes.",

    "benefits.item1.title": "Poupe tempo e recursos",
    "benefits.item1.text":
      "Simplifique o processo de gerenciamento de manutenção em um único painel. Reduza custos desnecessários identificando e resolvendo problemas de forma mais rápida.",

    "benefits.item2.title": "Mantenha suas instalações sempre no melhor estado",
    "benefits.item2.text":
      "Agende tarefas de manutenção preventiva para evitar falhas antes que aconteçam e acompanhe o estado de cada equipamento em tempo real.",

    "benefits.item3.title": "Garanta a satisfação dos seus hóspedes",
    "benefits.item3.text":
      "Evite interrupções inesperadas durante a estadia, ofereça um ambiente confortável e seguro e fortaleça a reputação do seu hotel no mercado.",

    "benefits.item4.title": "Equipe mais produtiva",
    "benefits.item4.text":
      "Organize responsabilidades, acompanhe o status das tarefas e dê visibilidade para toda a equipe de manutenção.",

    "benefits.item5.title": "Gestão centralizada",
    "benefits.item5.text":
      "Tenha uma visão completa das demandas do hotel, evitando planilhas soltas, quadros físicos e perda de informação.",

    "benefits.item6.title": "Decisões com base em dados",
    "benefits.item6.text":
      "Acompanhe históricos, entenda onde estão os maiores gastos e planeje investimentos de forma estratégica.",

    // ===== FEATURES =====
    "features.title": "Principais recursos da plataforma",

    "features.monitoring.badge": "Monitoramento em tempo real",
    "features.monitoring.title":
      "Veja o estado das suas instalações em um só painel",
    "features.monitoring.text":
      "Acompanhe todas as instalações e equipamentos do hotel em tempo real. Receba alertas sobre problemas emergenciais e tome decisões rápidas para evitar impacto na experiência do hóspede.",

    "features.scheduling.badge": "Agendamento de tarefas inteligente",
    "features.scheduling.title":
      "Planeje manutenções preventivas com antecedência",
    "features.scheduling.text":
      "Crie planos de manutenção preventiva e agende tarefas de forma eficiente. Evite falhas em equipamentos críticos ao manter tudo sob controle com lembretes e recorrências configuráveis.",

    "features.history.badge": "Histórico detalhado",
    "features.history.title": "Tenha o histórico completo de cada equipamento",
    "features.history.text":
      "Consulte o histórico completo de manutenção de cada equipamento e instalação. Use esses dados para fazer análises e decisões estratégicas sobre investimentos, substituições e prioridades.",

    // ===== BRANDS / HOTÉIS =====
    "brands.badge": "Hotéis que confiam na HAMORA",
    "brands.title":
      "Junte-se aos hotéis que já profissionalizaram a manutenção",
    "brands.text":
      "Aqui estão alguns parceiros que já utilizam a HAMORA e reforçam a confiança na solução. A plataforma foi criada especialmente para o setor hoteleiro e evolui junto com as necessidades da hotelaria brasileira.",
    "brands.button": "Quero fazer parte",

    // ===== ABOUT / SOBRE A HAMORA =====
    "about.badge": "Sobre a HAMORA",
    "about.title": "Inovação em manutenção para a hotelaria brasileira",

    "about.who.question": "Quem é a HAMORA?",
    "about.who.part1":
      "HAMORA é uma turistech alagoana criada com o propósito de levar inovação e tecnologia para o setor hoteleiro. Em uma região que é destino de férias de milhares de pessoas, fazia todo sentido nascer uma tecnologia local para impulsionar um setor tão promissor.",
    "about.who.part2":
      "A startup participou de diversos desafios e programas de inovação, como InovAtiva, Turistech Hub, Startup NE, entre outros. Em 2022, foi eleita a startup do ano pela Secretaria de Tecnologia do Estado de Alagoas e finalista do Demoday realizado pela mesma. Em 2023, ficou em 2º lugar no programa de inovação do BNB (VUMBORA), além de outros reconhecimentos.",

    "about.vision.question": "Visão da HAMORA",
    "about.vision.answer":
      "VISÃO: Ser a principal ferramenta de gerenciamento da hotelaria do Brasil.",

    "about.mission.question": "Missão da HAMORA",
    "about.mission.answer":
      "MISSÃO: Existimos para que a hotelaria brasileira seja referência mundial na gestão da manutenção.",

    "about.values.question": "Valores da HAMORA",
    "about.values.answer":
      "VALORES: Simplicidade, Empatia, Confiança, Inovação e Hospitalidade. Esses princípios norteiam a forma como construímos produto, atendemos clientes e nos relacionamos com o mercado.",

    // ===== CTA FINAL =====
    "cta.badge": "Comece hoje",
    "cta.title": "Transforme a manutenção do seu hotel com a HAMORA",
    "cta.text":
      "Experimente nossa plataforma de gerenciamento de manutenção gratuitamente por 30 dias e descubra como é simples elevar a qualidade das suas instalações e a satisfação dos seus hóspedes. Não perca tempo: junte-se aos hotéis que já modernizaram a gestão de manutenção.",
    "cta.button": "Quero testar por 30 dias",

    // ===== FORM / CONTATO =====
    "form.title": "Preencha seus dados e fale com a HAMORA",
    "form.description":
      "Conte pra gente sobre o seu hotel e como a manutenção é feita hoje. Nosso time entra em contato para entender sua realidade e mostrar como a plataforma pode ajudar.",
    "form.firstName": "Nome",
    "form.lastName": "Sobrenome",
    "form.phone": "Telefone",
    "form.email": "E-mail",
    "form.company": "Nome da empresa",
    "form.role": "Cargo",
    "form.teamSize": "Tamanho da equipe",
    "form.need": "Descreva sua necessidade",
    "form.button": "Enviar mensagem",

    // ===== FOOTER =====
    "footer.resources.title": "Recursos",
    "footer.resources.partners": "Hotéis parceiros",
    "footer.resources.about": "Sobre a HAMORA",
    "footer.resources.features": "Recursos da plataforma",
    "footer.resources.benefits": "Benefícios",

    "footer.company.title": "Empresa",
    "footer.company.contactTeam": "Fale com o time",
    "footer.company.story": "Nossa história",

    "footer.social.title": "Redes sociais",

    "footer.copyright": "© 2024 HAMORA",
    "footer.privacy": "Política de privacidade",
    "footer.terms": "Termos de uso",
  },

  // =================== ENGLISH (EN-US) ===================
  "en-US": {
    // HEADER
    "header.home": "Home",
    "header.benefits": "Benefits",
    "header.features": "Features",
    "header.partners": "Hotels",
    "header.about": "About HAMORA",
    "header.contactCta": "Talk to our team",

    // HERO
    "hero.badge": "Maintenance management platform for hotels",
    "hero.title": "Maintenance on track, guests always happy.",
    "hero.descriptionRest":
      "centralizes and automates all maintenance tasks in your hotel in one place, avoiding setbacks and ensuring a flawless guest experience.",
    "hero.cta": "Start your 30-day free trial",

    // COUNTERS
    "counters.title": "HAMORA results in real hotel operations",
    "counters.card1.text": "Maintenance requests managed",
    "counters.card2.text": "Items registered and tracked",
    "counters.card3.text": "Locations monitored by clients",
    "counters.card4.text": "Average work order completion rate",

    // BENEFITS
    "benefits.title": "Our main benefits",
    "benefits.subtitle":
      "Centralize all maintenance in a single place, avoiding unpleasant surprises for you and your guests.",

    "benefits.item1.title": "Save time and resources",
    "benefits.item1.text":
      "Simplify the maintenance management process in a single dashboard. Reduce unnecessary costs by identifying and solving issues faster.",

    "benefits.item2.title": "Keep your facilities in top shape",
    "benefits.item2.text":
      "Schedule preventive maintenance tasks to avoid failures before they happen and monitor each asset in real time.",

    "benefits.item3.title": "Ensure guest satisfaction",
    "benefits.item3.text":
      "Avoid unexpected interruptions during the stay, offer a safe and comfortable environment and strengthen your hotel's reputation.",

    "benefits.item4.title": "More productive teams",
    "benefits.item4.text":
      "Organize responsibilities, track task status and give visibility to the whole maintenance team.",

    "benefits.item5.title": "Centralized management",
    "benefits.item5.text":
      "Get a complete view of hotel demands, avoiding scattered spreadsheets, physical boards and loss of information.",

    "benefits.item6.title": "Data-driven decisions",
    "benefits.item6.text":
      "Track history, understand where the biggest costs are and plan investments strategically.",

    // FEATURES
    "features.title": "Key platform features",

    "features.monitoring.badge": "Real-time monitoring",
    "features.monitoring.title":
      "See the status of your facilities in a single dashboard",
    "features.monitoring.text":
      "Monitor all facilities and equipment in real time. Receive alerts about urgent issues and act quickly to prevent negative impact on guest experience.",

    "features.scheduling.badge": "Smart task scheduling",
    "features.scheduling.title": "Plan preventive maintenance in advance",
    "features.scheduling.text":
      "Create preventive maintenance plans and schedule tasks efficiently. Avoid failures in critical equipment with reminders and recurring tasks.",

    "features.history.badge": "Detailed history",
    "features.history.title": "Access the full history of each asset",
    "features.history.text":
      "Consult the complete maintenance history for each equipment and location. Use this data to support strategic decisions about investments, replacements and priorities.",

    // BRANDS
    "brands.badge": "Hotels that trust HAMORA",
    "brands.title":
      "Join the hotels that have already professionalized maintenance",
    "brands.text":
      "Here are some partners that already use HAMORA and reinforce their trust in our solution. The platform was built specifically for the hospitality industry and evolves together with the needs of Brazilian hotels.",
    "brands.button": "I want to be part of it",

    // ABOUT
    "about.badge": "About HAMORA",
    "about.title": "Innovation in maintenance for Brazilian hospitality",

    "about.who.question": "Who is HAMORA?",
    "about.who.part1":
      "HAMORA is a tourism-tech company from Alagoas created with the purpose of bringing innovation and technology to the hotel industry. In a region that is a vacation destination for thousands of people, it made perfect sense for a local technology to emerge to boost such a promising sector.",
    "about.who.part2":
      "The startup has participated in several innovation programs and challenges, such as InovAtiva, Turistech Hub, Startup NE and others. In 2022 it was elected Startup of the Year by the Technology Secretariat of the State of Alagoas and was a finalist in their Demoday. In 2023 it ranked 2nd in the BNB innovation program (VUMBORA), among other recognitions.",

    "about.vision.question": "HAMORA's vision",
    "about.vision.answer":
      "VISION: To be the main management tool for the Brazilian hotel industry.",

    "about.mission.question": "HAMORA's mission",
    "about.mission.answer":
      "MISSION: We exist so that Brazilian hospitality becomes a global reference in maintenance management.",

    "about.values.question": "HAMORA's values",
    "about.values.answer":
      "VALUES: Simplicity, Empathy, Trust, Innovation and Hospitality. These principles guide how we build product, serve customers and relate to the market.",

    // CTA FINAL
    "cta.badge": "Start today",
    "cta.title": "Transform your hotel's maintenance with HAMORA",
    "cta.text":
      "Try our maintenance management platform free for 30 days and discover how easy it is to improve your facilities and increase guest satisfaction. Don’t wait: join the hotels that have already modernized their maintenance management.",
    "cta.button": "Start my 30-day trial",

    // FORM
    "form.title": "Fill in your details and talk to HAMORA",
    "form.description":
      "Tell us about your hotel and how maintenance is done today. Our team will contact you to understand your context and show how the platform can help.",
    "form.firstName": "First name",
    "form.lastName": "Last name",
    "form.phone": "Phone",
    "form.email": "Email",
    "form.company": "Company name",
    "form.role": "Role",
    "form.teamSize": "Team size",
    "form.need": "Describe your needs",
    "form.button": "Send message",

    // FOOTER
    "footer.resources.title": "Resources",
    "footer.resources.partners": "Hotel partners",
    "footer.resources.about": "About HAMORA",
    "footer.resources.features": "Platform features",
    "footer.resources.benefits": "Benefits",

    "footer.company.title": "Company",
    "footer.company.contactTeam": "Talk to the team",
    "footer.company.story": "Our story",

    "footer.social.title": "Social media",

    "footer.copyright": "© 2024 HAMORA",
    "footer.privacy": "Privacy policy",
    "footer.terms": "Terms of use",
  },

  // =================== ESPAÑOL (ES) ===================
  es: {
    // HEADER
    "header.home": "Inicio",
    "header.benefits": "Beneficios",
    "header.features": "Recursos",
    "header.partners": "Hoteles",
    "header.about": "Sobre HAMORA",
    "header.contactCta": "Hable con nuestro equipo",

    // HERO
    "hero.badge": "Plataforma de gestión de mantenimiento para hoteles",
    "hero.title": "Mantenimiento al día, huéspedes siempre satisfechos.",
    "hero.descriptionRest":
      "centraliza y automatiza todo el mantenimiento de su hotel en un solo lugar, evitando imprevistos y garantizando una experiencia impecable para los huéspedes.",
    "hero.cta": "Pruebe gratis durante 30 días",

    // COUNTERS
    "counters.title": "Resultados de HAMORA en operaciones reales de hotelería",
    "counters.card1.text": "Incidencias de mantenimiento gestionadas",
    "counters.card2.text": "Ítems registrados y rastreados",
    "counters.card3.text": "Lugares monitorizados por los clientes",
    "counters.card4.text": "Tasa media de órdenes de servicio completadas",

    // BENEFITS
    "benefits.title": "Nuestros principales beneficios",
    "benefits.subtitle":
      "Centralice todo el mantenimiento en un solo lugar, evitando sorpresas desagradables para usted y sus huéspedes.",

    "benefits.item1.title": "Ahorre tiempo y recursos",
    "benefits.item1.text":
      "Simplifique el proceso de gestión de mantenimiento en un único panel. Reduzca costos innecesarios identificando y resolviendo problemas más rápido.",

    "benefits.item2.title": "Mantenga sus instalaciones en su mejor estado",
    "benefits.item2.text":
      "Programar tareas de mantenimiento preventivo para evitar fallas antes de que ocurran y seguir el estado de cada equipo en tiempo real.",

    "benefits.item3.title": "Garantice la satisfacción de sus huéspedes",
    "benefits.item3.text":
      "Evite interrupciones inesperadas durante la estadía, ofrezca un entorno cómodo y seguro y refuerce la reputación de su hotel en el mercado.",

    "benefits.item4.title": "Equipo más productivo",
    "benefits.item4.text":
      "Organice responsabilidades, siga el estado de las tareas y dé visibilidad a todo el equipo de mantenimiento.",

    "benefits.item5.title": "Gestión centralizada",
    "benefits.item5.text":
      "Tenga una visión completa de las demandas del hotel, evitando hojas de cálculo dispersas, pizarras físicas y pérdida de información.",

    "benefits.item6.title": "Decisiones basadas en datos",
    "benefits.item6.text":
      "Siga los historiales, entienda dónde están los mayores costos y planifique las inversiones de forma estratégica.",

    // FEATURES
    "features.title": "Principales recursos de la plataforma",

    "features.monitoring.badge": "Monitoreo en tiempo real",
    "features.monitoring.title":
      "Vea el estado de sus instalaciones en un solo panel",
    "features.monitoring.text":
      "Supervise todas las instalaciones y equipos del hotel en tiempo real. Reciba alertas sobre problemas urgentes y actúe rápido para evitar impactos en la experiencia del huésped.",

    "features.scheduling.badge": "Programación inteligente de tareas",
    "features.scheduling.title":
      "Planifique el mantenimiento preventivo con anticipación",
    "features.scheduling.text":
      "Cree planes de mantenimiento preventivo y programe tareas de forma eficiente. Evite fallas en equipos críticos con recordatorios y tareas recurrentes.",

    "features.history.badge": "Historial detallado",
    "features.history.title": "Tenga el historial completo de cada equipo",
    "features.history.text":
      "Consulte el historial completo de mantenimiento de cada equipo e instalación. Utilice estos datos para tomar decisiones estratégicas sobre inversiones, sustituciones y prioridades.",

    // BRANDS
    "brands.badge": "Hoteles que confían en HAMORA",
    "brands.title":
      "Únase a los hoteles que ya profesionalizaron el mantenimiento",
    "brands.text":
      "Aquí están algunos socios que ya utilizan HAMORA y refuerzan la confianza en la solución. La plataforma fue creada especialmente para el sector hotelero y evoluciona junto con las necesidades de la hotelería brasileña.",
    "brands.button": "Quiero ser parte",

    // ABOUT
    "about.badge": "Sobre HAMORA",
    "about.title": "Innovación en mantenimiento para la hotelería brasileña",

    "about.who.question": "¿Quién es HAMORA?",
    "about.who.part1":
      "HAMORA es una turistech de Alagoas creada con el propósito de llevar innovación y tecnología al sector hotelero. En una región que es destino de vacaciones para miles de personas, tenía todo el sentido que surgiera una tecnología local para impulsar un sector tan prometedor.",
    "about.who.part2":
      "La startup participó en varios desafíos y programas de innovación, como InovAtiva, Turistech Hub, Startup NE, entre otros. En 2022 fue elegida la startup del año por la Secretaría de Tecnología del Estado de Alagoas y finalista del Demoday realizado por la misma. En 2023 obtuvo el 2º lugar en el programa de innovación del BNB (VUMBORA), además de otros reconocimientos.",

    "about.vision.question": "Visión de HAMORA",
    "about.vision.answer":
      "VISIÓN: Ser la principal herramienta de gestión de la hotelería de Brasil.",

    "about.mission.question": "Misión de HAMORA",
    "about.mission.answer":
      "MISIÓN: Existimos para que la hotelería brasileña sea referencia mundial en gestión de mantenimiento.",

    "about.values.question": "Valores de HAMORA",
    "about.values.answer":
      "VALORES: Simplicidad, Empatía, Confianza, Innovación y Hospitalidad. Estos principios guían cómo construimos el producto, atendemos a los clientes y nos relacionamos con el mercado.",

    // CTA FINAL
    "cta.badge": "Comience hoy",
    "cta.title": "Transforme el mantenimiento de su hotel con HAMORA",
    "cta.text":
      "Pruebe nuestra plataforma de gestión de mantenimiento gratis durante 30 días y descubra lo fácil que es elevar la calidad de sus instalaciones y la satisfacción de sus huéspedes. No pierda tiempo: únase a los hoteles que ya modernizaron la gestión de mantenimiento.",
    "cta.button": "Quiero probar 30 días",

    // FORM
    "form.title": "Complete sus datos y hable con HAMORA",
    "form.description":
      "Cuéntenos sobre su hotel y cómo se realiza el mantenimiento hoy. Nuestro equipo se pondrá en contacto para entender su realidad y mostrar cómo la plataforma puede ayudar.",
    "form.firstName": "Nombre",
    "form.lastName": "Apellido",
    "form.phone": "Teléfono",
    "form.email": "Correo electrónico",
    "form.company": "Nombre de la empresa",
    "form.role": "Cargo",
    "form.teamSize": "Tamaño del equipo",
    "form.need": "Describa su necesidad",
    "form.button": "Enviar mensaje",

    // FOOTER
    "footer.resources.title": "Recursos",
    "footer.resources.partners": "Hoteles socios",
    "footer.resources.about": "Sobre HAMORA",
    "footer.resources.features": "Recursos de la plataforma",
    "footer.resources.benefits": "Beneficios",

    "footer.company.title": "Empresa",
    "footer.company.contactTeam": "Hable con el equipo",
    "footer.company.story": "Nuestra historia",

    "footer.social.title": "Redes sociales",

    "footer.copyright": "© 2024 HAMORA",
    "footer.privacy": "Política de privacidad",
    "footer.terms": "Términos de uso",
  },
};
