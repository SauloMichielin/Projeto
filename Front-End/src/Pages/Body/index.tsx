import "./index.css"

function Body() {

  function handleClick() {
    alert("Botão Clicado")
  }

  return (
    <div className="Body">
      <p className="Body-texto">Its me, Saulo</p>
      <button onClick={handleClick}>
        Click aqui
      </button>
    </div>
  )
}

export default Body