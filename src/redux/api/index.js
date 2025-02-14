import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// CRUD
// Read -> get -> query
// CUD - post, put, delete - mutation

export const mainApi = createApi({
	reducerPath: 'mainApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://67ac709b5853dfff53dab50e.mockapi.io',
	}),
	endpoints: () => ({}),
	tagTypes: ['BLOG'],
})

export const { useGetUsersQuery, useGetPostsQuery, useGetProductsQuery } =
	mainApi
