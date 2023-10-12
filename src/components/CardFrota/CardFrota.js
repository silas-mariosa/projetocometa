import styles from "./CardFrota.module.css";

export default function CardFrota({ src, aeronave, tipo, asa, key }) {
  return (
    <>
      <div className={styles.container}>
        <div 
        className={styles.div}
        style={{
          display: "block",
          textAlign: "center",
          padding: "1%",
          cursor: "pointer",
        }}
        key={key}
        >
          <img
            src={src}
            alt={aeronave}
            style={{ border: "1px solid #10477F" }}
          ></img>
        </div>
        <div>
          <p className={styles.aeronave}>
            {aeronave}
          </p>
          <p className={styles.tipo}>
            {tipo}
          </p>
          <p className={styles.asa}>
            {asa}
          </p>
        </div>
      </div>
    </>
  );
}
