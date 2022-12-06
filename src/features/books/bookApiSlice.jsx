import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.itbook.store/1.0'
  }),
  endpoints: (build) => ({
    fetchBooks: build.query({
      query: () => `new`,
    }),
    searchBooks: build.query({
      query: (search = 'php') => `search/${search}`
    })
  })
})

export const {useFetchBooksQuery, useSearchBooksQuery} = bookApiSlice
