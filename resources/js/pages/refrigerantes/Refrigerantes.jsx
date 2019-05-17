import React from 'react'
import Page from '../../components/commons/Page'
import Row from '../../components/layout/Row'
import Grid from '../../components/layout/Grid'
import Card from '../../components/card/Card'
import CardHeader from '../../components/card/CardHeader'
import CardBody from '../../components/card/CardBody'
import Button from '../../components/button/Button'

class Refrigerantes extends React.Component {
  render() {
    return (
      <Page>
        <Row>
          <Grid sm="12" md="12" lg="12">
            <Card>
              <CardHeader>
                <span className="h6 m-0 font-weight-bold text-primary">Meus Refrigerantes</span>
                <Button
                  title="Adicionar"
                  type="success"
                  float="right"
                  icon="fa fa-fw fa-plus"
                />
              </CardHeader>
              <CardBody>
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>Tecnologia</th>
                      <th>Objetivo</th>
                      <th>Observação</th>
                    </tr>
                  </thead>
                </table>
              </CardBody>
            </Card>
          </Grid>
        </Row>
      </Page>
    )
  }
}

export default Refrigerantes;