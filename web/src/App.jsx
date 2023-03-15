import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Agendamentos from "./pages/Agendamentos";
import Clientes from "./pages/Clientes";
import Colaboradores from "./pages/Colaboradores";
import Horarios from "./pages/Horarios";
import Servicos from "./pages/Servicos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="w-full h-full">
        <div className="h-full flex">
        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route path="/agendamentos" element={<Agendamentos/>} />
            <Route path="/clientes" element={<Clientes/>} />
            <Route path="/colaboradores" element={<Colaboradores/>} />
            <Route path="/servicos" element={<Servicos/>} />
            <Route path="/horarios" element={<Horarios/>} />
          </Routes>
        </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
