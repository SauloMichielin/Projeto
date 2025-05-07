import "./index.css"
import Button from "../../components/Button/button"

function Body() {

  function handleClick(messageText: string) {
    alert(messageText)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    
  }

  return (
    <div className="Body">
      <p className="Body-texto">Its me, Saulo</p>
      <div className="Botões">
        <Button onClick={() => handleClick('texto1')}>
          Botão 1
        </Button>
        <Button onClick={() => handleClick('texto2')}>
          Botão 2
        </Button>
      </div>
      <input type="text" onChange={(event) => handleChange(event)} />
    </div>
  )
}

export default Body