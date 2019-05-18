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
    
    const {
      id,
      valor,
      quantidade,
      marca,
      tipo_id,
      sabor_id,
      litragem_id,
    } = getState().refrigerante.data

    const config = {headers:{'Content-Type':'multipart-form-data'}}

    const formData = new FormData()
    formData.append('valor', valor)
    formData.append('quantidade', quantidade)
    formData.append('marca', marca)
    formData.append('tipo_id', tipo_id)
    formData.append('sabor_id', sabor_id)
    formData.append('litragem_id', litragem_id)

    let url = ''
    if(id){
      url = base_url(`api/refrigerantes/${id}`)
      axios.put(url, formData, config)
        .then(console.log('Editado com sucesso...'))
    }else{
      url = base_url('api/refrigerantes')
      axios.post(url, formData, config)
        .then(console.log('Adicionado com sucesso...'))
    }
  }
}

export const listarLitragens = () => {
  return dispatch => {
    const url = base_url('api/litragens')
    axios.get(url)
      .then( resp => dispatch({
        type: 'LISTAR_LITRAGENS',
        payload: resp.data
      }))
  }
}

export const listarSabores = () => {
  return dispatch => {
    const url = base_url('api/sabores')
    axios.get(url)
      .then( resp => dispatch({
        type: 'LISTAR_SABORES',
        payload: resp.data
      }))
  }
}

export const listarTipos = () => {
  return dispatch => {
    const url = base_url('api/tipos')
    axios.get(url)
      .then( resp => dispatch({
        type: 'LISTAR_TIPOS',
        payload: resp.data
      }))
  }
}

export const setValor = value => ({
  type: 'SET_VALOR',
  payload: value
})

export const setQuantidade = value => ({
  type: 'SET_QUANTIDADE',
  payload: value
})

export const setMarca = value => ({
  type: 'SET_MARCA',
  payload: value
})

export const setTipo = value => ({
  type: 'SET_TIPO',
  payload: value
})

export const setSabor = value => ({
  type: 'SET_SABOR',
  payload: value
})

export const setLitragem = value => ({
  type: 'SET_LITRAGEM',
  payload: value
})