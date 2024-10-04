import Pagina from '../../Componentes/Pagina'
import { useState } from 'react'
import { useRef } from 'react'

function UseRef() {
    const [estado, setEstado] = useState(0)
    const referencia = useRef(0)

    function incrementarEstado() {
        setEstado(estado + 1)

    }

    function IncrementarReferencia() {
        referencia.current += 1
    }

    return (
        <Pagina titulo="useREf" subtitulo="Hooks Básicos">
            <div>
                {`Ref: ${referencia.current} | State: ${estado}`}
            </div>
            <div>
                <button className='bg-red-400' onClick={IncrementarReferencia}>Ref +</button>
                <button className='bg-purple-500' onClick={incrementarEstado}>State +</button>
            </div>
        </Pagina>
    )
}

export default UseRef;