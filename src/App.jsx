import './App.css'
import { useFetchBooksQuery } from './features/books/bookApiSlice.jsx'

function App() {
  const {data} = useFetchBooksQuery()

  return (
    <div className="App">
      <div className="overflow-x-auto relative">
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
                  <img src={book.image} alt={book.title} width={250} />
                </th>
                <td className="py-4 px-6 text-xl font-bold">
                  {book.title} <br/>
                  <span className="text-xs">{book.subtitle}</span>
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
    </div>
  )
}

export default App
