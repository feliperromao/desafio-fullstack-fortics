import React from 'react'
import { connect,  } from 'react-redux'
import { bindActionCreators } from 'redux'
import format from 'format-number'
import Page from '../../components/commons/Page'
import Row from '../../components/layout/Row'
import Grid from '../../components/layout/Grid'
import Card from '../../components/card/Card'
import CardHeader from '../../components/card/CardHeader'
import CardBody from '../../components/card/CardBody'
import Button from '../../components/button/Button'
import Table from '../../components/table/Table'
import Thead from '../../components/table/Thead'
import Tbody from '../../components/table/Tbody'
import Label from '../../components/form/Label'
import ModalCadastro from "./ModalCadastro"
import ModalExcluir from '../../components/modal/ModalConfirmaExclusao'
import FormPesquisa from "./FormPesquisa"
import {resetValidate} from "../../commons/validate"
import {
  listar,
  excluir,
  clearData,
  setRefrigerante,
  listarLitragens,
  listarSabores,
  listarTipos,
} from './refrigeranteActions'

const mapStateToProps = state => ({
  list: state.refrigerante.list
})

const mapDispatchToProps = dispatch => bindActionCreators({
  listar,
  listarLitragens,
  listarSabores,
  listarTipos,
  excluir,
  clearData,
  setRefrigerante,
}, dispatch)

class Refrigerantes extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      id_excluir: "",
      thead: ['Selecionar', 'Marca', 'Sabor', 'Litragem', 'Tipo', 'Quantidade', 'Preço', 'Editar/Excluir']
    }
  }

  componentWillMount(){
    this.props.listar()
    this.props.listarLitragens()
    this.props.listarSabores()
    this.props.listarTipos()
  }

  handleAdicionar(){
    this.props.clearData()

    resetValidate(document.getElementById("marca"))
    resetValidate(document.getElementById("sabor"))
    resetValidate(document.getElementById("litragem"))
    resetValidate(document.getElementById("tipo"))
    resetValidate(document.getElementById("quantidade"))
    resetValidate(document.getElementById("valor"))

  }

  handleEditar(item){
    this.props.setRefrigerante(item)

    resetValidate(document.getElementById("marca"))
    resetValidate(document.getElementById("sabor"))
    resetValidate(document.getElementById("litragem"))
    resetValidate(document.getElementById("tipo"))
    resetValidate(document.getElementById("quantidade"))
    resetValidate(document.getElementById("valor"))
  }

  handleExcluir(id){
    const state = this.state
    state.id_excluir = id
    this.setState(state)
  }

  confirmaExcluir(){
    this.props.excluir(this.state.id_excluir)
  }

  renderItens(){
    const itens = this.props.list || []
    return itens.map( item => (
      <tr key={item.id}>
        <td className="text-center">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id={`select_${item.id}`} />
          <label className="custom-control-label" htmlFor={`select_${item.id}`}></label>
        </div>
        </td>
        <td>
          <Label
            to={`select_${item.id}`}
            title={item.marca} />
        </td>
        <td>{item.sabor.descricao}</td>
        <td>{item.litragem.descricao}</td>
        <td>{item.tipo.descricao}</td>
        <td>{item.quantidade}</td>
        <td>{format({prefix: 'R$ ', decimal: ',', padRight: 2})(item.valor)}</td>
        <td className="btn-acoes text-center">
          <Button
            icon="fas fa-pen"
            type="outline-secondary"
            size="sm"
            toggle="modal"
            target="#md_cadastro_refrigerantes"
            onClick={() => this.handleEditar(item)}
          />
          <Button
            onClick={() => this.handleExcluir(item.id)}
            toggle="modal"
            target="#md_excluir_refrigerante"
            icon="fas fa-trash"
            type="outline-danger"
            size="sm"
          />
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <Page>
        <Row>
          <Grid sm="12" md="12" lg="12">
            <Card>
              <CardHeader>
                <span className="h5 m-0 font-weight-bold text-primary">Meus Refrigerantes</span>
                <Button
                  title="Adicionar"
                  type="success"
                  float="right"
                  icon="fa fa-fw fa-plus"
                  toggle="modal"
                  target="#md_cadastro_refrigerantes"
                  onClick={this.handleAdicionar.bind(this)}
                />
              </CardHeader>
              <CardBody>
                <FormPesquisa />
                <Table style="table-responsive-lg">
                  <Thead itens={this.state.thead} color="thead-light" align="center" />
                  <Tbody>{this.renderItens()}</Tbody>
                </Table>
              </CardBody>
            </Card>
          </Grid>
        </Row>
        <ModalCadastro />
        <ModalExcluir
          id="md_excluir_refrigerante"
          title="Excluir Refrigerante"
          mensagem="Tem certeza que deseja excluir?"
          confirmarExclusao={this.confirmaExcluir.bind(this)}
          />
      </Page>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Refrigerantes);