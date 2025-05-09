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
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  // import type { BookType } from './Type.tsx';
  // const [books, setBooks] = useState<BookType>([]); //Usado quando não tem estado inicial do estado

  function updateState() {
    const newBook = {
      title: bookTitle,
      pages: bookPages,
      isRead: false,
      isFavorite: false,
    }
    setBooks([...books, newBook]);
  }

  function resetForm() {
    setBookTitle('');
    setBookPages(0);
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookTitle(event.target.value);
  }

  function handlePagesChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookPages(event.target.valueAsNumber);
  }

  function isFormValid() {
    const errors = [];
    if (bookTitle === "") {
      errors.push('O campo Título é Obrigatório')
    }
    if (bookPages <= 0) {
      errors.push('O campo Páginas precisa ser um número maior que zero')
    }
    setErrorMessages(errors)
    return errors.length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isFormValid()) {
      updateState();
      resetForm();
      setErrorMessages([]);
    }
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
        <form className='books-form' onSubmit={handleSubmit}>
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
          {errorMessages.length > 0 && (
            <div className='form-message'>
              {errorMessages.map(message => (
                <p key={message}>{message}</p>
              ))}
            </div>
          )}
          <Button>
            Adicionar
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default App
