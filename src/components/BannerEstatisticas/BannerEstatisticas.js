import styles from './BannerEstatisticas.module.css'

export default function BannerEstatisticas(){
    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <p className={styles.numero}>115</p>
                <p className={styles.titulo}>PILOTOS ATIVOS</p>
            </div>
            <div className={styles.box}>
                <p className={styles.numero}>7779</p>
                <p className={styles.titulo}>ROTAS DISPONÍVEIS</p>
            </div>
            <div className={styles.box}>
                <p className={styles.numero}>54</p>
                <p className={styles.titulo}>MODELOS DE AERONAVES</p>
            </div>
            <div className={styles.box}>
                <p className={styles.numero}>6501</p>
                <p className={styles.titulo}>NR. DE VOOS EM 2023</p>
            </div>
        </div>
    )
}