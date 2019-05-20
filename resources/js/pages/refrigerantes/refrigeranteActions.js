import axios from 'axios'
import { toast } from 'react-toastify';
import {validate} from '../../commons/validate'
import {showLoading, hideLoading} from "../../commons/loading"
import { base_url } from '../../main/config'
toast.configure()

export const listar = (page = 1) => {
  return (dispatch, getState) => {
    showLoading()
    let url = base_url(`api/refrigerantes?page=${page}`)

    const {
      marca,
      litragem,
      valor_min,
      valor_max,
      quantidade_min,
      quantidade_max,
    } = getState().pesquisa

    if(marca || litragem || valor_min || valor_max || quantidade_min || quantidade_max){
      if(marca) url += `&marca=${marca}`
      if(litragem) url += `&litragem=${litragem}`
      if(valor_min) url += `&valor_min=${valor_min}`
      if(valor_max) url += `&valor_max=${valor_max}`
      if(quantidade_min) url += `&quantidade_min=${quantidade_min}`
      if(quantidade_max) url += `&quantidade_max=${quantidade_max}`
    }

    axios.get(url)
      .then(resp => {
        // Capturar as informações de paginação
        dispatch({type: "UPDATE_PAGINATE", payload: resp.data})
        return resp
      })
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