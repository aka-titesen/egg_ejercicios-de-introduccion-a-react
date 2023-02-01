import React from 'react'
import Hijo from './Hijo'

const Main = () => {
    //* Llamo 2 veces al componente hijo y le paso su nombre
    //* a traves de la variable name y en cada componente hijo
    //* se imprimirán los nombres en una etiqueta <p/>
  return (
    <div>
    <Hijo name="Chiquito" />
    <Hijo name="Filomena" />
    </div>
  )
}

export default Main
