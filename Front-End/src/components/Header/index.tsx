import "./index.css"
import User from '../User'

function Header() {
  return (
    <p className="Header">
      <div className="Header-texto">
      Olá 
    {' '}
    <User />
      </div>
    </p>
  )
}

export default Header;