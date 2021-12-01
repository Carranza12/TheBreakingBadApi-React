import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Quote from "./components/Quote";

const initialQuote = {
  text: 'Quote',
  author: 'Author :)'
}

function App() {
  //Uso de useState : PARA CAMBIAR EL VALOR DEL TEXTO Y AUTOR
  const [quote, setQuote] = useState(initialQuote);
  //useSate: PARA UNA BARRA DE PROGRESO MIENTRAS SE HACE LA PETICION A LA API
  const [loading, setLoading] = useState(false)
  //creacion defuncion asincrona fetch
  const updateQuote = async () => { //le pasas el async
    setLoading(true);
    const url = "https://breakingbadapi.com/api/quote/random";
    const res = await fetch(url); // le pasas el await a la respuesta
    const [newQuote] = await res.json(); // la respuesta se convierte en json
    // desestructuracion de newQuote
    const { quote: text, author } = newQuote;
    setQuote({
      text, //abreviar codigo poniendole un Alias con el mismo nombre de la desestructuracion
      author
    })
    setLoading(false)
  }
  //Uso de useEffect
  useEffect(() => { //callback
    updateQuote(); //llamada de peticion asincrona fetch
  }, []);
  return (
    <div className="App">
      <div className="container">
        <img className="logo"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/763e4a4f-0453-48cd-96ef-d2aba6b7d98d/dcc5qrb-37937095-c6f2-424e-9f3b-05a55001242d.png/v1/fill/w_894,h_894,q_70,strp/breaking_bad_logo_wallpaper_by_robinle_dcc5qrb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwMCIsInBhdGgiOiJcL2ZcLzc2M2U0YTRmLTA0NTMtNDhjZC05NmVmLWQyYWJhNmI3ZDk4ZFwvZGNjNXFyYi0zNzkzNzA5NS1jNmYyLTQyNGUtOWYzYi0wNWE1NTAwMTI0MmQucG5nIiwid2lkdGgiOiI8PTUwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.A0FxwVrWYWKnS7qH6odPDnUdq4mT71DPfFUlSfNmYBk"
        alt="logo" />
      <button onClick={() => updateQuote()} className="btn-changed">Obtener Otra Frase</button>
      {loading ? < Loading /> : <Quote quote={quote} />}
      </div>

      <Footer />
    </div>
  );
}

export default App;
