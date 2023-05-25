
import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import phrases from './utils/phrases.json'
import getRandomElementFromArray from './utils/randomElementFromArray'
import fondo1 from './assets/react.svg'

const arrBackground = ['1.jpg', '2.png', '3.jpg', '4.png', '5.png', '6.jpg', '7.png', '8.jpg']

function App() {

    const initialPhrase = getRandomElementFromArray(phrases)
    const inicialPath = getRandomElementFromArray(arrBackground)

    const [phraseRandom, setPhraseRandom] = useState (initialPhrase)
    const [PathRandom, setPathRandom] = useState(inicialPath)

    const objStyle = {
      backgroundImage: `url('/images/fondo${PathRandom}')`
    }

  return (
        <div style={objStyle} className='app'>
         <h1>Galleta de la fortuna</h1>
         <ButtonPhrase 
            setPhraseRandom={setPhraseRandom} 
            setPathRandom={setPathRandom}
            arrBackground={arrBackground}
            />
         <PhrasesCard phraseRandom={phraseRandom} />
         <h4>
          Creado por Cristian Segura 🧑
         </h4>
      </div> 
  )
}

export default App
