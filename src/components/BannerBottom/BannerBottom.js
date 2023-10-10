import styles from "./BannerBottom.module.css";
import image from "../../img/bannerBottom.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function BannerBottom() {
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
              <div style={{padding:'2rem 0'}}>
                <p className={styles.texto}>
                  Em procura na internet de vídeos sobre aviação, encontrei a
                  COMETA. Após inscrição e entrevista passei a ser um Aspirante
                  e depois dos estudos efetuados com o maravilhoso, fácil e
                  gratuito material da COMETA tornei-me Piloto Virtual. Obrigado
                  COMETA AIRLINES !
                </p>
                <p className={styles.nome}>Silas M.</p>
                <p className={styles.numero}>ACT1992</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
