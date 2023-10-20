import styles from "./BannerBottomText.module.css";

export default function BannerBottomText({ src, titulo, texto }) {
  return (
    <div className={styles.div}>
      <img className={styles.img} src={src} atl={titulo}></img>
      <div className={styles.containerTexto}>
        <h2 className={styles.h2}>{titulo}</h2>
        <p className={styles.p}>{texto}</p>
      </div>
    </div>
  );
}
