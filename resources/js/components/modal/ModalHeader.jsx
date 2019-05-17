import React from 'react'

export default props => (
  <div className="modal-header">
    {props.children}
    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
)