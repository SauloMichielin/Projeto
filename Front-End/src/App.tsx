import Header from './components/Header';
import Footer from './components/Footer';
import Book from './components/Books';
import './App.css';
import Title from './components/title.tsx';
import { useState } from 'react';
import Form from './components/Form';
import type { BookType } from './Type.tsx';
import { booksList } from './Data.ts';

// import interstellarAsset from "./assets/InterstellarAsset.png";

function App() {
  /*Estas duas maneiras abaixo são para utilizar imagens no React, na primeira linha precisa de importação, a segunda da pasta public não precisa de importação} */
  /* <img src={interstellarAsset} alt="Capa"/> */
  /* <img src="Interstellar.png" alt="Capa"/> */
  const [books, setBooks] = useState<BookType[]>(booksList);

  // import type { BookType } from './Type.tsx';
  // const [books, setBooks] = useState<BookType>([]); //Usado quando não tem estado inicial do estado

  function updateState(title: string, pages: number) {
    const newBook = {
      title: title,
      pages: pages,
      isRead: false,
      isFavorite: false,
    }
    setBooks([...books, newBook]);
  }

  return (
    <div className='app'>
      <Header />
      <div className="container">
        <Title>
          <s>Livros emprestados</s>
          Meus Livros:
        </Title>

          {books.map((book) => (
            <Book key={book.title} book={book} />
          ))}

        <Form
        submitFunction={updateState}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App
