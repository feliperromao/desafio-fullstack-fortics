import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Select from '../../components/form/Select'
import Label from '../../components/form/Label'
import Grid from '../../components/layout/Grid'
import Row from '../../components/layout/Row'
import Button from "../../components/button/Button"
import { listar as pesquisar } from "./refrigeranteActions"
import {
  filtrarMarca,
  filtrarLitragem,
  filtrarValorMin,
  filtrarvalorMax,
  filtrarQuantidadeMin,
  filtrarQuantidadeMax,
} from "./pesquisaActions"

const mapStateToProps = state => ({
  litragens: state.refrigerante.litragens,
  marca: state.pesquisa.marca,
  litragem: state.pesquisa.litragem,
  valor_min: state.pesquisa.valor_min,
  valor_max: state.pesquisa.valor_max,
  quantidade_min: state.pesquisa.quantidade_min,
  quantidade_max: state.pesquisa.quantidade_max,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  pesquisar,
  filtrarMarca,
  filtrarLitragem,
  filtrarValorMin,
  filtrarvalorMax,
  filtrarQuantidadeMin,
  filtrarQuantidadeMax,
}, dispatch)

class FormPesquisa extends React.Component {

  render() {
    return (
      <form>
        <Row>
          <Grid lg="3" md="4" sm="6" xs="12">
            <div className="form-group">
              <Label to="filtro_marca" title="Marca:" />
              <input
                value={this.props.marca}
                onChange={event => this.props.filtrarMarca(event.target.value)}
                className="form-control form-control-sm"
                type="text"
                id="filtro_marca" />
            </div>
          </Grid>
          <Grid lg="2" md="4" sm="6" xs="12">
            <div className="form-group">
              <Label to="filtro_litragem" title="Litragem:" />
              <Select
                data={this.props.litragens}
                value={this.props.litragem}
                onChange={event => this.props.filtrarLitragem(event.target.value)}
                className="custom-select custom-select-sm"
                id="filtro_litragem"
                index="id"
                title="descricao"
              />
            </div>
          </Grid>
          <Grid lg="3" md="4" sm="6" xs="12">
            <div className="form-group">
              <Label to="filtro_valor" title="Preço:" />
              <div className="input-group">
                <input
                  value={this.props.valor_min}
                  onChange={event => this.props.filtrarValorMin(event.target.value)}
                  className="form-control form-control-sm"
                  placeholder="min"
                />
                <input
                  value={this.props.valor_max}
                  onChange={event => this.props.filtrarvalorMax(event.target.value)}
                  className="form-control form-control-sm"
                  placeholder="max"
                />
              </div>
            </div>
          </Grid>
          <Grid lg="3" md="6" sm="6" xs="12">
            <div className="form-group">
              <Label to="filtro_quantidade" title="Quantidade:" />
              <div className="input-group">
                <input
                  value={this.props.quantidade_min}
                  onChange={event => this.props.filtrarQuantidadeMin(event.target.value)}
                  className="form-control form-control-sm"
                  placeholder="min"
                />
                <input
                  value={this.props.quantidade_max}
                  onChange={event => this.props.filtrarQuantidadeMax(event.target.value)}
                  className="form-control form-control-sm"
                  placeholder="max"
                />
              </div>
            </div>
          </Grid>
          <Grid lg="1" md="6" sm="12" sx="12">
            <div style={{marginTop: 30}} className="form-group">
              <Button
                type="primary"
                icon="fa fa-fw fa-search"
                float="right"
                size="block"
                size2="sm"
                onClick={this.props.pesquisar}
              />
            </div>
          </Grid>
        </Row>
        <hr/>
      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPesquisa);