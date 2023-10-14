import styles from "./CardFrota.module.css";
import { Link } from 'react-router-dom';
import React from 'react';

export default function CardFrota({ id,src, aeronave, tipo, asa }) {
  return (
    <>
    <Link to={`/frota/${id}`}>
      <div className={styles.container}>
        <div 
        className={styles.div}
        style={{
          display: "block",
          textAlign: "center",
          padding: "1%",
          cursor: "pointer",
        }}
        key={id}
        >
          <img
            src={src}
            alt={aeronave}
            style={{ border: "1px solid #10477F" }}
          ></img>
        </div>
        <div>
          <p className={styles.aeronave}>
            {aeronave}
          </p>
          <p className={styles.tipo}>
            {tipo}
          </p>
          <p className={styles.asa}>
            {asa}
          </p>
        </div>
      </div>
    </Link>
    </>
  );
}
