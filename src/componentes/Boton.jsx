import React from "react";
import '../hojas-de-estilo/Boton.css'


function Boton(props){
  const esOperador= valor => { // estamos evaluando si es children es numero, punto   o igual y si no entonces es un operador 
    return isNaN(valor) /*confirmar que no es un numero && */ && (valor != '.' ) && (valor != '=')
  };


  return(
    <div className={`boton-contenedor ${esOperador(props.children)? 'operador': null}`}
      onClick={() => props.manejarClic(props.children)} > 
      {props.children}
    </div>
    )

}
export default Boton;