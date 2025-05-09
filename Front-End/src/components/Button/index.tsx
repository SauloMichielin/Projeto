type ButtonProps = {
  children: React.ReactNode;
  //OnClick recebe uma função sem parametros por isso parenteses vazios e sem retorno, por tanto Void
  onClick?: () => void;
}

//Interrogação torna um tipo opcional

import "./index.css"

// A prop "onClick" não precisa ter o mesmo nome, mas é uma boa prática manter o mesmo nome

function Button ({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;