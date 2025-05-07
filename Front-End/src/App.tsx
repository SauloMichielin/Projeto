import Header from './components/Header'
import Footer from './components/Footer'
import Book from './components/Books'
import { booksList } from './components/Books/BookList.tsx'
import './App.css'
import Title from './components/title.tsx'

function App() {
  return (
    <div className='App-body'>
      <Header />
      <Title>
        <s>Livros emprestados</s>
        Meus Livros:
      </Title>
      <ul>
        { booksList.map((book) => (
          <Book key={ book.title } book={ book } />
        ))}
      </ul>
      <Footer />
    </div>
  )
}

export default App
