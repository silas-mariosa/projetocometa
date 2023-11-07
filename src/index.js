import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./rotas/HomePage/HomePage.js";
import SobreNos from "rotas/SobreNos/SobreNos";
import Rodape from "components/Rodape/Rodape.js";
import Assinatura from "components/Assinatura/Assinatura.js";
import NossaTripulacao from "rotas/NossaTripulacao/NossaTripulacao";
import Frota from "rotas/Frota/Frota";
import FrotaDetalhes from "rotas/FrotaDetalhes/FrotaDetalhes.js";
import DownloadPage from "rotas/DownloadPage/DownloadPage";
import NossaExpedicao from "rotas/NossaExpedicao/NossaExpedicao";
import { LanguageProvider } from "./LanguageContext.js";
import Lgpd from "rotas/LGPD/Lgpd";
import PaginaNaoEncontrada from "components/PaginaNaoEncontrada/PaginaNaoEncontrada";
import SingUp from "rotas/SingUp/SingUp";

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    box-sizing: border-box;

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
      <LanguageProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/tripulantes" element={<NossaTripulacao />} />
          <Route path="/frota" element={<Frota />} />
          <Route path="/frota/:id" element={<FrotaDetalhes />} />
          <Route path="/expedicoes/:id" element={<NossaExpedicao />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/lgpd" element={<Lgpd/>}/>
          <Route path="/*" element={<PaginaNaoEncontrada/>}/>
          <Route path="/cadastrar" element={<SingUp/>}/>
        </Routes>
        <Rodape />
        <Assinatura />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
