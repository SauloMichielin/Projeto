import "./index.css"

const user = {
  name: 'Saulo',
  lastName: 'Michielin',
}

function Header() {
  return (
    <p>
      {`Opa! Fala comigo ${user.name} ${user.lastName}`}
    </p>
  )
}

export default Header;