import styles from './IconesSocial.module.css';
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import googleDrive from "../../img/drive.png";
import youtube from "../../img/youtube.png";

export default function IconesSocial(){
    return(
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
    )
}