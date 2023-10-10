import styles from './BannerTopoPagina.module.css';

export default function BannerTopoPagina({image, titulo}){
    return(
        <div className={styles.div}>
            <img src={image} alt={titulo} className={styles.img}></img>
            <p className={styles.titulo}>{titulo}</p>
        </div>
    )
}