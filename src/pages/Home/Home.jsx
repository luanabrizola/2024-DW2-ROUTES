import styles from "./Home.module.css"
import Menu from "../../Componentes/Menu/Menu"

function Home(){
    return(
        <div className={styles.Home}>
            <Menu />
            <h1>Home</h1>
        </div>
    )
}

export default Home