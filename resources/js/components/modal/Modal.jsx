import React from 'react'

export default props => (
  <div className="modal fade" id={props.id} tabindex="-1" role="dialog">
    <div className={`modal-dialog ${props.size}`} role="document">
      <div className="modal-content">{props.children}</div>
    </div>
  </div>
)