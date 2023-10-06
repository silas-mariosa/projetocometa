import styles from "./Header.module.css";
import image from "../../img/LogoCometa.svg";
import bandeira from "../../img/bandeiraAmericana.png";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import googleDrive from "../../img/drive.png";
import youtube from "../../img/youtube.png";

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.div}>
          <img className={styles.image} src={image} alt="logo Cometa"></img>
          <li className={styles.li}>
            <p className={styles.texto}>HOME</p>
            <p className={styles.texto}>INSTITUCIONAL</p>
            <p className={styles.texto}>OPERACIONAL</p>
            <p className={styles.texto}>INSCREVA-SE</p>
            <p className={styles.p_Bandeira}>
              <img
                className={styles.bandeira}
                src={bandeira}
                alt="Bandeira"
              ></img>
            </p>
          </li>
        <div className={styles.divSociais}>
            <p className={styles.fundoSociais}>
              <img
                alt="redes sociais"
                className={styles.imgSociais}
                src={facebook}
              ></img>
            </p>
            <p className={styles.fundoSociais}>
              <img
                alt="redes sociais"
                className={styles.imgSociais}
                src={instagram}
              ></img>
            </p>
            <p className={styles.fundoSociais}>
              <img
                alt="redes sociais"
                className={styles.imgSociais}
                src={googleDrive}
              ></img>
            </p>
            <p className={styles.fundoSociais}>
              <img
                alt="redes sociais"
                className={styles.imgSociais}
                src={youtube}
              ></img>
            </p>
        </div>
      </div>
    </header>
  );
}
