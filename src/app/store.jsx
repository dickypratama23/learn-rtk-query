import { configureStore } from '@reduxjs/toolkit'
import { bookApiSlice } from '../features/books/bookApiSlice.jsx'

export const store = configureStore({
  reducer: {
    [bookApiSlice.reducerPath]: bookApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(bookApiSlice.middleware)
  }
})
