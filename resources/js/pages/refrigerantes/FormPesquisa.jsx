import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Select from '../../components/form/Select'
import Label from '../../components/form/Label'
import Grid from '../../components/layout/Grid'
import Row from '../../components/layout/Row'
import Button from "../../components/button/Button"

const mapStateToProps = state => ({
  litragens: state.refrigerante.litragens,
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

class FormPesquisa extends React.Component {

  handleChangeLitragem(){

  }

  render() {
    return (
      <form>
        <Row>
          <Grid lg="3" md="4" sm="6" xs="12">
            <div className="form-group">
              <Label to="filtro_marca" title="Marca:" />
              <input
                className="form-control form-control-sm"
                type="text"
                id="filtro_marca" />
            </div>
          </Grid>
          <Grid lg="3" md="4" sm="6" xs="12">
            <div className="form-group">
              <Label to="filtro_litragem" title="Litragem:" />
              <Select
                data={this.props.litragens}
                value={this.props.litragem_id}
                onChange={this.handleChangeLitragem.bind(this)}
                className="custom-select custom-select-sm"
                id="litragem"
                index="id"
                title="descricao"
              />
            </div>
          </Grid>
          <Grid lg="3" md="4" sm="6" xs="12">
            <div className="form-group">
              <Label to="filtro_valor" title="Valor:" />
              <div className="input-group">
                <input
                  className="form-control form-control-sm"
                  placeholder="min"
                />
                <input
                  className="form-control form-control-sm"
                  placeholder="max"
                />
              </div>
            </div>
          </Grid>
          <Grid lg="3" md="4" sm="6" xs="12">
            <div className="form-group">
              <Label to="filtro_quantidade" title="Quantidade:" />
              <div className="input-group">
                <input
                  className="form-control form-control-sm"
                  placeholder="min"
                />
                <input
                  className="form-control form-control-sm"
                  placeholder="max"
                />
              </div>
            </div>
          </Grid>
        </Row>
        <Row>
          <Grid lg="12">
            <Button
              type="secondary"
              icon="fa fa-fw fa-search"
              title="Pesquisar"
              float="right"
            />
          </Grid>
        </Row>
      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPesquisa);