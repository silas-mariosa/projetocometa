import styles from './IconesSocial.module.css';
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import googleDrive from "../../img/drive.png";
import youtube from "../../img/youtube.png";

export default function IconesSocial(){
    return(
        <div className={styles.divSociais}>            
            <a className={styles.fundoSociais} href={"#"}>
              <img
                alt="redes_sociais"
                className={styles.imgSociais}
                src={instagram}
              ></img>
            </a>
            <a className={styles.fundoSociais} href={"/download"}>
              <img
                alt="redes_sociais"
                className={styles.imgSociais}
                src={googleDrive}
              ></img>
            </a>
            <a className={styles.fundoSociais} href={"https://www.youtube.com/@uno3zeromeia"}>
              <img
                alt="redes_sociais"
                className={styles.imgSociais}
                src={youtube}
              ></img>
            </a>
        </div>
    )
}