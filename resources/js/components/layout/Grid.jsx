import React from 'react'

class Grid extends React.Component{
    render(){
        let cols = ''
        
        if (this.props.col) cols += `col-${this.props.col }`

        if (this.props.xl) cols += ` col-xl-${this.props.xl }`
        if (this.props.lg) cols += ` col-lg-${this.props.lg }`
        if (this.props.md) cols += ` col-md-${this.props.md }`
        if (this.props.sm) cols += ` col-sm-${this.props.sm }`

        return(
            <div className={ cols } >
                {this.props.children}
            </div>
        )
    }
}