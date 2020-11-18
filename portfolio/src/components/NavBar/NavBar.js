import Logo from '../Logo/Logo';
import './NavBar.css';

function NavBar () {
  return(
    <div className="NavBar">
      <Logo/>
      <div>
        <a className='link' href='https://google.com'>Test</a>
        <a className='link' href='https://google.com'>Test</a>
        <a className='link' href='https://google.com'>Test</a>
        <a className='link' href='https://google.com'>Test</a>
      </div>
    </div>
  )
}

export default NavBar;