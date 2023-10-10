import styles from './BannerDescricao.module.css';

export default function BannerDescricao({titulo, textoUm, textoDois}){
    return(
        <div className={styles.div}>
            <h2 className={styles.h2}>{titulo}</h2>
            <p className={styles.texto}>{textoUm}</p>
            <p className={styles.texto}>{textoDois}</p>
        </div>
    )
}