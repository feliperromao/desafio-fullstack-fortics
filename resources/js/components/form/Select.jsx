import React from 'react'
/**
 * PROPS
 * data => Os dados a serem renderizados
 * index => nome do campo que será responsavel por identificar cada registro
 * title => nome do campo que será apresentado dentro dos options
 */
export default props => (
  <select
    style={props.style}
    name={props.name}
    id={props.id}
    class={ props.class ? props.class : 'custom-select' }
    onChange={props.onChange}
  >
  <option value="">- Selecione -</option>
    {
      props.data ?
      props.data.map( item => (
        <option
          key={item[props.index]}
          value={item[props.index]}
          selected={props.value == item[props.index] ? true : false}
        >
          {item[props.title]}
        </option>
      )) : null
    }
  </select>
)