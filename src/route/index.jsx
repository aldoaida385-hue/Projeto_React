import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ListaEstadosMunicipios } from "../pages/ListaMunicipi";
import { Login } from "../pages/Login";
import { Produto } from "../pages/Produto"
import { NovaListaProdutos } from "../componentes/NovaListaProdutos";


export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/municipios" element={<ListaEstadosMunicipios />} /> 
        <Route path="/produtos" element= {<Produto/>} />
        <Route path="/listaprodutos" element={<NovaListaProdutos/>} />
      </Routes>
    </BrowserRouter> 
  );
}
