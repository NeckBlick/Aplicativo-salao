import "rsuite/dist/rsuite.min.css";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Table, Button, Placeholder, Drawer, Pagination, Modal } from "rsuite";
import {
  buscarClientes,
  setCliente,
  novoCliente,
  editarCliente,
  modalChange,
  changeCliente,
  cadastrarCliente
} from "../../store/clientes/clienteSlice";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
const { Column, HeaderCell, Cell } = Table;

function Clientes() {
  const {
    clientes,
    loading,
    cliente,
    drawer,
    tipoButton,
    loadingButton,
    modal,
  } = useSelector((state) => state.cliente);

  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [novoClienteDrawer, setNovoCliente] = useState({
    nome: "",
    email: "",
    status: "",
  });

  function handleNovoCliente() {
    dispatch(cadastrarCliente({cliente: {
      nome: cliente.nome,
      email: cliente.email,
      status: cliente.status,
    }}));
  }
  function handleEditarCliente() {
    dispatch(modalChange());
  }
  function handleChange(e) {
    dispatch(changeCliente(e.target));
  }
  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };
  const paginationData = clientes.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  useEffect(() => {
    dispatch(buscarClientes());
  }, [clientes]);

  return (
    <div className="w-full h-full p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Clientes</h1>
        <button
          className="bg-site-blue text-white text-lg font-medium px-4 py-3 rounded-md flex items-center"
          onClick={() => dispatch(novoCliente())}
        >
          Novo Cliente
          <AiOutlinePlus size={20} className="ml-2" />
        </button>
      </div>{" "}
      {/** Fim do header */}
      {loading && (
        <Placeholder.Grid rows={5} columns={6} active className="mt-32" />
      )}
      {!loading && (
        <div>
          <Table
            width={800}
            height={400}
            data={paginationData}
            onRowClick={(rowData) => {
              dispatch(setCliente(rowData));
            }}
          >
            <Column width={150}>
              <HeaderCell>Nome</HeaderCell>
              <Cell dataKey="nome" />
            </Column>

            <Column width={150}>
              <HeaderCell>Email</HeaderCell>
              <Cell dataKey="email" />
            </Column>

            <Column width={150}>
              <HeaderCell>Status</HeaderCell>
              <Cell dataKey="status" className="capitalize" />
            </Column>

            <Column width={150}>
              <HeaderCell>Data de cadastro</HeaderCell>
              <Cell>
                {(rowData) =>
                  moment(rowData.data_cadastro).format("DD/MM/YYYY")
                }
              </Cell>
            </Column>
            <Column width={150}>
              <HeaderCell></HeaderCell>
              <Cell className="flex items-center justify-center">
                <button
                  className="bg-site-blue rounded-md text-white font-medium px-2 py-1"
                  onClick={() => dispatch(setCliente(rowData))}
                >
                  Ver informações
                </button>
              </Cell>
            </Column>
          </Table>
          <div style={{ padding: 20 }}>
            <Pagination
              prev
              last
              next
              first
              size="lg"
              total={paginationData.length}
              limit={10}
              activePage={page}
              onChangePage={setPage}
              onChangeLimit={handleChangeLimit}
            />
          </div>
        </div>
      )}
      {/* Abertura do Drawer */}
      <Drawer open={drawer} onClose={() => dispatch(setCliente())}>
        <Drawer.Header>
          <Drawer.Title className="text-3xl text-site-black-dark">
            {tipoButton === "Criar" ? "Novo Cliente" : "Editar Cliente"}
          </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <div className="grid grid-rows-2 grid-cols-2 gap-x-2">
            <div className="flex flex-col">
              <label className="text-lg text-site-black-dark">Nome</label>
              <input
                type={"text"}
                className="border-2 border-site-gray-light rounded-md p-2"
                value={ cliente.nome }
                name="nome"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg text-site-black-dark">Status</label>
              <select
                className="border-2 border-site-gray-light rounded-md p-2"
                value={ cliente.status }
                name="status"
                onChange={handleChange}
              >
                <option selected disabled>
                  Selecione uma opção
                </option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
            </div>
            <div className="col-span-2 flex flex-col mb-8">
              <label className="text-lg text-site-black-dark">Email</label>
              <input
                type={"text"}
                className="border-2 border-site-gray-light rounded-md p-2"
                value={cliente.email }
                name="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <Button
            onClick={
              tipoButton === "Criar" ? handleNovoCliente : handleEditarCliente
            }
            className="bg-site-blue w-full text-lg text-white"
          >
            {tipoButton} cliente
          </Button>
        </Drawer.Body>
      </Drawer>
      <Modal
        size="xs"
        backdrop="static"
        role="alertdialog"
        open={modal}
        onClose={() => dispatch(modalChange())}
      >
        <Modal.Header>
          <Modal.Title>Editar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-lg">
            Você tem certeza que vai editar esse cliente?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            appearance="primary"
            onClick={() =>
              dispatch(
                editarCliente({
                  id: cliente._id,
                  cliente: {
                    nome: cliente.nome,
                    email: cliente.email,
                    status: cliente.status,
                  },
                })
              )
            }
            loading={loadingButton}
            className="bg-site-blue text-base"
          >
            Ok
          </Button>
          <Button
            onClick={() => dispatch(modalChange())}
            appearance="subtle"
            className="text-base"
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Clientes;
