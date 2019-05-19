export const filtrarMarca = value => ({
    type: "FILTRAR_MARCA",
    paylaod: value
})

export const filtrarLitragem = value => ({
    type: "FILTRAR_LITRAGEM",
    paylaod: value
})

export const filtrarValorMin= value => ({
    type: "FILTRAR_VALOR_MIN",
    paylaod: value
})

export const filtrarvalorMax = value => ({
    type: "FILTRAR_VALOR_MAX",
    paylaod: value
})

export const filtrarQuantidadeMin = value => ({
    type: "FILTRAR_QUANTIDADE_MIN",
    paylaod: value
})

export const filtrarQuantidadeMax = value => ({
    type: "FILTRAR_QUANTIDADE_MAX",
    paylaod: value
})