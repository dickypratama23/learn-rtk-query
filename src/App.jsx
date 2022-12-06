import { useFetchBooksQuery, useSearchBooksQuery } from './features/books/bookApiSlice.jsx'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('php');
  const onHandleChange = (e) => setSearch(e.target.value)

  const [filter, setFilter] = useState(search);
  const {data} = useSearchBooksQuery(filter)

  const onClick = () => {
    setFilter(search)
    setSearch("")
  }

  return (
    <div className="container mx-auto w-screen px-4">
      <div className="flex gap-2 justify-end py-3">
        <input
          type="text"
          id="first_name"
          className="border-2 text-sm rounded-md p-2.5"
          placeholder="Search Books"
          onChange={onHandleChange}
        />
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2"
          onClick={onClick}
        >
          Search
        </button>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">Image</th>
          <th scope="col" className="py-3 px-6">Title</th>
          <th scope="col" className="py-3 px-6">ISBN</th>
          <th scope="col" className="py-3 px-6">Price</th>
        </tr>
        </thead>
        <tbody>
        {
          data?.books.map((book) => (
            <tr key={book.isbn13} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src={book.image} alt={book.title} width={250}/>
              </th>
              <td className="py-4 px-6 text-xl font-bold">
                {book.title} <br/>
                <span className="text-xs font-thin">{book.subtitle}</span>
              </td>
              <td className="py-4 px-6">
                {book.isbn13}
              </td>
              <td className="py-4 px-6">
                {book.price}
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

export default App
