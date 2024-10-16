import Pagina from "../Componentes/Pagina"


function Tradutor(){
    return(
        <Pagina titulo="Tradutor" subtitulo="Traduzir palavras e frases.">
            <h1 className="font-bold text-5xl">Tradutor</h1>
            <div className="flex p-5 gap-5">
                <div className="relative">
                    <h2>Português</h2>
                    <div>
                        <textarea className="w-full h-40 text-lg  resize-none"></textarea>
                        <span className="absolute bottom-1 start-0 px-3 py-1">Contador</span>
                        <button className="absolute bottom-2 right-2 px-3 py-1 bg-blue-500 text-white rounded">Traduzir</button>
                    </div>
                </div>
                <div className="ingles">
                    <h2>Inglês</h2>
                    <div>
                        <p>O texto vem aqui</p>
                    </div>
                </div>
            </div>

        </Pagina>
    )
}

export default Tradutor 