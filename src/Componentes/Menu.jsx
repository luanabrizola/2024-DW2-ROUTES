import { IconMessageDown, IconMessageUp, IconBrandReact, IconAddressBook, IconCircleNumber1, IconCircleNumber2, IconHome, IconInfoCircle, IconRouteAltLeft, IconLetterCaseToggle, IconNumber123 } from "@tabler/icons-react"
import { NavLink } from "react-router-dom"

function Menu() {

    const getEstilo = (props) => {
        let estilo =
            "flex gap-3 text-slate-700 px-3 py-4 hover:bg-slate-800 hover:text-slate-200 ";
        let ativo = "border-r-4 border-solid border-slate-800 "

        // let final
        // if (props.isActive){
        //     final = estilo + ativo
        // } else {
        //     final = estilo
        // }
        let final = props.isActive ? estilo + ativo : estilo

        return final;

    };

    return (
        <div className={`bg-slate-600 w-60 h-screen
        flex flex-col `}>
            <header className="flex gap-1 justify-center p-3 border-b border-slate-300 border-solid">
                <IconBrandReact />
                <span className="font-bold">React Rotas</span>

            </header>
            <nav className="flex flex-col">
                <NavLink to="/home" className={getEstilo}> <IconHome />Home</NavLink>
                <NavLink to="/contato" className={getEstilo}><IconAddressBook />Contato</NavLink>
                <NavLink to="/sobre" className={getEstilo}><IconInfoCircle />Sobre</NavLink>
                <NavLink to="/tradutor" className={getEstilo}>Tradutor</NavLink>
                <p className="p-2 text-gray-500">Estados</p>
                <NavLink to='contador' className={getEstilo}><IconNumber123/>Contador</NavLink>
                <NavLink to="/estado1" className={getEstilo}><IconCircleNumber1/>Estado1</NavLink>
                <NavLink to="/estado2" className={getEstilo}><IconCircleNumber2/>Estado2</NavLink>
                <NavLink to='/campoTexto' className={getEstilo}><IconLetterCaseToggle/>Campo de texto</NavLink>
                <p className="p-2 text-gray-500">Comunicação</p>
                <NavLink to='/direta' className={getEstilo}><IconMessageDown/>Comunicação direta</NavLink>
                <NavLink to='/indireta' className={getEstilo}><IconMessageUp/>Comunicação indireta</NavLink>
                <p className="p-2 text-gray-500">Hooks</p>
                <NavLink to='effect' className={getEstilo}>UseEffect</NavLink>
                <NavLink to='ref' className={getEstilo}>UseRef</NavLink>
            </nav>
            <footer className="absolute bottom-0 p-3 text-sm">
                <span>Desenvolvimento Web 2</span>

            </footer>
        </div>
    )
}

export default Menu