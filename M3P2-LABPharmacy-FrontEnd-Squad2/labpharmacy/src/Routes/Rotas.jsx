import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/LoginPage";
import AdminPage from "../Pages/AdminPage";
import ListaUsuarios from "../Pages/Usuarios/ListaUsuarios";
import CadastroUsuarios from "../Pages/Usuarios/CadastroUsuarios";
import Vendas from "../Pages/Vendas";
import Produtos from "../Pages/Produtos";
import UserProvider from '../Context/usuarioId';

export default function Rotas() {
  return (
    <BrowserRouter>
     <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
        <Route path="/cadastro" element={<CadastroUsuarios />} />
      </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
