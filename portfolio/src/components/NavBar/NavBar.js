import Logo from '../Logo/Logo';
import './NavBar.css';
import { Link } from 'react-scroll';

function NavBar () {
  return(
    <div className="NavBar">
      <Logo/>
      <div className='navLinks'>
        <Link className='link' href='/About'>About</Link>
        <a className='link' href='/Portfolio' smooth={true}>Portfolio</a>
        <Link className='link' href='/Exerience'>Exerience</Link>
        <Link className='link' href='/Education'>Education</Link>
        <Link className='link' href='/Contact'>Contact</Link>
      </div>
    </div>
  )
}

export default NavBar;