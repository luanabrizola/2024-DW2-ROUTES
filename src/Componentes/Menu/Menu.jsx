import { IconAddressBook, IconHome, IconInfoCircle, IconRouteAltLeft } from "@tabler/icons-react"
import { NavLink } from "react-router-dom"

function Menu() {

    

    const getEstilo = () => {
        let estiloItemInicial = "flex gap-3 px-3 py-4 hover:bg-slate-950 hover:text-slate-200" 

        let estiloAtivo="text-red-500"

        let estiloItemFinal = estiloItemInicial
        return estiloItemFinal
    }

    return (
        <div className={`bg-slate-600 w-60 h-screen
        flex flex-col `}>
            <header className="flex gap-1 justify-center p-3 border-b border-slate-300 border-solid">
                <IconRouteAltLeft/> 
                <span className="font-bold">React Rotas</span>

            </header>
            <nav className="flex flex-col">
                <NavLink to="/home" className={getEstilo}> <IconHome />Home</NavLink>
                <NavLink to="/contato" className={getEstilo}><IconAddressBook/>Contato</NavLink>
                <NavLink to="/sobre" className={getEstilo}><IconInfoCircle/>Sobre</NavLink>
            </nav>
            <footer className="absolute bottom-0 p-3 text-sm">
                <span>Desenvolvimento Web 2</span>

            </footer>
        </div>
    )
}

export default Menu