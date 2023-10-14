import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Rotas/HomePage/HomePage.js';
import SobreNos from "Rotas/SobreNos/SobreNos";
import Rodape from "components/Rodape/Rodape.js";
import Assinatura from "components/Assinatura/Assinatura.js";
import NossaTripulacao from "Rotas/NossaTripulacao/NossaTripulacao";
import Frota from "Rotas/Frota/Frota";
import FrotaDetalhes from "Rotas/FrotaDetalhes/FrotaDetalhes.js";

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

    li {
      list-style: none;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sobrenos" element={<SobreNos />}/>
        <Route path="/tripulantes" element={<NossaTripulacao />}/>
        <Route path="/frota" element={<Frota />}/>
        <Route path="/frota/:id" element={<FrotaDetalhes/>}/>
      </Routes>
      <Rodape/>
        <Assinatura/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
