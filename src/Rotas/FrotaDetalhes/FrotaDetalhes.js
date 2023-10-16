import React from "react";
import Aeronave from "components/Aeronave/Aeronave";
import BannerTopoPagina from "components/BannerTopoPagina/BannerTopoPagina";
import Aeronaves from "./aeronave.json";
import BtnVoltar from "components/BtnVoltar/BtnVoltar";
import PaginaNaoEncontrada from "components/PaginaNaoEncontrada/PaginaNaoEncontrada";
import { useLanguage } from "../../LanguageContext.js";

export default function FrotaDetalhes() {
  const language = useLanguage();
  const url = window.location.href;
  const partesDaURL = url.split("/");
  const id = partesDaURL[partesDaURL.length - 1];
  const aeronaveEncontrada = Aeronaves.frota.find((item) => item.id === id);

  console.log("ID da aeronave:", id);
  console.log("Aeronave encontrada:", aeronaveEncontrada);
  console.log("lingua selecionada:", language.language);

  if (aeronaveEncontrada) {
    const aeronaveData = aeronaveEncontrada.translations[language.language];

    if (aeronaveData) {
      return (
        <>
          <BannerTopoPagina image={aeronaveEncontrada.image} titulo={aeronaveData.nome} />
          <BtnVoltar />
          <Aeronave
            nomeAeronave={aeronaveData.nome}
            velocidadeAeronave={aeronaveData.Velocidade}
            altitudeAeronave={aeronaveData.Teto}
            alcanceAeronave={aeronaveData.Alcance}
            capacidadeAeronave={aeronaveData.Combustivel}
            numeroPassageiros={aeronaveData.NumeroPassageiros}
            pesoMaximo={aeronaveData.PesoMaximo}
            pesoPouso={aeronaveData.PesoPouso}
            pesoDecolagem={aeronaveData.PesoDecolagem}
          />
        </>
      );
    }
  }

  return (
    <>
      <PaginaNaoEncontrada />
      <BtnVoltar />
    </>
  );
}
