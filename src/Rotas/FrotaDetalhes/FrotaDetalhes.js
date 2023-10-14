import React from "react";
import Aeronave from "components/Aeronave/Aeronave";
import BannerTopoPagina from "components/BannerTopoPagina/BannerTopoPagina";
// import image from "../../img/A320.png";
import Aeronaves from "./aeronave.json";
import BtnVoltar from "components/BtnVoltar/BtnVoltar";
import PaginaNaoEncontrada from "components/PaginaNaoEncontrada/PaginaNaoEncontrada";

export default function FrotaDetalhes() {
  const url = window.location.href;
  const partesDaURL = url.split("/");
  const id = partesDaURL[partesDaURL.length - 1];
  const aeronaveEncontrada = Aeronaves.frota.find((item) => item.id === id);

  if (aeronaveEncontrada) {
    return (
      <>
        <BannerTopoPagina image={aeronaveEncontrada.image} titulo={aeronaveEncontrada.nome} />
        <BtnVoltar/>
        <Aeronave
          nomeAeronave={aeronaveEncontrada.nome}
          velocidadeAeronave={aeronaveEncontrada.Velocidade}
          altitudeAeronave={aeronaveEncontrada.Teto}
          alcanceAeronave={aeronaveEncontrada.Alcance}
          capacidadeAeronave={aeronaveEncontrada.Combustivel}
          numeroPassageiros={aeronaveEncontrada.NumeroPassageiros}
          pesoMaximo={aeronaveEncontrada.PesoMaximo}
          pesoPouso={aeronaveEncontrada.PesoPouso}
          pesoDecolagem={aeronaveEncontrada.PesoDecolagem}
        />
      </>
    );
  } else {
    return (
      <>
        <PaginaNaoEncontrada/>
        <BtnVoltar/>
      </>
    );
  }
}
