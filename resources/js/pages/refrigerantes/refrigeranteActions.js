import axios from 'axios'
import {validate} from '../../commons/validate'
import { base_url } from '../../main/config'
import { toast } from 'react-toastify';
toast.configure()

export const listar = () => {
  return (dispatch) => {
    showLoading()
    const url = base_url('api/refrigerantes')
    axios.get(url)
      .then(resp => dispatch({
        type: 'LISTAR_REFRIGERANTES',
        payload: resp.data ? resp.data.data : []
      }))
      .then(hideLoading())
      .catch(err => {
        hideLoading()
        toast.error('Náo foi possivel conectar com o servidor...')
      })
  }
}

export const salvar = () => {
  return (dispatch, getState) => {
    
    validate(document.getElementById("marca"))
    validate(document.getElementById("sabor"))
    validate(document.getElementById("litragem"))
    validate(document.getElementById("tipo"))
    validate(document.getElementById("quantidade"))
    validate(document.getElementById("valor"))

    const {
      id,
      valor,
      quantidade,
      marca,
      tipo_id,
      sabor_id,
      litragem_id,
    } = getState().refrigerante.data

    if (valor && quantidade && marca && tipo_id && sabor_id && litragem_id) {
      showLoading()

      const config = { headers: { 'content-type': 'application/x-www-form-urlencoded' } }
      const formData = new FormData()
      formData.append('valor', valor)
      formData.append('quantidade', quantidade)
      formData.append('marca', marca)
      formData.append('tipo_id', tipo_id)
      formData.append('sabor_id', sabor_id)
      formData.append('litragem_id', litragem_id)

      let url = ''
      if (id) {
        formData.append('_method', 'PUT')

        url = base_url(`api/refrigerantes/${id}`)
        axios.post(url, formData, config)
          .then(dispatch(listar()))
          .then(_ => {
            hideLoading()
            toast.success('Atualizado com sucesso!')
          })
          .catch(_ => {
            hideLoading()
            toast.error('Náo foi possivel salvar...')
          })
      } else {
        url = base_url('api/refrigerantes')
        axios.post(url, formData, config)
          .then(dispatch(listar()))
          .then(_ => {
            hideLoading()
            toast.success('Adicionado com sucesso!')
          })
          .catch(_ => {
            hideLoading()
            toast.error('Náo foi possivel salvar...')
          })
      }
    } else {
      toast.error('Por favor preencha os campos obrigatórios.')
    }

  }
}

export const excluir = id => {
  return dispatch => {
    const url = base_url(`api/refrigerantes/${id}`)
    axios.delete(url)
      .then(dispatch(listar()))
      .then(_ => {
        toast.warn('Excluido com sucesso!')
      })
      .catch(_ => toast.error('Náo foi possivel excluir...'))
  }
}

export const listarLitragens = () => {
  return dispatch => {
    const url = base_url('api/litragens')
    axios.get(url)
      .then(resp => dispatch({
        type: 'LISTAR_LITRAGENS',
        payload: resp.data
      }))
  }
}

export const listarSabores = () => {
  return dispatch => {
    const url = base_url('api/sabores')
    axios.get(url)
      .then(resp => dispatch({
        type: 'LISTAR_SABORES',
        payload: resp.data
      }))
  }
}

export const listarTipos = () => {
  return dispatch => {
    const url = base_url('api/tipos')
    axios.get(url)
      .then(resp => dispatch({
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

export const setRefrigerante = data => ({
  type: 'SET_ REFRIGERANTE',
  payload: data
})

export const clearData = () => ({
  type: 'CLEAR_FORMDATA'
})