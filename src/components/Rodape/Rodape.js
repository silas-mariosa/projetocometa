import React from "react";
import { useLanguage } from "../../LanguageContext";
import styles from "./Rodape.module.css";
import Logo from "../../img/Logo.png";
import IconesSocial from "components/IconesSocial/IconesSocial";

export default function Rodape() {
  const { language } = useLanguage();

  // Defina as traduções com base no idioma
  const translations = {
    "en-US": {
      text: `We are a Virtual Airline Company that offers high-level training based on real manuals, completely free, and of course, a lot of fun in flight simulations. Complete fleet for FSX, P3D, XPlane, and MSFS. We are certified on the IVAO and VATSIM networks and also use the POSCON network. Become a Gold Pilot!`,
      mission: "OUR MISSION",
      vision: "OUR VISION",
      discord: "OUR DISCORD",
      followUs: "Follow us on Social Media",
    },
    "pt-BR": {
      text: `Somos uma Companhia Aérea Virtual que oferece treinamento de alto nível com base em manuais reais, completamente gratuito e, claro, muita diversão em simulações de voo. Frota completa para FSX, P3D, XPlane e MSFS. Somos homologados nas redes IVAO e VATSIM e também utilizamos a rede POSCON. Se torne um Piloto Gold!`,
      mission: "NOSSA MISSÃO",
      vision: "NOSSA VISÃO",
      discord: "NOSSO DISCORD",
      followUs: "Siga-nos pelas Redes Sociais",
    },
  };

  // Obtenha as traduções com base no idioma atual
  const t = translations[language];

  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <div className={styles.divUm}>
          <div>
            <img className={styles.logo} src={Logo} alt="Logo"></img>
          </div>
          <p className={styles.texto}>{t.text}</p>
          <p className={styles.siga}>{t.followUs}</p>
          <IconesSocial></IconesSocial>
        </div>
        <div className={styles.divDois}>
          <p className={styles.balao}>{t.mission}</p>
          <p className={styles.texto}>
            Ser uma VA referência em tudo o que faz. Que propicie um ambiente
            amistoso, cooperativo e sobretudo acolhedor.
          </p>
          <p className={styles.balao}>{t.vision}</p>
        </div>
        <div className={styles.divTres}>
          <p className={styles.balao}>{t.discord}</p>
          <iframe
            src="https://discord.com/widget?id=941487557500342312&theme=dark"
            width="350"
            height="350"
            allowTransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            title="Discord Widget"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
