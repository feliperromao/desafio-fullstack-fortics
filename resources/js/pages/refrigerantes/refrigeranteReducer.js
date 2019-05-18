const INITIAL_VALUE = {
  list: [],
  filters: {},
  data: {
    valor: "",
    quantidade: "",
    marca: "",
    tipo_id: "",
    sabor_id: "",
    litragem_id: "",
  },

}

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case 'SET_VALOR':
      return {
        ...state,
        data: {
          ...state.data,
          valor: action.payload
        }
      }

    case 'SET_QUANTIDADE':
      return {
        ...state,
        data: {
          ...state.data,
          quantidade: action.payload
        }
      }

    case 'SET_MARCA':
      return {
        ...state,
        data: {
          ...state.data,
          marca: action.payload
        }
      }

    case 'SET_TIPO':
      return {
        ...state,
        data: {
          ...state.data,
          tipo_id: action.payload
        }
      }

    case 'SET_SABOR':
      return {
        ...state,
        data: {
          ...state.data,
          sabor_id: action.payload
        }
      }

    case 'SET_LITRAGEM':
      return {
        ...state,
        data: {
          ...state.data,
          litragem_id: action.payload
        }
      }

    case 'LISTAR_REFRIGERANTES':
      return {
        ...state,
        list: action.payload
      }

    default:
      return state
  }
}