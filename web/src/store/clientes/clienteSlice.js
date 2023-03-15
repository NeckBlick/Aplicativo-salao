import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../service/api";

const initialState = {
  tipoButton: "Criar",
  loadingButton: false,
  loading: true,
  drawer: false,
  modal: false,
  clientes: [],
  cliente: {
    id: "",
    nome: "",
    email: "",
    status: "",
    data_cadastro: "",
  },
};

// Funções assíncronas
export const buscarClientes = createAsyncThunk(
  "cliente/buscarClientes",
  async () => {
    const { data } = await api.get("/clientes");
    return data;
  }
);

export const editarCliente = createAsyncThunk(
  "cliente/editarCliente",
  async (id,cliente) => {
    
    const { data } = await api.patch("/clientes/"+ id, cliente);
    console.log(data)
    return data;
  }
);

// Reducer
const clienteSlice = createSlice({
  name: "cliente",
  initialState,
  reducers: {
    setCliente(state, { payload }) {
      state.cliente = payload;
      state.tipoButton = "Editar";
      state.drawer = state.drawer ? false : true;
    },
    novoCliente(state) {
      state.tipoButton = "Criar";
      state.drawer = state.drawer ? false : true;
      state.cliente = initialState.cliente;
    },
    modalChange(state) {
      state.modal = state.modal ? false : true;
    },
    changeCliente(state, { payload: event }) {
      state.cliente[event.target.name] = event.target.value;
    }
  },
  extraReducers: {
    [buscarClientes.fulfilled]: (state, action) => {
      state.clientes = action.payload;
      state.loading = false;
    },
    [editarCliente.fulfilled]: (state, action) => {
      state.cliente = action.payload;
      state.loadingButton = false;
      state.modal = false; 
      state.drawer = false;
    },
  },
});

export const { setCliente, novoCliente,modalChange,changeCliente } = clienteSlice.actions;
export default clienteSlice.reducer;
