import axios from 'axios'
import { base_url } from '../../main/config'

export const listar = () => {
  return (dispatch, getState) => {
    const url = base_url('api/refrigerantes')
    axios.get(url)
      .then( resp => dispatch({
        type: 'LISTAR_REFRIGERANTES',
        payload: resp.data ? resp.data.data : []
      }))
  }
}

export const salvar = () => {
  return (dispatch, getState) => {
    let url = ''
    const {
      id,
      valor,
      quantidade,
      marca,
      tipo_id,
      sabor_id,
      litragem_id,
    } = getState().refrigerante.data

    if(id){
      url = base_url('api/')
    }else{
      
    }
  }
}