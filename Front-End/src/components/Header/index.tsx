import "./index.css"
import User from '../User'

function Header() {
  return (
    <header className='header'>
      <p className="header-user">
        Olá 
        {' '}
        <User />
      </p>
    </header>
  )
}

export default Header;