import React from 'react'
/**
 * PROPS
 * color
 * align
 * itens
 */
class Thead extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      theadColor: this.props.color,
      alignment: this.props.align,
      itens: this.props.itens || []
    }
  }
  renderItens(){
    const itens = this.state.itens || []
    return itens.map( i => (
      <th>{i}</th>
    ))
  }
  render(){
    let style = ''
    if( this.state.theadColor ){
      style += ' ' +  this.state.theadColor
    }
    if( this.state.theadColor ){
      style += ' ' +  this.state.alignment
    }
    return(
      <thead className={style}>
        <tr>{this.renderItens()}</tr>
        { this.props.children }
      </thead>
    )
  }
}

export default Thead;