import React from 'react'

function Boton({texto, color}) {
    console.log(texto);
  return (
    <div className={`p-7 ${color}`}>
        {texto}
    </div>
  )
}

export default Boton
