import React from 'react'
// * Recibe por parámetro un variable que será el nombre del hijo
// * props a ésta variable extraigo su valor como en la línea 7
const Hijo = (props) => {
  return (
    <div>
      <p>Nombre: {props.name}</p>
    </div>
  )
}

export default Hijo
