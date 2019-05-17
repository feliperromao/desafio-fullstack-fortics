import React from 'react'
class Card extends React.Component {
  constructor(props){
    super(props)
  }
  render() {

    return (
      <div className="card shadow md-4">
        {this.props.children }
      </div>
    );
  }
}

export default Card;