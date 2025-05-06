import { useState } from 'react'
import Header from './components/Header/Header';
import Listagem from './components/Listagem/Listagem';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Listagem/>
    </>
  )
}

export default App
