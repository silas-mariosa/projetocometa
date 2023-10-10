import BannerMid from "components/BannerMid/BannerMid.js";
import BannerTopo from "../../components/BannerTopo/BannerTopo.js";
import image from "../../img/Microsoft_Flight_Simulator_Screenshot_2023.06.22_-_23.09.01.51.png";
import styles from "./HomePage.module.css";
import BannerDetalhes from "components/BannerDetalhes/BannerDetalhes.js";
import BannerVoeCometa from "components/BannerVoeCometa/BannerVoeCometa.js";
import Expedicao from "components/Expedicao/Expedicao.js";
import BannerBottom from "components/BannerBottom/BannerBottom.js";
import BannerEstatisticas from "components/BannerEstatisticas/BannerEstatisticas.js";
import Rodape from "components/Rodape/Rodape.js";
import Assinatura from "components/Assinatura/Assinatura.js";

export default function HomePage() {
  return (
    <section>
    <div className={styles.div}>
      <p className={styles.p}>Aqui Seus Sonhos Voam Alto</p>
      <img src={image} alt="cape da fundo" className={styles.imagem}></img>
      <a className={styles.botao}>INSCREVA-SE</a>
    </div>
    <div>
      <BannerTopo></BannerTopo>
      <BannerMid></BannerMid>
      <BannerDetalhes></BannerDetalhes>
      <BannerVoeCometa></BannerVoeCometa>
      <Expedicao></Expedicao>
      <BannerBottom></BannerBottom>
      <BannerEstatisticas></BannerEstatisticas>
      <Rodape></Rodape>
      <Assinatura></Assinatura>
    </div>
    </section>
  );
}
