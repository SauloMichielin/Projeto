import Header from './components/Header';
import Footer from './components/Footer';
import Book from './components/Books';
import { booksList } from './Data.ts';
import './App.css';
import Title from './components/title.tsx';
import Button from './components/Button/index.tsx';
import { useState } from 'react';
// import interstellarAsset from "./assets/InterstellarAsset.png";

function App() {
  /*Estas duas maneiras abaixo são para utilizar imagens no React, na primeira linha precisa de importação, a segunda da pasta public não precisa de importação} */
  /* <img src={interstellarAsset} alt="Capa"/> */
  /* <img src="Interstellar.png" alt="Capa"/> */

  const [bookTitle, setBookTitle] = useState("");
  const [bookPages, setBookPages] = useState(0);
  const [books, setBooks] = useState(booksList);

  function handleClick() {
    const newBook = {
      title: bookTitle,
      pages: bookPages,
      isRead: false,
      isFavorite: false,
    }
    setBooks([...books, newBook])
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookTitle(event.target.value);
  }

  function handlePagesChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookPages(event.target.valueAsNumber);
  }

  return (
    <div className='app'>
      <Header />
      <div className="container">
        <Title>
          <s>Livros emprestados</s>
          Meus Livros:
        </Title>
        <ul className='books-list'>
          {books.map((book) => (
            <Book key={book.title} book={book} />
          ))}
        </ul>

        <input
          type="text"
          placeholder='Título'
          value={bookTitle}
          onChange={handleNameChange}
        />
        <input
          type="number"
          placeholder='Quantidade de páginas'
          value={bookPages}
          onChange={handlePagesChange}
        />

        <Button
          onClick={handleClick}
        >
          Adicionar
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default App
