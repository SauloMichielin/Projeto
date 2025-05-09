import type { BookType } from '../../Type';

type Bookprops = {
  book: BookType
}

// ✔️ ❤️ ❌

function Book({ book }: Bookprops) {
  return (
    <li>
      <span>{ book.isRead ? '✔️' : '❌'}</span>
      {' '}
      <span>
        {`${book.title} (${book.pages} páginas)`}
      </span>
      {' '}
      { book.isFavorite && <span>❤️</span> }
    </li>
  )
}

export default Book;