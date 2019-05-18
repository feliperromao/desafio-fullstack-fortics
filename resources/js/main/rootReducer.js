import { combineReducers } from 'redux'
import refrigeranteReducer from '../pages/refrigerantes/refrigeranteReducer'

export default combineReducers({
    refrigerante: refrigeranteReducer,
})