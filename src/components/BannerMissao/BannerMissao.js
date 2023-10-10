import DetalhesComponentes from 'components/DetalhesComponentes/DetalhesComponentes'
import styles from './BannerMissao.module.css';
import icon1 from '../../img/iconMissao.png';
import icon2 from '../../img/iconeVisao.png';

export default function BannerMissao(){
    return(
        <section className={styles.containerPai}>
            <div className={styles.container}>
                <div className={styles.div}>
                <DetalhesComponentes imagem={icon1} titulo="DESTAQUES DO MÊS" descricao="Quem se destaca na Cometa Airlines merece destaque. Aniversariantes e os TOP do mês. Conheça os que voaram alto!"></DetalhesComponentes>
                </div>
                <div className={styles.div}>
                <DetalhesComponentes imagem={icon2} titulo="ESTATÍSTICAS DA CIA" descricao="Ninguém é tão forte como todos nós juntos. Sempre em voo de ascensão. Conheça os principais números da Cometa Airlines!"></DetalhesComponentes>
                </div>
            </div>
        </section>
    )
}