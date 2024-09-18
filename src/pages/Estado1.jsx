import Pagina from "../Componentes/Pagina"
import { useState } from "react"

function Estado1(){
    let numero = 11

    const [num, alteraNum]=useState(0)
    // const estado=useState(500)
    // const num= estado[0]
    // const alteraNum =estado[1]

    console.log(num)

    function incrementar(){
        numero = numero + 1
        console.log(numero)

        alteraNum(200)

    }


    return(
        <Pagina titulo= "Estado 1" subtitulo="conceito de estado no react">
            <div>
                <div>{num}</div>
                <button className="bg-slate-500 p-4 rounded-md" onClick={incrementar}></button>
            </div>

        </Pagina>
    )
}

export default Estado1