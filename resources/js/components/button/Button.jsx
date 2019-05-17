import React from 'react'

class Button extends React.Component{
  render(){
    let style = `btn btn-${this.props.type}`
    if ( this.props.size ) style += ` btn-${this.props.size}`
    if( this.props.float ) style += ` float-${this.props.float}`
    return(
      <button
        id={this.props.id}
        className={style}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        data-dismiss={this.props.dismiss}
        data-toggle={this.props.toggle}
        data-target={this.props.target}
        type="button"
      >
        { this.props.icon ? <i className={this.props.icon}></i> : '' } {this.props.title}
      </button>
    )
  }
}

export default Button;