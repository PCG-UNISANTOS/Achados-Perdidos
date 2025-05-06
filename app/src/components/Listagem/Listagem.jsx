import { useState } from 'react'

import '../../assets/styles/_reset.css';
import '../../assets/styles/_variables.css';
import '../../assets/styles/index.css';
import './Listagem.css'


function Listagem() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="listagem-section">
        <div className='listagem-section-container'>
          <div className='listagem-section-container-header'> 
            <h1>Achados e Perdidos</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Listagem
