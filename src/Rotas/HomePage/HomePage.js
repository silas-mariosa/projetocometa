import BannerMid from "components/BannerMid/BannerMid.js";
import BannerTopo from "../../components/BannerTopo/BannerTopo.js";
import image from "../../img/Microsoft_Flight_Simulator_Screenshot_2023.06.22_-_23.09.01.51.png";
import image2 from "../../img/FlightSimulator_2023-10-07_16-24-40.png";
import image3 from "../../img/FlightSimulator_2023-07-25_00-21-18.png";
import styles from "./HomePage.module.css";
import BannerDetalhes from "components/BannerDetalhes/BannerDetalhes.js";
import BannerVoeCometa from "components/BannerVoeCometa/BannerVoeCometa.js";
import Expedicao from "components/Expedicao/Expedicao.js";
import BannerBottom from "components/BannerBottom/BannerBottom.js";
import BannerEstatisticas from "components/BannerEstatisticas/BannerEstatisticas.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomePage() {
  return (
    <section>
      <div>
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
          <div className={styles.div}>
            <p className={styles.p}>Aqui Seus Sonhos Voam Alto</p>
            <img
              src={image}
              alt="cape da fundo"
              className={styles.imagem}
            ></img>
            <a className={styles.botao}>INSCREVA-SE</a>
          </div>
          <div>
            <p className={styles.p1}>Realismo e Diversão</p>
            <img className={styles.image} alt="banner top" src={image2} />
          </div>
          <div>
            <p className={styles.p2}>Venha fazer parte!</p>
            <img className={styles.image} alt="banner top" src={image3} />
          </div>
        </Carousel>
      </div>
      <div>
        <BannerTopo></BannerTopo>
        <BannerMid></BannerMid>
        <BannerDetalhes></BannerDetalhes>
        <BannerVoeCometa></BannerVoeCometa>
        <Expedicao></Expedicao>
        <BannerBottom></BannerBottom>
        <BannerEstatisticas></BannerEstatisticas>        
      </div>
    </section>
  );
}
