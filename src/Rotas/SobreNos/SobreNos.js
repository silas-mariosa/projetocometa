import BannerTopoPagina from "components/BannerTopoPagina/BannerTopoPagina";
import styles from "./SobreNos.module.css";
import image from "../../img/sobreNos.png";
import BannerDescricao from "components/BannerDescricao/BannerDescricao";
import BannerMissao from "components/BannerMissao/BannerMissao";
import BannerBottomText from "components/BannerBottomText/BannerBottonText";
import aviao from '../../img/Microsoft_Flight_Simulator_Screenshot_2023.06.26_-_21.27.51.74.png'

export default function SobreNos() {
  return (
    <section>
      <BannerTopoPagina image={image} titulo={"Sobre nós"} />
      <BannerDescricao
        titulo={"VOE COMETA!"}
        textoUm={
          "A Gold Virtual Airlines é uma empresa Aérea Virtual dedicada à simulação de voos comerciais utilizando Software’s e redes mundiais de computadores on line."
        }
        textoDois={'Paixão pela Performance e Sonho Grande é o sentimento que nos move desde junho de 2012 e que faz brilhar os olhos e encher o coração de orgulho de nossos membros e seguidores. Também é por isso que hoje estamos entre as Virtuais Airlines com maior respeito e credibilidade na aviação virtual da América Latina.'}
      />
      <BannerMissao/>
      <BannerDescricao
        titulo={"Você sabia?"}
        textoUm={
          "Este modelo de organização da COMETA foi motivo de uma Certificação Internacional pela VATSIM. Isso ratifica nosso compromisso e seriedade com a simulação de voo baseado em procedimentos reais de acordo com documentos e manuais oficiais."
        }
        textoDois={'Temos uma Academia de Formação com cursos completos para Piloto Privado e Piloto Comercial Virtual, bem como cursos de Familiarização de Aeronaves.'}
      />
      <BannerBottomText src={aviao} titulo={'NOSSA HISTÓRIA'} texto={'huahua au hau huah ah iuehui ae hrurh uiae ruharui aheir uhaiur haeur hauir ar hiuaehr iuarh uairh aiurh iaurhi ahriu aher heruh aeurha raeu rhaur air haeriu haer haur haurh  huehr ua eur haeir raerh uaer eahiu rhaiur  rhaueh r rheurh iaer eru he iarh eu hrer uearia ieuh rehr ue rheu rh ii h heurur haeur hr uehr  haoi rheoi or he eurh eu hrue.'}/>
    </section>
  );
}
