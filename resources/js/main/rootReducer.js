import { combineReducers } from 'redux'
import refrigeranteReducer from '../pages/refrigerantes/refrigeranteReducer'
import pesquisaReducer from "../pages/refrigerantes/pesquisaReducer"

export default combineReducers({
    refrigerante: refrigeranteReducer,
    pesquisa: pesquisaReducer
})