import styles from './BannerTopo.module.css';
import foto from '../../img/INSCREVA-SE.png';
import icone from '../../img/inscrevaseIcon.png'


export default function BannerTopo(){
    return(      
        <section className={styles.section}>
            <div className={styles.div}>
            <p className={styles.p}>Como é fácil voar na Cometa</p>
            <img className={styles.image} alt='banner top' src={foto}></img>
            <div className={styles.containerBotao}>
                <img className={styles.icone} src={icone}></img>
            <a className={styles.botao}>INSCREVA-SE</a>
            </div>
            </div>
        </section>
    );
}