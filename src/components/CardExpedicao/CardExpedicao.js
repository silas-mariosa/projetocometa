import styles from "./CardExpedicao.module.css";

export default function CardExpedicao({ image, titulo }) {
  return (
    <>
      <div className={styles.div}>
        <img src={image} alt={titulo} className={styles.imagem} />
        <p className={styles.titulo}>{titulo}</p>
      </div>
    </>
  );
}
