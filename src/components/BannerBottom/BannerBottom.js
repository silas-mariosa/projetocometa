import styles from "./BannerBottom.module.css";
import image from "../../img/bannerBottom.png";

export default function BannerBottom() {
  return (
    <div className={styles.div}>
      <div className={styles.overlayContainer}>
        <img src={image} alt="Banner" className={styles.backgroundImage} />
        <div className={styles.textoUpper}>
          <p className={styles.texto}>
            Em procura na internet de vídeos sobre aviação, encontrei a COMETA.
            Após inscrição e entrevista passei a ser um Aspirante e depois dos
            estudos efetuados com o maravilhoso, fácil e gratuito material da
            COMETA tornei-me Piloto Virtual. Obrigado COMETA AIRLINES !
          </p>
          <p className={styles.nome}>Silas M.</p>
          <p className={styles.numero}>ACT1992</p>
        </div>
      </div>
    </div>
  );
}
