import DetalhesComponentes from 'components/DetalhesComponentes/DetalhesComponentes'
import styles from './BannerDetalhes.module.css'
import icon1 from '../../img/destaqueIcon.png'
import icon2 from '../../img/estatisticaIcon.png'
import icon3 from '../../img/frotaIcon.png'
import icon4 from '../../img/expedicoesIcon.png'

export default function BannerDetalhes(){
    return(
        <section className={styles.containerPai}>
            <div className={styles.container}>
                <div className={styles.div}>
                <DetalhesComponentes imagem={icon1} titulo="DESTAQUES DO MÊS" descricao="Quem se destaca na Cometa Airlines merece destaque. Aniversariantes e os TOP do mês. Conheça os que voaram alto!"></DetalhesComponentes>
                </div>
                <div className={styles.div}>
                <DetalhesComponentes imagem={icon2} titulo="ESTATÍSTICAS DA CIA" descricao="Ninguém é tão forte como todos nós juntos. Sempre em voo de ascensão. Conheça os principais números da Cometa Airlines!"></DetalhesComponentes>
                </div>
                <div className={styles.div}>
                <DetalhesComponentes imagem={icon3} titulo="NOSSA FROTA" descricao="Para atender todas as necessidades. Conheça todas as aeronaves da nossa frota!"></DetalhesComponentes>
                </div>
                <div className={styles.div}>
                <DetalhesComponentes imagem={icon4} titulo="NOSSaS expedições" descricao="Diversão garantida em Tours Nacionais e Internacionais. Conheça as Tours da Cometa Airlines!"></DetalhesComponentes>
                </div>
            </div>
        </section>
    )
}