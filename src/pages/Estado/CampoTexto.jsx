import { useState } from "react"
import Pagina from "../../Componentes/Pagina"

function CampoTexto(){

    const [texto, setTexto] = useState("")

    return(
        <Pagina titulo="Campo de texto" subtitulo="Conceito de estado">
            <div className="flex flex-col gap-4">
                <input type="text" className="bg-black text-white" value={texto} onChange={(e)=>setTexto(e.target.value)}/>
                <button onClick={()=>setTexto("")}>Limpar</button>
                <span className="text-2xl">{texto}</span>

            </div>
        </Pagina>
    )
}

export default CampoTexto