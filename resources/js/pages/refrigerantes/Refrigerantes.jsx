import React from 'react'
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

class Refrigerantes extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      thead: ['Selecionar', 'Marca', 'Sabor', 'Litragem', 'Tipo', 'Quantidade', 'Preço', 'Editar/Excluir']
    }
  }

  renderItens(){

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

export default Refrigerantes;