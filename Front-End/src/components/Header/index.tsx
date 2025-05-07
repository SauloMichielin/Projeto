import "./index.css"

const user = {
  name: 'Saulo',
  lastName: 'Michielin',
}

function Header() {
  return (
    <p className="Header">
      <div className="Header-texto">
        {`Opa! Fala comigo ${user.name} ${user.lastName}`}
      </div>
    </p>
  )
}

export default Header;