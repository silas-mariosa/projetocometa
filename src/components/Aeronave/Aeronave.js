import React from "react";
import styles from "./Aeronave.module.css";
import { useLanguage } from "../../LanguageContext"; // Certifique-se de importar o contexto de idioma

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
  const { language } = useLanguage(); // Obtém o idioma atual do contexto

  // Define as traduções com base no idioma
  const translations = {
    "en-US": {
      details_aircraft: "Aircraft Details",
      name: "Name",
      cruise_speed: "Cruise Speed",
      service_ceiling: "Service Ceiling",
      maximum_range: "Maximum Range",
      cargo_capacity: "Cargo Capacity",
      passenger_count: "Passenger Count",
      max_takeoff_weight: "Maximum Takeoff Weight",
      max_landing_weight: "Maximum Landing Weight",
      max_zero_fuel_weight: "Maximum Zero Fuel Weight",
    },
    "pt-BR": {
      details_aircraft: "Detalhes da Aeronave",
      name: "Nome",
      cruise_speed: "Velocidade de Cruzeiro",
      service_ceiling: "Teto de Serviço",
      maximum_range: "Alcance Máximo",
      cargo_capacity: "Capacidade de Carga",
      passenger_count: "Número de Passageiros",
      max_takeoff_weight: "Peso Máximo para Decolagem",
      max_landing_weight: "Peso Máximo para Pouso",
      max_zero_fuel_weight: "Peso Máximo sem Combustível",
    },
  };

  // Obtém as traduções com base no idioma atual
  const t = translations[language];

  return (
    <div className={styles.container_tabela}>
      <div className={styles.container}>
        <div className={styles.tabelaContainer}>
          <h2 className={styles.h2}>{t.details_aircraft}</h2> {/* Usa a tradução do título */}
          <table className={styles.table}>
            <tbody className={styles.tbody}>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <div className={styles.divDados}>
                    <strong className={styles.strong}>{t.name}</strong> {/* Usa a tradução para Nome */}
                  </div>
                  {nomeAeronave}
                </td>
                <td className={styles.td}>
                  <div className={styles.divDados}>
                    <strong className={styles.strong}>{t.cruise_speed}</strong> {/* Usa a tradução para Velocidade de Cruzeiro */}
                  </div>
                  {velocidadeAeronave}
                </td>
                <td className={styles.td}>
                  <div className={styles.divDados}>
                    <strong className={styles.strong}>{t.service_ceiling}</strong> {/* Usa a tradução para Teto de Serviço */}
                  </div>
                  {altitudeAeronave}
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <div className={styles.divDados}>
                    <strong className={styles.strong}>{t.maximum_range}</strong> {/* Usa a tradução para Alcance Máximo */}
                  </div>
                  {alcanceAeronave}
                </td>
                <td className={styles.td}>
                  <div className={styles.divDados}>
                    <strong className={styles.strong}>{t.cargo_capacity}</strong> {/* Usa a tradução para Capacidade de Carga */}
                  </div>
                  {capacidadeAeronave}
                </td>
                <td className={styles.td}>
                  <div className={styles.divDados}>
                    <strong className={styles.strong}>{t.passenger_count}</strong> {/* Usa a tradução para Número de Passageiros */}
                  </div>
                  {numeroPassageiros}
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <div className={styles.divDados}>
                    <strong className={styles.strong}>{t.max_takeoff_weight}</strong> {/* Usa a tradução para Peso Máximo para Decolagem */}
                  </div>
                  {pesoMaximo}
                </td>
                <td className={styles.td}>
                  <div className={styles.divDados}>
                    <strong className={styles.strong}>{t.max_landing_weight}</strong> {/* Usa a tradução para Peso Máximo para Pouso */}
                  </div>
                  {pesoPouso}
                </td>
                <td className={styles.td}>
                  <div className={styles.divDados}>
                    <strong className={styles.strong}>{t.max_zero_fuel_weight}</strong> {/* Usa a tradução para Peso Máximo sem Combustível */}
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
