import React from 'react'
import PaginationLink from "./PaginationLink"

export default class Pagination extends React.Component {

  renderItens(){
    const itens = []
    for( let i = 1; i <= this.props.last_page ; i++ ){
      itens.push(<PaginationLink key={i} current={this.props.current_page} onClick={this.props.onClick} page={i} />)
    }

    return itens
  }

  render() {
    return (
      <nav>
        <ul className="pagination">
          {this.renderItens()}
        </ul>
      </nav>
    )
  }
}