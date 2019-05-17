import React from 'react'
import Page from '../../components/commons/Page'
import Card from '../../components/card/Card'
import CardHeader from '../../components/card/CardHeader'
import CardBody from '../../components/card/CardBody'
import Table from '../../components/table/Table'
import Thead from '../../components/table/Thead'
import Tbody from '../../components/table/Tbody'

class Refrigerantes extends React.Component {
  render() {
    return (
      <Page>
        <Card>
          <CardHeader>
            <span className="h5 m-0 font-weight-bold text-primary">Tecnologias Utilizadas</span>
          </CardHeader>
          <CardBody>
            <Table style="table table-striped">
              <Thead color="thead-light">
                <tr>
                  <th>Tecnologia</th>
                  <th>Objetivo</th>
                  <th>Observação</th>
                </tr>
              </Thead>
              <Tbody>
                <tr>
                  <td>PHP 7x</td>
                  <td>Linguagem back-end</td>
                  <td>Utilizado como linguagem do lado do servidor nessa aplicação</td>
                </tr>
                <tr>
                  <td>Laravel 5.8</td>
                  <td>Framework PHP</td>
                  <td>Framework utlizado para alavancar o processo de desenvolvinento</td>
                </tr>
                <tr>
                  <td>MySQL</td>
                  <td>Persistir os dados da aplicação</td>
                  <td>Todas as tabelas foram geradas a partir das migrations com o Artisan</td>
                </tr>
                <tr>
                  <td>React JS</td>
                  <td>Construção do front-end</td>
                  <td>Framework front-end utilizado para construir a aplicação de forma rápida e escalável</td>
                </tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>

      </Page>
    )
  }
}

export default Refrigerantes;