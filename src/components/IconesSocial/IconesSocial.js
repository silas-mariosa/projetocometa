import styles from "./IconesSocial.module.css";
import instagram from "../../img/instagram.png";
import googleDrive from "../../img/drive.png";
import youtube from "../../img/youtube.png";

export default function IconesSocial() {
  return (
    <div className={styles.divSociais}>
      <div>
        <a className={styles.fundoSociais} href={"#"}>
          <img
            alt="redes_sociais"
            className={styles.imgSociais}
            src={instagram}
          ></img>
        </a>
      </div>
      <div>
        <a className={styles.fundoSociais} href={"/download"}>
          <img
            alt="redes_sociais"
            className={styles.imgSociais}
            src={googleDrive}
          ></img>
        </a>
      </div>
      <div>
        <a
          className={styles.fundoSociais}
          href={"https://www.youtube.com/@uno3zeromeia"}
        >
          <img
            alt="redes_sociais"
            className={styles.imgSociais}
            src={youtube}
          ></img>
        </a>
      </div>
    </div>
  );
}
