/* eslint-disable import/no-unresolved */
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "@pages/Login";
import Products from "@pages/Products";
import Suppliers from "@pages/Suppliers";
import Clients from "@pages/Clients";
import Company from "@pages/Company";
import Profil from "@pages/Profil";
import UserExport from "./contexts/UserContext";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <UserExport.ContextProvider>
      <BrowserRouter>
        <div className="bg-heroBg h-screen bg-center bg-cover">
          {window.location.pathname === "/login" ? null : <Nav />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/company" element={<Company />} />
            <Route path="/profil" element={<Profil />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserExport.ContextProvider>
  );
}

export default App;
