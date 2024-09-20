import Pagina from "../../Componentes/Pagina"
import { createContext, useState } from "react"

function Estado2(){

    const [numero, setNumero] = useState(0)

    function Incrementar(){
        setNumero(numero+1)
    }

    return(
        <Pagina titulo= "Com estado" subtitulo="conceito de estado no react">
            <div className="flex flex-col">
                <div>{numero}</div>
                <button onClick={Incrementar} className="p=2 bg-purple-500 rounded-md hover:bg-purple-300">Incrementar</button>
            </div>

        </Pagina>
    )
}

export default Estado2