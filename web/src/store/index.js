import { configureStore } from '@reduxjs/toolkit'

import clienteReducer from './clientes/clienteSlice'

export default configureStore({
    reducer: {
        cliente: clienteReducer,
    }
})