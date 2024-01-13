import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
    reducerPath:"books",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001"}),
    tagTypes: ["Books"], // this is for caching and white listing tags
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => "/books",
            providesTags: ["Books"],
        }),
        addBook: builder.mutation({
            query: (book) => ({
                url: "/books",
                method: "POST",
                body: book,
            }),
            invalidatesTags: ["Books"],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books"],
        }),
        editBook: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `/books/${id}`,
                method: "PATCH",
                body: patch,
            }),
            invalidatesTags: ["Books"],
        }),
    }),
});

export const {
    useGetAllBooksQuery,
    useAddBookMutation,
    useDeleteBookMutation,
    useEditBookMutation
} = booksApi;