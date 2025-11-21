import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <ul className='header-container-listagem'>
          <li className='header-container-listagem__item'>
            <a className='link' href='/'>
              Home
            </a>
          </li>

          <li className='header-container-listagem__item'>
            <a className='link' href='/itens'>
              Itens
            </a>
          </li>
        </ul>
      </div>
      </header>
    
  )
}

export default Header