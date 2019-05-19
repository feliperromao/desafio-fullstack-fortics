import React from 'react'
import { connect, } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from "../../components/modal/Modal"
import ModalHeader from "../../components/modal/ModalHeader"
import ModalBody from "../../components/modal/ModalBody"
import ModalFooter from "../../components/modal/ModalFooter"
import Button from "../../components/button/Button"
import FormCadastro from "./FormCadastro"
import {salvar} from './refrigeranteActions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
  salvar,
}, dispatch)

class ModalCadastro extends React.Component {
  render() {
    return (
      <Modal id="md_cadastro_refrigerantes">
        <ModalHeader>
          <h6>Cadastro de Refrigerantes</h6>
        </ModalHeader>
        <ModalBody>
          <FormCadastro />
        </ModalBody>
        <ModalFooter>
          <Button
            type="secondary"
            title="Cancelar"
            dismiss="modal"
          />
          <Button
            type="primary"
            title="Salvar"
            icon="fa fa-fw fa-save"
            onClick={this.props.salvar}
          />
        </ModalFooter>
      </Modal>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCadastro);