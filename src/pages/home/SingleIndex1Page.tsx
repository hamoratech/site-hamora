import React, { useEffect } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import LanguageSelect from "../../components/LanguageSelect";

type WindowWithAOS = Window & {
  AOS?: {
    init: () => void;
  };
};

export const SingleIndex1Page: React.FC = () => {
  const { t } = useI18n();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const win = window as WindowWithAOS;
      win.AOS?.init();
    }
  }, []);

  const handleMobileLinkClick = () => {
    if (typeof document === "undefined") return;

    const sidebar = document.querySelector(
      ".mobile-sidebar"
    ) as HTMLElement | null;

    // se o tema estiver usando alguma classe no overlay também, limpamos
    const overlay = document.querySelector(
      ".mobile-sidebar-overlay"
    ) as HTMLElement | null;

    sidebar?.classList.remove("mobile-menu-active");
    overlay?.classList.remove("mobile-menu-active");
  };

  return (
    <>
      {/* ===== Scroll-top circle ===== */}
      <div className="paginacontainer">
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </div>

      {/* ===== Preloader ===== */}
      <div className="overlay flex cac vac preloader-parent">
        <div>
          <div className="loader preloader flex vac">
            <svg width="200" height="200">
              <circle
                className="background"
                cx="90"
                cy="90"
                r="80"
                transform="rotate(-90, 100, 90)"
              />
              <circle
                className="outer"
                cx="90"
                cy="90"
                r="80"
                transform="rotate(-90, 100, 90)"
              />
            </svg>
            <span className="circle-background" />
            <span className="logo animated fade-in">
              <img src="/img/logo/header-logo1.png" alt="" />
            </span>
          </div>
        </div>
      </div>

      {/* ===== (Opcional) Header simples para âncoras ===== */}
      <header>
        {/* HEADER DESKTOP */}
        <div
          className="header-area header-area6 header-area-all d-none d-lg-block"
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-elements">
                  <div className="site-logo home1-site-logo">
                    <a href="#hero">
                      <img src="/img/logo/header-logo6.png" alt="" />
                    </a>
                  </div>

                  <div className="main-menu-ex main-menu-ex1">
                    <ul id="list-example">
                      <li>
                        <a href="#hero">{t("header.home")}</a>
                      </li>
                      <li>
                        <a href="#editing">{t("header.benefits")}</a>
                      </li>
                      <li>
                        <a href="#feature">{t("header.features")}</a>
                      </li>
                      <li>
                        <a href="#brands">{t("header.partners")}</a>
                      </li>
                      <li>
                        <a href="#faq">{t("header.about")}</a>
                      </li>
                    </ul>
                  </div>

                  <div className="header2-buttons">
                    <LanguageSelect className="lang-select" />

                    <a href="#contato" className="header-btn23 btn-contact-cta">
                      <span className="btn-contact-cta__label">
                        {t("header.contactCta")}
                      </span>
                      <span className="btn-contact-cta__icon">
                        <i className="fa-solid fa-message" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HEADER MOBILE (TOPO) */}
        <div className="mobile-header mobile-header-6 d-block d-lg-none">
          <div className="container">
            <div className="col-12">
              <div className="mobile-header-elements">
                <div className="mobile-logo">
                  <a href="#hero">
                    <img src="/img/logo/header-logo6.png" alt="" />
                  </a>
                </div>

                <div className="mobile-nav-icon ham-menu">
                  <i className="fa-solid fa-bars-staggered" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MENU MOBILE (SIDEBAR) */}
        <div className="mobile-sidebar">
          <div className="logo-m">
            <a href="#hero" onClick={handleMobileLinkClick}>
              <img src="/img/logo/header-logo1.png" alt="" />
            </a>
          </div>

          <LanguageSelect className="lang-select lang-select--sidebar" />

          <div className="menu-close">
            <i className="fa-solid fa-xmark" />
          </div>

          <div className="mobile-nav">
            <ul id="mobile-menu">
              <li>
                <a href="#hero" onClick={handleMobileLinkClick}>
                  {t("header.home")}
                </a>
              </li>
              <li>
                <a href="#editing" onClick={handleMobileLinkClick}>
                  {t("header.benefits")}
                </a>
              </li>
              <li>
                <a href="#feature" onClick={handleMobileLinkClick}>
                  {t("header.features")}
                </a>
              </li>
              <li>
                <a href="#brands" onClick={handleMobileLinkClick}>
                  {t("header.partners")}
                </a>
              </li>
              <li>
                <a href="#faq" onClick={handleMobileLinkClick}>
                  {t("header.about")}
                </a>
              </li>
              <li></li>
            </ul>

            <div className="mobile-button">
              <a
                href="#contato"
                className="header-btn23 btn-contact-cta"
                onClick={handleMobileLinkClick}
              >
                <span className="btn-contact-cta__label">
                  {t("header.contactCta")}
                </span>
                <span className="btn-contact-cta__icon">
                  <i className="fa-solid fa-message" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mobile-sidebar-overlay" />
      </header>

      {/* ===== HERO ===== */}

      <div className="hero-area6" id="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="main-heading">
                <span
                  className="span"
                  data-aos="fade-left"
                  data-aos-duration="700"
                >
                  <img src="/img/icons/main-span6.png" alt="" /> Plataforma de
                  gerenciamento de manutenção para hotéis
                </span>
                <h1 className="text-anime-style-3">
                  Manutenção em dia, hóspedes sempre satisfeitos.
                </h1>
                <div className="space16" />
                <p data-aos="fade-right" data-aos-duration="700">
                  A <strong>HAMORA</strong> centraliza e automatiza toda a
                  manutenção do seu hotel em um só lugar, evitando imprevistos e
                  garantindo uma experiência impecável para seus hóspedes.
                </p>
                <div className="space30" />
                <div
                  className="buttons"
                  data-aos="fade-right"
                  data-aos-duration="900"
                >
                  <a href="#cta" className="theme-btn8">
                    <span className="tb8">Teste grátis por 30 dias</span>
                    <span className="tb8-icon">
                      <span className="icon">
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </span>
                  </a>
                </div>

                <div className="master-card master-card6">
                  <div className="single-master6">
                    <div className="clients clients6">
                      <img src="/img/elements/client5.svg" alt="" />
                    </div>
                    <div className="space16" />
                  </div>

                  <div className="single-master6">
                    <div className="clients clients6">
                      <img src="/img/elements/hero6-review.svg" alt="" />
                    </div>
                    <div className="space16" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div
                className="images-all"
                data-aos="zoom-out"
                data-aos-duration="800"
              >
                <div className="image1">
                  <img src="/img/hero/hero6-img1.png" alt="" />
                </div>
                <div className="image2 animate1">
                  <img src="/img/hero/hero6-img2.png" alt="" />
                </div>
                <div className="image3 shape-animaiton2">
                  <img src="/img/hero/hero6-img3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== HERO AREA END ======= */}

      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-offset="0"
        className="scrollspy-example"
        tabIndex={0}
      >
        {/* ===== COUNTERS AREA START ======= */}
        <div className="counters6 sp" id="counters">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 m-auto text-center">
                <div className="heading6">
                  <h3 className="text-anime-style-3">
                    Resultados da HAMORA em operações reais de hotelaria
                  </h3>
                </div>
              </div>
            </div>
            <div className="space30" />
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="counter-box box1"
                  data-aos="zoom-out"
                  data-aos-duration="700"
                >
                  <h2>
                    <span className="counter">44.100</span>+
                  </h2>
                  <p>Ocorrências de manutenção gerenciadas</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div
                  className="counter-box box2"
                  data-aos="zoom-out"
                  data-aos-duration="900"
                >
                  <h2>
                    <span className="counter">175.000</span>+
                  </h2>
                  <p>Itens cadastrados e rastreados</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div
                  className="counter-box box3"
                  data-aos="zoom-out"
                  data-aos-duration="1100"
                >
                  <h2>
                    <span className="counter">5.000</span>+
                  </h2>
                  <p>Locais monitorados pelos clientes</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div
                  className="counter-box box4"
                  data-aos="zoom-out"
                  data-aos-duration="1200"
                >
                  <h2>
                    <span className="counter">91</span>%
                  </h2>
                  <p>Taxa média de O.S. concluídas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===== COUNTERS AREA END ======= */}

        {/* ===== BENEFÍCIOS PRINCIPAIS ===== */}

        <div className="editing6 sp" id="editing">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="heading6">
                  <span className="title">
                    <img src="/img/icons/span-image6.png" alt="" />
                  </span>
                  <h2 className="text-anime-style-3">
                    NOSSOS PRINCIPAIS BENEFÍCIOS{" "}
                  </h2>
                  <div className="space16" />
                  <p>
                    Centralize toda a manutenção em um único lugar, evitando
                    surpresas desagradáveis para você e para seus hóspedes.
                  </p>
                </div>
              </div>
            </div>

            <div className="space30" />
            <div className="row">
              {/* 1. Poupe tempo e recursos */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="zoom-in-up"
                data-aos-duration="600"
              >
                <div className="editing-box">
                  <div className="icon">
                    <img src="/img/icons/editing6-icon1.svg" alt="" />
                  </div>
                  <div className="space16" />
                  <div className="heading6">
                    <h4>Poupe tempo e recursos</h4>
                    <div className="space16" />
                    <p>
                      Simplifique o processo de gerenciamento de manutenção em
                      um único painel. Reduza custos desnecessários
                      identificando e resolvendo problemas de forma mais rápida.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Instalações sempre em ótimo estado */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="zoom-in-up"
                data-aos-duration="800"
              >
                <div className="editing-box">
                  <div className="icon">
                    <img src="/img/icons/editing6-icon2.svg" alt="" />
                  </div>
                  <div className="space16" />
                  <div className="heading6">
                    <h4>Mantenha suas instalações sempre no melhor estado</h4>
                    <div className="space16" />
                    <p>
                      Agende tarefas de manutenção preventiva para evitar falhas
                      antes que aconteçam e acompanhe o estado de cada
                      equipamento em tempo real.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Satisfação dos hóspedes */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <div className="editing-box">
                  <div className="icon">
                    <img src="/img/icons/editing6-icon3.svg" alt="" />
                  </div>
                  <div className="space16" />
                  <div className="heading6">
                    <h4>Garanta a satisfação dos seus hóspedes</h4>
                    <div className="space16" />
                    <p>
                      Evite interrupções inesperadas durante a estadia, ofereça
                      um ambiente confortável e seguro e fortaleça a reputação
                      do seu hotel no mercado.
                    </p>
                  </div>
                </div>
              </div>

              {/* caixas extras – reforços de benefício, mesma estrutura */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="zoom-in-up"
                data-aos-duration="600"
              >
                <div className="editing-box">
                  <div className="icon">
                    <img src="/img/icons/editing6-icon4.svg" alt="" />
                  </div>
                  <div className="space16" />
                  <div className="heading6">
                    <h4>Equipe mais produtiva</h4>
                    <div className="space16" />
                    <p>
                      Organize responsabilidades, acompanhe o status das tarefas
                      e dê visibilidade para toda a equipe de manutenção.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="zoom-in-up"
                data-aos-duration="800"
              >
                <div className="editing-box">
                  <div className="icon">
                    <img src="/img/icons/editing6-icon5.svg" alt="" />
                  </div>
                  <div className="space16" />
                  <div className="heading6">
                    <h4>Gestão centralizada</h4>
                    <div className="space16" />
                    <p>
                      Tenha uma visão completa das demandas do hotel, evitando
                      planilhas soltas, quadros físicos e perda de informação.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <div className="editing-box">
                  <div className="icon">
                    <img src="/img/icons/editing6-icon6.svg" alt="" />
                  </div>
                  <div className="space16" />
                  <div className="heading6">
                    <h4>Decisões com base em dados</h4>
                    <div className="space16" />
                    <p>
                      Acompanhe históricos, entenda onde estão os maiores gastos
                      e planeje investimentos de forma estratégica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== BENEFÍCIOS PRINCIPAIS END ======= */}

        {/* ===== RECURSOS PRINCIPAIS ======= */}

        <div className="features6 sp" id="feature">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="heading6">
                  <span className="title">
                    <img src="/img/icons/span-image6.png" alt="" />
                  </span>
                  <h2 className="text-anime-style-3">PRINCIPAIS RECURSOS</h2>
                </div>
              </div>
            </div>

            {/* Monitoramento em tempo real */}
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="main-image right60"
                  data-aos="zoom-out"
                  data-aos-duration="800"
                >
                  <img src="/img/others/features6-img1.png" alt="" />
                </div>
              </div>
              <div className="col-1" />
              <div className="col-lg-5">
                <div className="heading6 features-heading">
                  <span
                    className="span3"
                    data-aos="fade-left"
                    data-aos-duration="700"
                  >
                    Monitoramento em tempo real
                  </span>
                  <h3 className="text-anime-style-3">
                    Veja o estado das suas instalações em um só painel
                  </h3>
                  <div className="space16" />
                  <p data-aos="fade-left" data-aos-duration="900">
                    Acompanhe todas as instalações e equipamentos do hotel em
                    tempo real. Receba alertas sobre problemas emergenciais e
                    tome decisões rápidas para evitar impacto na experiência do
                    hóspede.
                  </p>
                </div>
              </div>
            </div>

            {/* Agendamento de tarefas inteligente */}
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="heading6 features-heading">
                  <span
                    className="span3"
                    data-aos="fade-right"
                    data-aos-duration="700"
                  >
                    Agendamento de tarefas inteligente
                  </span>
                  <h3 className="text-anime-style-3">
                    Planeje manutenções preventivas com antecedência
                  </h3>
                  <div className="space16" />
                  <p data-aos="fade-right" data-aos-duration="900">
                    Crie planos de manutenção preventiva e agende tarefas de
                    forma eficiente. Evite falhas em equipamentos críticos ao
                    manter tudo sob controle com lembretes e recorrências
                    configuráveis.
                  </p>
                </div>
              </div>
              <div className="col-1" />
              <div className="col-lg-6">
                <div
                  className="main-image right60"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                >
                  <img src="/img/others/features6-img2.png" alt="" />
                </div>
              </div>
            </div>

            {/* Histórico de manutenção detalhado */}
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="main-image right60"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                >
                  <img src="/img/others/features6-img3.png" alt="" />
                </div>
              </div>
              <div className="col-1" />
              <div className="col-lg-5">
                <div className="heading6 features-heading">
                  <span
                    className="span3"
                    data-aos="fade-left"
                    data-aos-duration="700"
                  >
                    Histórico detalhado
                  </span>
                  <h3 className="text-anime-style-3">
                    Tenha o histórico completo de cada equipamento
                  </h3>
                  <div className="space16" />
                  <p data-aos="fade-left" data-aos-duration="900">
                    Consulte o histórico completo de manutenção de cada
                    equipamento e instalação. Use esses dados para fazer
                    análises e decisões estratégicas sobre investimentos,
                    substituições e prioridades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RECURSOS PRINCIPAIS END ======= */}

        {/* ===== ÁREA DO CLIENTE / LOGOS ======= */}

        <div className="brands-area6 sp" id="brands">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="heading6-w">
                  <span
                    className="span2"
                    data-aos="fade-left"
                    data-aos-duration="700"
                  >
                    Hotéis que confiam na HAMORA
                  </span>
                  <h2 className="text-anime-style-3">
                    Junte-se aos hotéis que já profissionalizaram a manutenção
                  </h2>
                  <div className="space16" />
                  <p data-aos="fade-left" data-aos-duration="900">
                    Mostre aqui as logomarcas dos hotéis que já utilizam a
                    HAMORA e reforçam a confiança na solução. A plataforma foi
                    criada especialmente para o setor hoteleiro e evolui junto
                    com as necessidades da hotelaria brasileira.
                  </p>
                  <div className="space30" />
                  <div data-aos="fade-left" data-aos-duration="1000">
                    <a href="#contato" className="theme-btn8">
                      <span className="tb8">
                        Quero fazer parte
                        <span className="arrow">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-1" />

              <div className="col-lg-6">
                {/* MANTIDO 100% IGUAL AO TEMPLATE ORIGINAL */}
                <div className="apps-images">
                  <div className="image1">
                    <img src="/img/bg/apps5-shape-bg.png" alt="" />
                    <div className="dot"></div>
                  </div>
                  <div className="image2">
                    <img src="/img/others/apps5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== ÁREA DO CLIENTE / LOGOS END ======= */}

        {/* ===== SOBRE A HAMORA (usando FAQ) ======= */}

        <div className="faq6 sp" id="faq">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 m-auto text-center">
                <div className="heading6">
                  <span className="span">Sobre a HAMORA</span>
                  <h2 className="text-anime-style-3">
                    Inovação em manutenção para a hotelaria brasileira
                  </h2>
                </div>

                <div className="space40" />

                <div className="accordion accordion1" id="accordionExample">
                  {/* Quem é a HAMORA */}
                  <div
                    className="accordion-item active"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Quem é a HAMORA?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        HAMORA é uma turistech alagoana criada com o propósito
                        de levar inovação e tecnologia para o setor hoteleiro.
                        Em uma região que é destino de férias de milhares de
                        pessoas, fazia todo sentido nascer uma tecnologia local
                        para impulsionar um setor tão promissor.
                        <br />
                        <br />A startup participou de diversos desafios e
                        programas de inovação, como InovAtiva, Turistech Hub,
                        Startup NE, entre outros. Em 2022, foi eleita a{" "}
                        <strong>startup do ano</strong> pela Secretaria de
                        Tecnologia do Estado de Alagoas e finalista do Demoday
                        realizado pela mesma. Em 2023, ficou em{" "}
                        <strong>2º lugar</strong> no programa de inovação do BNB
                        (VUMBORA), além de outros reconhecimentos.
                      </div>
                    </div>
                  </div>

                  {/* Visão */}
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Visão da HAMORA
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>VISÃO:</strong> Ser a principal ferramenta de
                        gerenciamento da hotelaria do Brasil.
                      </div>
                    </div>
                  </div>

                  {/* Missão */}
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-duration="900"
                  >
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Missão da HAMORA
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>MISSÃO:</strong> Existimos para que a hotelaria
                        brasileira seja referência mundial na gestão da
                        manutenção.
                      </div>
                    </div>
                  </div>

                  {/* Valores */}
                  <div
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Valores da HAMORA
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>VALORES:</strong> Simplicidade, Empatia,
                        Confiança, Inovação e Hospitalidade. Esses princípios
                        norteiam a forma como construímos produto, atendemos
                        clientes e nos relacionamos com o mercado.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SOBRE A HAMORA (usando FAQ) END ======= */}
      </div>

      {/* ===== CTA FINAL ======= */}

      <div className="cta6" id="cta">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="heading6-w">
                <span className="span">Comece hoje</span>
                <h2>Transforme a manutenção do seu hotel com a HAMORA</h2>
                <div className="space16" />
                <p>
                  Experimente nossa plataforma de gerenciamento de manutenção
                  gratuitamente por <strong>30 dias</strong> e descubra como é
                  simples elevar a qualidade das suas instalações e a satisfação
                  dos seus hóspedes. Não perca tempo: junte-se aos hotéis que já
                  modernizaram a gestão de manutenção.
                </p>
                <div className="space30" />
                <a href="#contato" className="theme-btn8">
                  <span className="tb8">
                    Quero testar por 30 dias
                    <span className="arrow">
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-6">
              <div className="cta6-images">
                <div className="image1">
                  <img src="/img/others/cta6-img.png" alt="" />
                </div>
                <div className="image2">
                  <img src="/img/shapes/cta6-shape.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CTA FINAL END ======= */}

      {/* ===== FOOTER AREA START ======= */}

      <div className="footer6 _relative">
        <div className="container bg">
          <div className="row">
            {/* COLUNA ESQUERDA - FORMULÁRIO / CONTATO */}
            <div className="col-lg-5">
              <div className="subscribe-area" id="contato">
                <h5>Preencha seus dados e fale com a HAMORA</h5>
                <p>
                  Conte pra gente sobre o seu hotel e como a manutenção é feita
                  hoje. Nosso time entra em contato para entender sua realidade
                  e mostrar como a plataforma pode ajudar.
                </p>

                <form className="multi-input-form" action="#" method="post">
                  <div className="input-row">
                    <input type="text" name="firstName" placeholder="Nome" />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Sobrenome"
                    />
                  </div>
                  <div className="input-row">
                    <input type="tel" name="phone" placeholder="Telefone" />
                    <input type="email" name="email" placeholder="E-mail" />
                  </div>
                  <div className="input-row">
                    <input
                      type="text"
                      name="company"
                      placeholder="Nome da empresa"
                    />
                    <input type="text" name="role" placeholder="Cargo" />
                  </div>
                  <div className="input-row">
                    <input
                      type="text"
                      name="teamSize"
                      placeholder="Tamanho da equipe"
                    />
                  </div>
                  <div className="input-row">
                    <textarea
                      name="need"
                      placeholder="Descreva sua necessidade"
                    />
                  </div>
                  <div className="button">
                    <button type="submit" className="theme-btn9">
                      <span className="tb8">
                        Enviar mensagem
                        <span className="arrow">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* COLUNA 2 */}
            <div className="col-lg col-md-6 col-12">
              <div className="single-footer-items">
                <h3>Recursos</h3>
                <ul className="menu-list">
                  <li>
                    <a href="#brands">Hotéis parceiros</a>
                  </li>
                  <li>
                    <a href="#faq">Sobre a HAMORA</a>
                  </li>
                  <li>
                    <a href="#feature">Recursos da plataforma</a>
                  </li>
                  <li>
                    <a href="#editing">Benefícios</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* COLUNA 3 */}
            <div className="col-lg col-md-6 col-12">
              <div className="single-footer-items">
                <h3>Empresa</h3>
                <ul className="menu-list">
                  <li></li>
                  <li>
                    <a href="#contato">Fale com o time</a>
                  </li>
                  <li>
                    <a href="#faq">Nossa história</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* COLUNA 4 - REDES SOCIAIS */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer-items">
                <h3>Redes sociais</h3>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space40" />

          {/* COPYRIGHT */}
          <div className="copyright-area">
            <div className="row align-items-center">
              <div className="col-md-5 col-12">
                <div className="logo">
                  <a href="#hero">
                    <img src="/img/logo/footer-logo6.png" alt="HAMORA" />
                  </a>
                </div>
              </div>
              <div className="col-md-7 col-12">
                <div className="coppyright text-right">
                  <a
                    href="https://hamorahotel.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    © 2024 HAMORA
                  </a>
                  <a href="#">Política de privacidade</a>
                  <a href="#">Termos de uso</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===== FOOTER AREA END ======= */}

      {/* ===== FOOTER AREA END ======= */}
    </>
  );
};

export default SingleIndex1Page;
