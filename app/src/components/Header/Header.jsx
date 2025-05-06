import { useState } from 'react'

import '../../assets/styles/_reset.css';
import '../../assets/styles/_variables.css';
import '../../assets/styles/index.css';


function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <ul>
            <li>Home</li>
            <li>Achados</li>
            <li>Perdidos</li>
        </ul>
        </header>
    </>
  )
}

export default Header
