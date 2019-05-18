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