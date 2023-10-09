import CardExpedicao from "components/CardExpedicao/CardExpedicao";
import styles from "./Expedicao.module.css";
import card1 from "../../img/expedicaoCard.png";

export default function Expedicao() {
  return (
    <section className={styles.section}>
      <div className={styles.containerExpedicao}>
        <div className={styles.divExpedicao}>
          <p className={styles.titulo}>EXPEDIÇÕES COMETA</p>
          <hr className={styles.line}></hr>
        </div>
        <div className={styles.containerCards}>
          <CardExpedicao image={card1} titulo="Tour Pantanal"></CardExpedicao>
          <CardExpedicao image={card1} titulo="Tour Pantanal"></CardExpedicao>
          <CardExpedicao image={card1} titulo="Tour Pantanal"></CardExpedicao>
          <CardExpedicao image={card1} titulo="Tour Pantanal"></CardExpedicao>
          <CardExpedicao image={card1} titulo="Tour Pantanal"></CardExpedicao>
          <CardExpedicao image={card1} titulo="Tour Pantanal"></CardExpedicao>
        </div>
      </div>
      <div className={styles.containerBtn}>
        <a className={styles.btn}>Ver mais...</a>
      </div>
    </section>
  );
}
