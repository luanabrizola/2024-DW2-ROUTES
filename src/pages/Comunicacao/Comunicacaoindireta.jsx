import Pagina from "../../Componentes/Pagina"
import PaiIndireta from "../../Componentes/Comunicacao/indireta/PaiIndireta"

function ComunicacaoIndireta(){
    return(
        <Pagina titulo="Comunicação indireta" subtitulo=" exemplo decomunicação indireta entre componentes">
            <PaiIndireta/>
        </Pagina>
    )


}

export default ComunicacaoIndireta