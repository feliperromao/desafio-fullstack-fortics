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
import {listar} from './refrigeranteActions'

const mapStateToProps = state => ({
  list: state.refrigerante.list
})
const mapDispatchToProps = dispatch => bindActionCreators({
  listar,
}, dispatch)

class Refrigerantes extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      thead: ['Selecionar', 'Marca', 'Sabor', 'Litragem', 'Tipo', 'Quantidade', 'Preço', 'Editar/Excluir']
    }
  }

  componentWillMount(){
    this.props.listar()
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
          />
          <Button
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
                />
              </CardHeader>
              <CardBody>
                <Table style="table-responsive-lg">
                  <Thead itens={this.state.thead} color="thead-light" align="center" />
                  <Tbody>{this.renderItens()}</Tbody>
                </Table>
              </CardBody>
            </Card>
          </Grid>
        </Row>
      </Page>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Refrigerantes);