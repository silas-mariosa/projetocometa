import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import image from "../../img/Logo.png";
import bandeira from "../../img/bandeiraAmericana.png";
import IconesSocial from "components/IconesSocial/IconesSocial";


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Função para lidar com a rolagem da página
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    // Adiciona um ouvinte de evento para a rolagem da página
    window.addEventListener("scroll", handleScroll);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isInstitucionalOpen, setIsInstitucionalOpen] = useState(false);
const [isOperacionalOpen, setIsOperacionalOpen] = useState(false);


  window.addEventListener("click", (e) => {
    if (!e.target.closest(`.${styles.submenu}`)) {
      setIsInstitucionalOpen(false);
      setIsOperacionalOpen(false);
    }
  });
  return (
    <header className={`${styles.Header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.div}>
        <img className={styles.image} src={image} alt="logo Cometa"></img>
        <li className={styles.li}>
          <a className={styles.texto} href="/">
            HOME
          </a>
          <div className={styles.submenuWrapper}>
            <a
              className={styles.texto}
              onClick={() => setIsInstitucionalOpen(!isInstitucionalOpen)}
            >
              INSTITUCIONAL
            </a>
            <div
              className={`${styles.submenu} ${
                isInstitucionalOpen ? styles.open : ""
              }`}
            >
              <a className={styles.submenuItem} href="/sobrenos">
                Sobre Nós
              </a>
              <a className={styles.submenuItem} href="/tripulantes">
                Nossos Tripulantes
              </a>
              <a className={styles.submenuItem} href="/frota">
                Nossa Frota
              </a>
              <a className={styles.submenuItem} href="/expedicoes">
                Nossas Expedições
              </a>
            </div>
          </div>
          <div className={styles.submenuWrapper}>
            <a
              className={styles.texto}
              onClick={() => setIsOperacionalOpen(!isOperacionalOpen)}
            >
              OPERACIONAL
            </a>
            <div
              className={`${styles.submenu} ${
                isOperacionalOpen ? styles.open : ""
              }`}
            >
              <a className={styles.submenuItem} href="/download">
                Download
              </a>
              <a className={styles.submenuItem} href="/discord">
                Discord
              </a>
            </div>
          </div>
          <a className={styles.texto}>INSCREVA-SE</a>
          <a className={styles.p_Bandeira}>
            <img
              className={styles.bandeira}
              src={bandeira}
              alt="Bandeira"
            ></img>
          </a>
        </li>
        <IconesSocial></IconesSocial>
      </div>
    </header>
  );
}
