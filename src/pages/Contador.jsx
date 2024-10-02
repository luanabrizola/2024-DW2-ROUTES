import Pagina from "../Componentes/Pagina";
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

function Contador() {

    const [step, setStep] = useState(0)

    function addStep() {
        setStep(step + 1)
    }

    function removeStep() {
        setStep(step - 1)
    }

    const [number, setNumber] = useState(0)

    function addNumber() {
        setNumber(number + step)
    }

    function removeNumber() {
        setNumber(number - step)
    }

    return (
        <Pagina titulo="Contador" subtitulo="Conceito de Estado no React">
        <div className="w-full h-full flex flex-col justify-center items-center gap-5">

            <div className="text-6xl font-black">{number}</div>
            <div className="flex gap-5">
                <button className="rounded-full p-4 bg-blue-600" onClick={removeNumber}><IconMinus size={30} /></button>
                <button className="rounded-full p-4 bg-blue-800" onClick={addNumber}><IconPlus size={30} /></button>
            </div>

            <div className="flex items-center gap-5">
                <button className="rounded-full p-2 bg-purple-600" onClick={removeStep}><IconMinus /></button>
                <span>{step}</span>
                <button className="rounded-full p-2 bg-purple-800" onClick={addStep}><IconPlus /></button>
            </div>
        </div>
    </Pagina>
    )
}

export default Contador