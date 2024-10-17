import { useState } from "react";
import Pagina from "../Componentes/Pagina";

function Tradutor() {
  const [textoPortugues, setTextoPortugues] = useState("");
  const [textoIngles, setTextoIngles] = useState("");
  const maxCaracteres = 250;

  const traduzir = async () => {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textoPortugues)}&langpair=pt-br|en-us`;

    const response = await fetch(url);
    const data = await response.json();
    setTextoIngles(data.responseData.translatedText);
  };

  const handleChange = (e) => {
    if (e.target.value.length <= maxCaracteres) {
      setTextoPortugues(e.target.value);
    }
  };

  return (
    <Pagina titulo="Tradutor" subtitulo="Traduzir palavras e frases.">
      <h1 className="font-bold text-5xl">Tradutor</h1>
      <div className="flex p-5 gap-5">
        <div className="relative w-1/2">
          <h2>Português</h2>
          <textarea
            className="w-full h-40 text-lg resize-none p-2 border rounded"
            value={textoPortugues}
            onChange={handleChange}
          ></textarea>
          <span className="text-gray-500">
            {textoPortugues.length}/{maxCaracteres} caracteres
          </span>
          <button
            className="absolute bottom-2 right-2 px-3 py-1 bg-blue-500 text-white rounded"
            onClick={traduzir}
          >
            Traduzir
          </button>
        </div>
        <div className="w-1/2">
          <h2>Inglês</h2>
          <div className="border rounded p-2 h-40">
            <p>{textoIngles}</p>
          </div>
        </div>
      </div>
    </Pagina>
  );
}

export default Tradutor;