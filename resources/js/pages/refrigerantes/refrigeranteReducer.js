const DEFAULT_DATA = {
  valor: "",
  quantidade: "",
  marca: "",
  tipo_id: "",
  sabor_id: "",
  litragem_id: "",
}

const INITIAL_VALUE = {
  list: [],
  litragens: [],
  sabores: [],
  tipos: [],
  data: DEFAULT_DATA,
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

    case 'SET_ REFRIGERANTE':
      return {
        ...state,
        data: action.payload
      }

    case 'CLEAR_FORMDATA':
      return {
        ...state,
        data: DEFAULT_DATA
      }

    case 'LISTAR_REFRIGERANTES':
      return {
        ...state,
        list: action.payload
      }

    case "LISTAR_LITRAGENS":
      return {
        ...state,
        litragens: action.payload,
      }

    case "LISTAR_SABORES":
      return {
        ...state,
        sabores: action.payload,
      }

    case "LISTAR_TIPOS":
      return {
        ...state,
        tipos: action.payload,
      }

    default:
      return state
  }
}