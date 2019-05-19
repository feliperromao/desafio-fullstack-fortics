import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Select from '../../components/form/Select'
import Label from '../../components/form/Label'
import Grid from '../../components/layout/Grid'
import Row from '../../components/layout/Row'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

class FormPesquisa extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <Label to="filtro_marca" title="Marca" />
          <input
            className="form-control"
            type="text"
            id="filtro_marca" />
        </div>

        <div className="form-group">
          <Label to="filtro_litragem" title="Litragem" />
          <input
            className="form-control"
            type="text"
            id="filtro_litragem" />
        </div>
      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPesquisa);