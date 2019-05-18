import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Select from '../../components/form/Select'
import Label from '../../components/form/Label'
import Grid from '../../components/layout/Grid'
import Row from '../../components/layout/Row'
import {
  setLitragem,
  setMarca,
  setQuantidade,
  setSabor,
  setTipo,
  setValor,
  listarLitragens,
  listarSabores,
  listarTipos,
} from './refrigeranteActions'

const mapStateToProps = state => ({
  valor: state.refrigerante.data.valor,
  quantidade: state.refrigerante.data.quantidade,
  marca: state.refrigerante.data.marca,
  tipo_id: state.refrigerante.data.tipo_id,
  sabor_id: state.refrigerante.data.sabor_id,
  litragem_id: state.refrigerante.data.litragem_id,
  litragens: state.refrigerante.litragens,
  sabores: state.refrigerante.sabores,
  tipos: state.refrigerante.tipos,
})
const mapDispatchToProps = dispatch => bindActionCreators({
  setLitragem,
  setMarca,
  setQuantidade,
  setSabor,
  setTipo,
  setValor,
  listarLitragens,
  listarSabores,
  listarTipos,
}, dispatch)

class FormCadastro extends React.Component {

  componentWillMount(){
    this.props.listarLitragens()
    this.props.listarSabores()
    this.props.listarTipos()
  }

  handleChangeMarca(event){
    const value = event.target.value
    const target = event.target

    if(!value){
      target.classList.remove('is-valid')
      target.classList.add('is-invalid')
    }else{
      target.classList.remove('is-invalid')
      target.classList.add('is-valid')
    }

    this.props.setMarca(value)
  }

  handleChangeSabor(event){
    const value = event.target.value
    const target = event.target

    if(!value){
      target.classList.remove('is-valid')
      target.classList.add('is-invalid')
    }else{
      target.classList.remove('is-invalid')
      target.classList.add('is-valid')
    }

    this.props.setSabor(value)

  }

  handleChangeLitragem(event){
    const value = event.target.value
    const target = event.target

    if(!value){
      target.classList.remove('is-valid')
      target.classList.add('is-invalid')
    }else{
      target.classList.remove('is-invalid')
      target.classList.add('is-valid')
    }

    this.props.setLitragem(value)

  }

  handleChangeTipo(event){
    const value = event.target.value
    const target = event.target

    if(!value){
      target.classList.remove('is-valid')
      target.classList.add('is-invalid')
    }else{
      target.classList.remove('is-invalid')
      target.classList.add('is-valid')
    }

    this.props.setTipo(value)

  }

  handleChangeQuantidade(event){
    const value = event.target.value
    const target = event.target

    if(!value){
      target.classList.remove('is-valid')
      target.classList.add('is-invalid')
    }else{
      target.classList.remove('is-invalid')
      target.classList.add('is-valid')
    }

    this.props.setQuantidade(value)

  }

  handleChangeValor(event){
    const value = event.target.value
    const target = event.target

    if(!value){
      target.classList.remove('is-valid')
      target.classList.add('is-invalid')
    }else{
      target.classList.remove('is-invalid')
      target.classList.add('is-valid')
    }

    this.props.setValor(value)
  
  }

  render() {
    return (
      <form>
        <Row>
          <Grid sm="12" md="6">
            <div className="form-group">
              <Label to="marca" title="Marca: " required={true} />
              <input
                value={this.props.marca}
                onChange={this.handleChangeMarca.bind(this)}
                placeholder="Ex: Cola Cola"
                id="marca"
                className="form-control"
                type="text"/>
            </div>
          </Grid>
          <Grid sm="12" md="6">
            <div className="form-group">
              <Label to="sabor" title="Sabor: " required={true} />
              <Select
                data={this.props.sabores}
                value={this.props.sabor_id}
                onChange={this.handleChangeSabor.bind(this)}
                id="sabor"
                index="id"
                title="descricao"
              />
            </div>
          </Grid>
        </Row>
        <Row>
          <Grid sm="12" md="6">
            <div className="form-group">
              <Label to="litragem" title="Litragem: " required={true} />
              <Select
                data={this.props.litragens}
                value={this.props.litragem_id}
                onChange={this.handleChangeLitragem.bind(this)}
                id="litragem"
                index="id"
                title="descricao"
              />
            </div>
          </Grid>
          <Grid sm="12" md="6">
            <div className="form-group">
              <Label to="tipo" title="Tipo: " required={true} />
              <Select
                data={this.props.tipos}
                value={this.props.tipo_id}
                onChange={this.handleChangeTipo.bind(this)}
                id="tipo"
                index="id"
                title="descricao"
              />
            </div>
          </Grid>
        </Row>
        <Row>
          <Grid sm="12" md="6">
            <div className="form-group">
              <Label to="quantidade" title="Quantidade: " required />
              <input
                value={this.props.quantidade}
                onChange={this.handleChangeQuantidade.bind(this)}
                valor="quantidade"
                min={0}
                className="form-control"
                type="number"/>
            </div>
          </Grid>
          <Grid sm="12" md="6">
            <div className="form-group">
              <Label to="valor" title="Valor (R$): " required />
              <input
                value={this.props.valor}
                onChange={this.handleChangeValor.bind(this)}
                id="valor"
                min={0}
                step="0.01"
                className="form-control"
                type="number"/>
            </div>
          </Grid>
        </Row>
      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCadastro);