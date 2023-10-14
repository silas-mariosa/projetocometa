import styles from "./Aeronave.module.css";

export default function Aeronave({
  nomeAeronave,
  velocidadeAeronave,
  altitudeAeronave,
  alcanceAeronave,
  capacidadeAeronave,
  numeroPassageiros,
  pesoMaximo,
  pesoPouso,
  pesoDecolagem,
}) {
  return (
    <div className={styles.container_tabela}>

    <div className={styles.container}>
      <div className={styles.tabelaContainer}>
      <h2 className={styles.h2}>DETALHES DA AERONAVE</h2>
        <table className={styles.table}>
          <tbody className={styles.tbody}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <div className={styles.divDados}>
                  <strong className={styles.strong}>Nome</strong>
                </div>
                {nomeAeronave}
              </td>
              <td className={styles.td}>
                <div className={styles.divDados}>
                  <strong className={styles.strong}>
                    Velocidade de Cruzeiro
                  </strong>
                </div>
                {velocidadeAeronave}
              </td>
              <td className={styles.td}>
                <div className={styles.divDados}>
                  <strong className={styles.strong}>Teto de serviço</strong>
                </div>
                {altitudeAeronave}
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <div className={styles.divDados}>
                  <strong className={styles.strong}>Alcance Máximo</strong>
                </div>
                {alcanceAeronave}
              </td>
              <td className={styles.td}>
                <div className={styles.divDados}>
                  <strong className={styles.strong}>Capacidade de Carga</strong>
                </div>
                {capacidadeAeronave}
              </td>
              <td className={styles.td}>
                <div className={styles.divDados}>
                  <strong className={styles.strong}>
                    Número de passageiros
                  </strong>
                </div>
                {numeroPassageiros}
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <div className={styles.divDados}>
                  <strong className={styles.strong}>
                    Peso máximo sem combustível MZFW
                  </strong>
                </div>
                {pesoMaximo}
              </td>
              <td className={styles.td}>
                <div className={styles.divDados}>
                  <strong className={styles.strong}>
                    Peso máximo para pouso MLW
                  </strong>
                </div>
                {pesoPouso}
              </td>
              <td className={styles.td}>
                <div className={styles.divDados}>
                  <strong className={styles.strong}>
                    Peso máximo para decolagem MTOW
                  </strong>
                </div>
                {pesoDecolagem}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
