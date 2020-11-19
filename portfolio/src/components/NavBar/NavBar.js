import Logo from '../Logo/Logo';
import './NavBar.css';

function NavBar () {
  return(
    <div className="NavBar">
      <Logo/>
      <div className='navLinks'>
        <a className='link' href='/About'>About</a>
        <a className='link' href='/Portfolio'>Portfolio</a>
        <a className='link' href='/Exerience'>Exerience</a>
        <a className='link' href='/Education'>Education</a>
        <a className='link' href='/Contact'>Contact</a>
      </div>
    </div>
  )
}

export default NavBar;