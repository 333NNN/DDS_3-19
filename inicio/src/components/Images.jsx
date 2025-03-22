import React from 'react'
import Onca from "../../public/onca.jpg"

const Images = () => {
  return (
    <div>
        <h1>Imagens</h1>
        <img src="./" alt="" width={200} height={200}/>
        <h2>Imagens importada de assets</h2>
        <img src={Onca} alt=""/>
    </div>
  )
}

export default Images