import { Outlet } from "react-router-dom"
import Menu from "./Componentes/Menu/Menu"

function Layout(){
    return(
        <div className="flex">
            <Menu />
            <Outlet className=""/>
        </div>
        

    )
}

export default Layout