import Pagina from "../../Componentes/Pagina"
import { createContext, useState } from "react"

function Estado1(){

    let numero = 0 

    function Incrementar(){
        numero +=1
        console.log(numero)
    }

    return(
        <Pagina titulo= "Sem estado" subtitulo="conceito de estado no react">
            <div className="flex flex-col">
                <div>{numero}</div>
                <button onClick={Incrementar} className="p=2 bg-purple-500 rounded-md hover:bg-purple-300">Incrementar</button>
            </div>

        </Pagina>
    )
}

export default Estado1