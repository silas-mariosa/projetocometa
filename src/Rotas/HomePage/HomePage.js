import image from "../../img/Microsoft_Flight_Simulator_Screenshot_2023.06.22_-_23.09.01.51.png";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.div}>
      <p className={styles.p}>Aqui Seus Sonhos Voam Alto</p>
      <img src={image} alt="cape da fundo" className={styles.imagem}></img>
      <a className={styles.btn}>INSCREVA-SE</a>
    </div>
  );
}
