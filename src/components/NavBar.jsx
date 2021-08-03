import '../styles/global.css'
import React,{useEffect, useState} from 'react';

function NavBar() {
  const [show, setShow] = useState(true)
  const controlNavBar = () => {
      setShow(false)
    if (window.scrollY > 100) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',
      controlNavBar)
    return () => {
      window.removeEventListener('scroll',
        controlNavBar)
    }
  }, [])
  return (
    <header className={`Nav${ show ? 'Fade': 'TopFix' }`}>
        <img className="logo" src="https://www.carmehil.com.br/wp-content/themes/carmehil/images/logo-grupo.png" alt="logo" />
        <ul className="nav_links">
          <li><a href="/">Services</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">About</a></li>
        </ul>
        <form method="POST" id="FormSearch">
          <input placeholder='Search' className="SearchInput" />
          <button type="submit">Search</button>
        </form>
      </header>
  );
}

export default NavBar;
