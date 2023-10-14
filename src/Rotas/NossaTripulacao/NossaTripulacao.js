import BannerTopoPagina from "components/BannerTopoPagina/BannerTopoPagina";
import BannerDescricao from "components/BannerDescricao/BannerDescricao";
import image from '../../img/FlightSimulator_2023-07-22_19-02-07 1.png';
import Tabela from "components/Tabela/Tabela.js";

export default function NossaTripulacao() {
  return (
    <section>
      <BannerTopoPagina image={image} titulo={"Nossos Tripulantes"} />
      <BannerDescricao
        titulo={'NINGUÉM É TÃO FORTE COMO NÓS TODOS JUNTOS'}
        textoUm={
          "Ninguém é nada sozinho. E se queremos fazer algo grande, importante e que nos traga orgulho, precisamos fazer em equipe. Alcançar o sucesso com um esforço coletivo é muito mais prazeroso. O trabalho em equipe é união e amizade em prol de um bem e de um objetivo comum, por isso é muito mais nobre do que uma batalha individual. Temos orgulho em dizer que os nossos membros são mais que uma equipe, são uma grande família! Venha ser um tripulante da COMETA Virtual Airlines."
        }        
      />
      <Tabela/>
    </section>
  );
}
