// Header.js
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import image from "../../img/LOGO_PNG.png";
import bandeira from "../../img/bandeiraAmericana.png";
import IconesSocial from "components/IconesSocial/IconesSocial";
import { useLanguage } from "../../LanguageContext";
import translationsEn from "./en-US.json";
import translationsPt from "./pt-BR.json";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

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
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const translations = language === "en-US" ? translationsEn : translationsPt;

  return (
    <header className={`${styles.Header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.div}>
        <img className={styles.image} src={image} alt="logo Cometa" ></img>
        <li className={styles.li}>
          <a className={styles.texto} href="/">
            {translations.home}
          </a>
          <div className={styles.submenuWrapper}>
            <a
              className={styles.texto}
              onClick={() => setIsInstitucionalOpen(!isInstitucionalOpen)}
            >
              {translations.about_us}
            </a>
            <div
              className={`${styles.submenu} ${
                isInstitucionalOpen ? styles.open : ""
              }`}
            >
              <a className={styles.submenuItem} href="/sobrenos">
                {translations.about_us}
              </a>
              <a className={styles.submenuItem} href="/tripulantes">
                {translations.our_crew}
              </a>
              <a className={styles.submenuItem} href="/frota">
                {translations.our_fleet}
              </a>
              <a className={styles.submenuItem} href="/expedicoes">
                {translations.our_expeditions}
              </a>
            </div>
          </div>
          <div className={styles.submenuWrapper}>
            <a
              className={styles.texto}
              onClick={() => setIsOperacionalOpen(!isOperacionalOpen)}
            >
              {translations.operational}
            </a>
            <div
              className={`${styles.submenu} ${
                isOperacionalOpen ? styles.open : ""
              }`}
            >
              <a className={styles.submenuItem} href="/download">
                {translations.download}
              </a>
              <a className={styles.submenuItem} href="/discord">
                {translations.discord}
              </a>
            </div>
          </div>
          <a className={styles.texto} href="/cadastrar">{translations.signup}</a>
          <a className={styles.p_Bandeira} onClick={toggleLanguage}>
            <img className={styles.bandeira} src={bandeira} alt="Bandeira"></img>
          </a>
        </li>
        <div className={styles.Social}>
          <IconesSocial></IconesSocial>
        </div>
      </div>
      <div className={styles.divHamburguer}>
      <button
          className={styles.hamburgerButton}
          onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
        >
          ☰ {/* Ícone de hambúrguer */}
        </button>
        {isHamburgerMenuOpen && (
          <nav
          className={`${styles.mobileMenu} ${isHamburgerMenuOpen ? styles.open : ""}`}
        >
            <a className={styles.texto} href="/">
              {translations.home}
            </a>
            <a className={styles.texto} href="/sobrenos">
              {translations.about_us}
            </a>
            <a className={styles.texto} href="/tripulantes">
              {translations.our_crew}
            </a>
            <a className={styles.texto} href="/frota">
              {translations.our_fleet}
            </a>
            <a className={styles.texto} href="/expedicoes">
              {translations.our_expeditions}
            </a>
            <a className={styles.texto} href="/download">
              {translations.download}
            </a>
            <a className={styles.texto} href="/discord">
              {translations.discord}
            </a>
            <a className={styles.texto} href="/cadastrar">
              {translations.signup}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
