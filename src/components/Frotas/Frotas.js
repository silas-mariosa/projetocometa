import styles from "./Frotas.module.css";
import CardFrota from "components/CardFrota/CardFrota";
import DadosFrota from 'components/Frotas/frota.json';
// import image from '../../img/expedicaoCard.png';
console.log(DadosFrota);


export default function Frotas() {
  return (
    <section className={styles.section}>
      <div className={styles.containerExpedicao}>
        <div className={styles.divExpedicao}>
          <p className={styles.titulo}>Aeronaves</p>
          <hr className={styles.line}></hr>
        </div>
        <div className={styles.containerCards}>
          {DadosFrota.frota.map(dados => (
            <CardFrota key={dados.id} src={dados.image} aeronave={dados.titulo} tipo={dados.tipo} asa={dados.asa}></CardFrota>
          ))}
        </div>
      </div>
      <div className={styles.containerBtn}>
        <a className={styles.btn}>Ver mais...</a>
      </div>
    </section>
  );
}
