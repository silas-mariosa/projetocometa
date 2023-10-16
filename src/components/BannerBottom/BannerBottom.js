import React from "react";
import { useLanguage } from "../../LanguageContext"; // Certifique-se de importar o contexto de idioma
import styles from "./BannerBottom.module.css";
import image from "../../img/bannerBottom.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function BannerBottom() {
  const { language } = useLanguage(); // Obtém o idioma atual do contexto

  // Define as traduções com base no idioma
  const translations = {
    "en-US": {
      feedback:
        "In search of aviation videos on the internet, I found COMETA. After registration and an interview, I became an Aspirant, and after studying with COMETA's wonderful, easy, and free material, I became a Virtual Pilot. Thank you, COMETA AIRLINES!",
      name: "Silas M.",
      memberID: "ACT1992",
    },
    "pt-BR": {
      feedback:
        "Em busca de vídeos de aviação na internet, encontrei a COMETA. Após o registro e uma entrevista, tornei-me um Aspirante e, após estudar com o material maravilhoso, fácil e gratuito da COMETA, tornei-me um Piloto Virtual. Obrigado, COMETA AIRLINES!",
      name: "Silas M.",
      memberID: "ACT1992",
    },
  };

  // Obtém as traduções com base no idioma atual
  const t = translations[language];

  return (
    <>
      <div className={styles.div}>
        <div className={styles.overlayContainer}>
          <img src={image} alt="Banner" className={styles.backgroundImage} />
          <div className={styles.textoUpper}>
            <Carousel
              autoPlay={true}
              interval={3000}
              infiniteLoop={true}
              showArrows={false}
              showThumbs={false}
              easing="ease-in-out"
              transitionTime={1000}
              showStatus={false}
            >
              <div style={{ padding: "2rem 0" }}>
                <p className={styles.texto}>{t.feedback}</p>
                <p className={styles.nome}>{t.name}</p>
                <p className={styles.numero}>{t.memberID}</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
