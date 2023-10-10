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
  return (
    <header className={`${styles.Header} ${isScrolled ? styles.scrolled : ""}`}>
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
        <IconesSocial></IconesSocial>
      </div>
    </header>
  );
}
