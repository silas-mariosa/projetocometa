import React from "react";
import { useLanguage } from "../../LanguageContext"; // Certifique-se de importar o contexto de idioma
import styles from "./BannerBottom.module.css";
import image from "../../img/bannerBottom.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import declaracao from "./declaracao.json"

export default function BannerBottom() {
  const { language } = useLanguage(); 

  return (
    <>
      <div className={styles.div}>
        <div className={styles.overlayContainer}>
          <img src={image} alt="Banner" className={styles.backgroundImage} />
          <div className={styles.textoUpper}>
            <Carousel
              autoPlay={true}
              interval={8000}
              infiniteLoop={true}
              showArrows={false}
              showThumbs={false}
              easing="ease-in-out"
              transitionTime={1000}
              showStatus={false}
            >
              {declaracao.depoimentos.map(depoimento => (               
              <div style={{ padding: "2rem 0" }} key={depoimento.translation[language].id}>
                <p className={styles.texto}>{depoimento.translation[language].feedback}</p>
                <p className={styles.nome}>{depoimento.translation[language].name}</p>
                <p className={styles.numero}>{depoimento.translation[language].memberID}</p>
              </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
