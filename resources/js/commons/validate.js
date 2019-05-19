export const validate = element => {
    if( element.value ){
        element.classList.remove('is-invalid')
        element.classList.add('is-valid')
    }else{
        element.classList.remove('is-valid')
        element.classList.add('is-invalid')
    }
}

export const setInvalid = element => {
    element.classList.remove('is-valid')
    element.classList.add('is-invalid')
}

export const setValid = element => {
    element.classList.remove('is-invalid')
    element.classList.add('is-valid')
}

export const resetValidate = element => {
    element.classList.remove('is-invalid')
    element.classList.remove('is-valid')
}