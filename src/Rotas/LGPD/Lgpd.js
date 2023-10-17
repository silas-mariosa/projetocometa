import React from "react";
import styled from "styled-components";
import { useLanguage } from "../../LanguageContext";
import BannerTopoPagina from "components/BannerTopoPagina/BannerTopoPagina";
import image from "../../img/NossoDiscord.png"

export default function Lgpd() {
  const { language } = useLanguage();

  // Defina as traduções diretamente no componente
  const translations = {
    "en-US": {
      pageTitle: "General Data Protection Regulation",
      privacyPolicyTitle: "Privacy Policy (LGPD)",
      dataCoveredTitle: "What Data Is Covered?",
      dataCoveredText:
        "Gold Virtual Airlines stores personal data, which is understood as data that allows the identification or identification of a natural person. GVA collects this data for use in the services offered by the company.",
      momentOfCollectionTitle: "When Does Gold Virtual Airlines Collect Personal Data?",
      momentOfCollectionText: "At the time of candidate registration.",
      otherDataTitle: "What Other Data May Be Collected?",
      otherDataText:
        "Online Flight Data such as Departure, Arrival, Route used, as well as data collected in the GOLDCARS system that can be checked in the log.",
      dataSharingTitle: "How Is Personal Data Shared?",
      dataSharingText:
        "We do not publicly share any personal data. Basic personal data such as the user's name, IVAO VID, and VATSIM CID data are used by Gold and the mentioned Online Networks and may be displayed on the VA, VATSIM, and IVAO websites.",
      rightsTitle: "What Are the Rights of Data Subjects Regarding Their Personal Data?",
      rightsText:
        "The data subject has the following rights in relation to their data, to the extent that these rights are recognized by applicable laws:",
      securityTitle: "How Is the Security of Personal Data Ensured?",
      securityText:
        "Personal data is protected against unauthorized access, processing, or unlawful disclosure.",
      retentionTitle: "How Long Are Data Retained?",
      retentionText:
        "The data may be kept in our database without a set time, under the same security and protection mechanisms described in the 'How is the security of personal data ensured?' section.",
    },
    "pt-BR": {
      pageTitle: "Lei Geral de Proteção de Dados",
      privacyPolicyTitle: "Aviso de Privacidade (LGPD)",
      dataCoveredTitle: "Quais são os dados abrangidos?",
      dataCoveredText:
        "A Gold Virtual Airlines realiza o armazenamento de dados pessoais, os quais são entendidos como dados que permitem identificar ou tornar identificável uma pessoa natural. A GVA realiza a coleta destes dados para o uso nos serviços oferecidos pela mesma.",
      momentOfCollectionTitle: "Em que momento a Gold Virtual Airlines coleta dados pessoais?",
      momentOfCollectionText:
        "No momento da inscrição do candidato.",
      otherDataTitle: "Quais outros dados podem ser eventualmente coletados?",
      otherDataText:
        "Dados de Vôo On-Line como Partida, Chegada, Rota utilizada, bem como os dados coletados no sistema GOLDCARS que podem ser conferidos no log do mesmo.",
      dataSharingTitle: "Como são compartilhados os dados pessoais?",
      dataSharingText:
        "Não compartilhamos publicamente nenhum dado pessoal. Dados pessoais básicos como o nome do usuário, VID IVAO e CID VATSIM os dados são utilizados pela Gold e pelas Redes Online citadas podendo ser apresentados no site da VA, VATSIM e IVAO.",
      rightsTitle: "Quais são os direitos dos titulares em relação a seus dados pessoais?",
      rightsText:
        "O titular do dado pessoal possui os seguintes direitos em relação aos seus dados, na medida em que tais direitos sejam reconhecidos pelas leis aplicáveis:",
      securityTitle: "Como a segurança dos dados pessoais é garantida?",
      securityText:
        "Os dados pessoais são protegidos contra o acesso não autorizado, o processamento ou a divulgação ilegal.",
      retentionTitle: "Por quanto tempo os dados são retidos?",
      retentionText:
        "Os dados poderão ser mantidos na nossa base sem tempo determinado, sob os mesmos mecanismos de segurança e proteção descritos na sessão 'Como a segurança dos dados pessoais é garantida'.",
    },
  };

  const currentTranslations = translations[language];

  const PrivacyPolicyContainer = styled.div`
    background-color: #f6f1e4;
    padding: 5% 20%;
  `;

  const SectionTitle = styled.h2`
    color: #f7d400;
    margin: 10px 0;
  `;

  return (
    <>
      <BannerTopoPagina image={image} titulo={currentTranslations.privacyPolicyTitle} />
      <PrivacyPolicyContainer>
        <SectionTitle>{currentTranslations.privacyPolicyTitle}</SectionTitle>
        <p>{currentTranslations.dataCoveredText}</p>
        <SectionTitle>{currentTranslations.momentOfCollectionTitle}</SectionTitle>
        <p>{currentTranslations.momentOfCollectionText}</p>
        <SectionTitle>{currentTranslations.otherDataTitle}</SectionTitle>
        <p>{currentTranslations.otherDataText}</p>
        <SectionTitle>{currentTranslations.dataSharingTitle}</SectionTitle>
        <p>{currentTranslations.dataSharingText}</p>
        <SectionTitle>{currentTranslations.rightsTitle}</SectionTitle>
        <p>{currentTranslations.rightsText}</p>
        <SectionTitle>{currentTranslations.securityTitle}</SectionTitle>
        <p>{currentTranslations.securityText}</p>
        <SectionTitle>{currentTranslations.retentionTitle}</SectionTitle>
        <p>{currentTranslations.retentionText}</p>
      </PrivacyPolicyContainer>
    </>
  );
}
