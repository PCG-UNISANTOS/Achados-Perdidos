import { useState } from 'react'

import '../../assets/styles/_reset.css';
import '../../assets/styles/_variables.css';
import '../../assets/styles/index.css';
import './Listagem.css'
import oculosImg from '../../assets/img/oculos.png';


function Listagem() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="listagem-section">
        <div className='container'>
          <div className='header'> 
            <h1>Achados e Perdidos</h1>
          </div>
          <div className='content'>
            <ul className='listagem'>
              <li className='item'>
                <div className='imagem-container'>
                  <img src={oculosImg}></img>
                </div>
                <div className='descricao-item'>
                  <h3>Acessório</h3>
                  <h2>Óculos de Grau Preto</h2>
                  <h4>28/04/2025</h4>
                  <p>Local: Sala Laboratório 5</p>
                  <a className="button" href='/'>Visualizar</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Listagem
