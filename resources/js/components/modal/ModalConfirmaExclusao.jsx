import React from 'react'

/**
 * PROPS
 * id
 * title
 * mensagem
 * 
 * Callback confirmarExclusao
 */
class ModalConfirmaExclusao extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="modal fade" id={this.props.id} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{this.props.mensagem}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button onClick={() => this.confirmarExclusao()} type="button" data-dismiss="modal" className="btn btn-danger">
                <i className="fas fa-trash-alt"></i> Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  confirmarExclusao() {
    this.props.confirmarExclusao()
  }
}

export default ModalConfirmaExclusao;