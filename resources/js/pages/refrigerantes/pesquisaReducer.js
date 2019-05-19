const INITIAL_VALUE = {
  marca: "",
  litragem: "",
  valor_min: "",
  valor_max: "",
  quantidade_min: "",
  quantidade_max: "",
}

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "FILTRAR_MARCA":
      return {...state, marca: action.paylaod}

    case "FILTRAR_LITRAGEM":
      return {...state, litragem: action.paylaod}

    case "FILTRAR_VALOR_MIN":
      return {...state, valor_min: action.paylaod}

    case "FILTRAR_VALOR_MAX":
      return {...state, valor_max: action.paylaod}

    case "FILTRAR_QUANTIDADE_MIN":
      return {...state, quantidade_min: action.paylaod}

    case "FILTRAR_QUANTIDADE_MAX":
      return {...state, quantidade_max: action.paylaod}

    default:
      return state
  }
}