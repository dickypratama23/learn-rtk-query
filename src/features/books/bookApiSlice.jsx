import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.itbook.store/1.0',
  }),
  endpoints(builder) {
    return {
      fetchBooks: builder.query({
        query() {
          return `/new`;
        }
      })
    }
  }
})

export const { useFetchBooksQuery } = bookApiSlice
