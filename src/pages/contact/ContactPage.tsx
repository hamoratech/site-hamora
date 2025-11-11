// src/pages/contact/ContactPage.tsx
import React, { useEffect, useState } from "react";

type WindowWithAOS = Window & {
  AOS?: {
    init: () => void;
  };
};

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const win = window as WindowWithAOS;
      win.AOS?.init();
    }
  }, []);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const response = await fetch("https://formspree.io/f/xqawkeoj", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setShowSuccessModal(true);
      } else {
        alert("Não foi possível enviar. Tente novamente em instantes.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert(
        "Não foi possível enviar. Verifique sua conexão e tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* HERO DA PÁGINA DE CONTATO */}
      <section className="contact-hero sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="heading6-w">
                <span className="span2" data-aos="fade-left">
                  Fale com o time HAMORA
                </span>
                <h2 className="text-anime-style-3">
                  Vamos levar a HAMORA para o seu hotel – em qualquer lugar do
                  mundo.
                </h2>
                <div className="space16" />
                <p data-aos="fade-left" data-aos-duration={800}>
                  Preencha o formulário, fale diretamente com nosso time via
                  WhatsApp ou Telegram e tire todas as dúvidas sobre módulos,
                  implantação e como adaptar a plataforma à realidade do seu
                  hotel.
                </p>

                <div className="contact-hero-actions">
                  <a href="/#hero" className="contact-back-btn">
                    <span className="contact-back-btn__icon">
                      <i className="fa-solid fa-arrow-left" />
                    </span>
                    <span className="contact-back-btn__text">
                      Voltar para a página inicial
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL: INFO + BOTÕES RÁPIDOS + FORM */}
      <section className="contact-content sp">
        <div className="container">
          <div className="row align-items-start">
            {/* LADO ESQUERDO: INFO / MÓDULOS / WHATS & TELEGRAM */}
            <div className="col-lg-5">
              {/* CARD CONTATO RÁPIDO */}
              <div
                className="contact-card contact-card--info"
                data-aos="zoom-in"
              >
                <h3>Atendimento comercial</h3>
                <p>
                  Nosso time fala português, inglês e espanhol. Podemos
                  apresentar a plataforma, entender seus processos de
                  manutenção, mostrar módulos e fazer uma proposta adaptada ao
                  porte do seu hotel.
                </p>

                <div className="contact-quick-actions">
                  <a
                    href="https://wa.me/5582996832677?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20HAMORA."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn contact-btn--whatsapp"
                  >
                    <span className="contact-btn__icon">
                      <i className="fa-brands fa-whatsapp" />
                    </span>
                    <span className="contact-btn__text">Falar no WhatsApp</span>
                  </a>

                  <a
                    href="https://t.me/hamoratech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn contact-btn--telegram"
                  >
                    <span className="contact-btn__icon">
                      <i className="fa-brands fa-telegram" />
                    </span>
                    <span className="contact-btn__text">Falar no Telegram</span>
                  </a>
                </div>
              </div>

              {/* CARD MÓDULOS / VISÃO GERAL */}
              <div
                className="contact-card contact-card--modules"
                data-aos="zoom-in"
                data-aos-duration={900}
              >
                <h4>Principais módulos da HAMORA</h4>
                <ul className="contact-modules-list">
                  <li>
                    <strong>Manutenção corretiva</strong>
                    <span>
                      Abertura, gestão e acompanhamento de ocorrências em tempo
                      real.
                    </span>
                  </li>
                  <li>
                    <strong>Manutenção preventiva</strong>
                    <span>
                      Planos, cronogramas e alertas para evitar falhas antes de
                      acontecerem.
                    </span>
                  </li>
                  <li>
                    <strong>Gestão de ativos e inventário</strong>
                    <span>
                      Itens cadastrados, histórico de intervenções e visão do
                      ciclo de vida.
                    </span>
                  </li>
                  <li>
                    <strong>Indicadores e relatórios</strong>
                    <span>
                      Taxa de conclusão, gargalos, custo por ativo e visão
                      gerencial.
                    </span>
                  </li>
                  <li>
                    <strong>Multilíngue e multiunidade</strong>
                    <span>
                      Ideal para redes e operações em diferentes países ou
                      regiões.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* LADO DIREITO: FORMULÁRIO */}
            <div className="col-lg-7">
              <div
                className="contact-card contact-card--form"
                data-aos="fade-left"
              >
                <h3>Envie uma mensagem para o nosso time</h3>
                <p>
                  Quanto mais contexto você compartilhar sobre o seu hotel e
                  operação de manutenção, mais precisa será nossa sugestão de
                  módulos e implementação.
                </p>

                <form className="multi-input-form" onSubmit={handleFormSubmit}>
                  <input
                    type="hidden"
                    name="_subject"
                    value="Contato pela página de contato da HAMORA"
                  />

                  <div className="input-row">
                    <input type="text" name="firstName" placeholder="Nome" />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Sobrenome"
                    />
                  </div>

                  <div className="input-row">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="WhatsApp (com DDI/DDD)"
                    />
                  </div>

                  <div className="input-row">
                    <input
                      type="text"
                      name="company"
                      placeholder="Nome do hotel / rede"
                    />
                    <input
                      type="text"
                      name="country"
                      placeholder="País / Cidade"
                    />
                  </div>

                  <div className="input-row">
                    <input
                      type="text"
                      name="teamSize"
                      placeholder="Tamanho da equipe de manutenção"
                    />
                  </div>

                  <div className="input-row">
                    <textarea
                      name="need"
                      placeholder="Conte um pouco sobre os desafios atuais de manutenção e quais módulos você tem interesse em conhecer."
                    />
                  </div>

                  <div className="button">
                    <button
                      type="submit"
                      className="theme-btn9"
                      disabled={isSubmitting}
                    >
                      <span className="tb8">
                        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                        <span className="arrow">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL DE SUCESSO (reaproveitando o estilo que você já usa) */}
      {showSuccessModal && (
        <div
          className="form-modal-backdrop"
          onClick={() => setShowSuccessModal(false)}
        >
          <div className="form-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="form-modal-close"
              onClick={() => setShowSuccessModal(false)}
            >
              <i className="fa-solid fa-xmark" />
            </button>

            <div className="form-modal-icon">
              <svg viewBox="0 0 52 52" className="checkmark" aria-hidden="true">
                <circle
                  className="checkmark-circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark-check"
                  fill="none"
                  d="M14 27l7 7 17-17"
                />
              </svg>
            </div>

            <h3>Obrigado!</h3>
            <p>Logo mais entraremos em contato.</p>

            <button
              type="button"
              className="theme-btn8"
              onClick={() => setShowSuccessModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
