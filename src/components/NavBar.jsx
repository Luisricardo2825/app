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
    <nav className={`Nav${ show ? 'Fade': 'TopFix' }`}>
        <img className={`logo ${ show ? '': 'Fade' }`} src="https://www.carmehil.com.br/wp-content/themes/carmehil/images/logo-grupo.png" alt="logo" />
        <ul className={`nav_links ${ show ? 'Fade': '' }`}>
          <li><a href="/" className={`link ${ show ? '': 'Fade' }`}>Services</a></li>
          <li><a href="/" className={`link ${ show ? '': 'Fade' }`}>Projects</a></li>
          <li><a href="/" className={`link ${ show ? '': 'Fade' }`}>About</a></li>
        </ul>
        <form method="POST" id="FormSearch">
          <input placeholder='Search' className={`SearchInput ${ show ? '': 'Fade' }`} />

        </form>
      </nav>
  );
}

export default NavBar;
