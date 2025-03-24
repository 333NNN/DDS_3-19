import React from 'react'

const Time = ({nome, estado, posicao}) => {
  return (
    <div>
        <h1>Nome do time: {nome}</h1>
        <h2>Estado do Time: {estado}</h2>
        <h2>Posição: {posicao}</h2>
    </div>
  )
}

export default Time