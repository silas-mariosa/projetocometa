import BannerTopoPagina from "components/BannerTopoPagina/BannerTopoPagina";
import BannerDescricao from "components/BannerDescricao/BannerDescricao";
import Frotas from 'components/Frotas/Frotas'
import image from '../../img/nossaFrota.png';

export default function Frota() {
  return (
    <section>
      <BannerTopoPagina image={image} titulo={"Nossa Frota"} />
      <BannerDescricao
        titulo={'UMA FROTA COMPLETA PARA DIVERSÃO GARANTIDA'}
        textoUm={
          "Moderna, jovem, segura e com alta tecnologia. Assim é a frota COMETA Virtual Airlines, que diariamente leva centenas de passageiros e cargas a seus destinos. Temos uma frota multi performance que vai desde o C172 para realização de voos visuais intermunicipais até o Boeing 747-400 para voos longos intercontinentais. A COMETA Virtual é composta por três linhas de frota."
        }        
      />
      <Frotas />
    </section>
  );
}
