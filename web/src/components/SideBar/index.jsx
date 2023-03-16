import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { TbCalendarTime } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { BsPersonVcard, BsMagic } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

function SideBar() {
  return (
    <div className="bg-site-black-dark h-full w-3/12 flex flex-col p-4">
      <div className="w-full">
        <img src={Logo} alt="" className="m-auto" />
      </div>
      <div className="w-full my-4">
        <ul>
          <li className="flex items-center gap-4 hover:bg-sideBar-hover h-14 text-white">
            <TbCalendarTime size={30} color="white" />
            <Link to="agendamentos" className="text-2xl text-white">
              Agendamentos
            </Link>
          </li>
          <li className="flex items-center gap-4 hover:bg-sideBar-hover active:bg-sideBar-hover h-14 text-white">
            <Link
              to="clientes"
              className="text-2xl text-white no-underline active:no-underline flex items-center gap-4"
            >
              <FaUserFriends size={30} color="white" />
              Clientes
            </Link>
          </li>
          <li className="flex items-center gap-4 hover:bg-sideBar-hover h-14 text-white">
            <BsPersonVcard size={30} color="white" />
            <Link to="colaboradores" className="text-2xl text-white">
              Colaboradores
            </Link>
          </li>
          <li className="flex items-center gap-4 hover:bg-sideBar-hover h-14 text-white">
            <BsMagic size={30} color="white" />
            <Link to="servicos" className="text-2xl text-white">
              Serviços
            </Link>
          </li>
          <li className="flex items-center gap-4 hover:bg-sideBar-hover h-14 text-white">
            <AiOutlineClockCircle size={30} color="white" />
            <Link to="horarios" className="text-2xl text-white">
              Horários
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
