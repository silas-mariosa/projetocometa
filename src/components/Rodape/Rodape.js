import IconesSocial from "components/IconesSocial/IconesSocial";
import styles from "./Rodape.module.css";
import Logo from "../../img/Logo.png";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <div className={styles.divUm}>
          <div>
            <img className={styles.logo} src={Logo}></img>
          </div>
          <p className={styles.texto}>
            Somos uma CIA Aérea Virtual que oferece treinamentos de alto nível
            baseado em manuais reais, totalmente grátis e claro, muita diversão
            nas simulações de voo. Frota completa para FSX, P3D, XPlane e MSFS.
            Somos homologados nas redes IVAO e VATSIM e também usamos a rede
            POSCON. Seja um Piloto Gold!
          </p>
          <p className={styles.siga}>Siga-nos pela Redes Sociais</p>
          <IconesSocial></IconesSocial>
        </div>
        <div className={styles.divDois}>
          <p className={styles.balao}>NOSSA MISSÃO</p>
          <p className={styles.texto}>
            Ser uma VA referência em tudo o que faz. Que propicie um ambiente
            amistoso, cooperativo e sobretudo acolhedor.
          </p>
          <p className={styles.balao}>NOSSA VISÃO</p>
        </div>
        <div className={styles.divTres}>
          <p className={styles.balao}>NOSSA DISCORD</p>
          <iframe
            src="https://discord.com/widget?id=941487557500342312&theme=dark"
            width="350"
            height="350"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
