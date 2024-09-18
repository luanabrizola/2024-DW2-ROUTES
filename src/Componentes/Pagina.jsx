function Pagina(props){
    return(
        <div className="w-full h-full bg-slate-200">
            <header className="bg-zinc-200">
                <h1>{props.titulo}</h1>
                <h1>{props.subtitulo}</h1>
            </header>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Pagina