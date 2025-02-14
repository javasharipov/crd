import { mainApi } from './index'

const extendedApi = mainApi.injectEndpoints({
	endpoints: build => ({
		getBlogs: build.query({
			query: params => ({
				url: '/blog',
				method: 'GET',
				params,
			}),
			providesTags: ['BLOG'],
		}),
		createBlog: build.mutation({
			query: body => ({
				url: '/blog',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['BLOG'],
		}),
		deleteBlog: build.mutation({
			query: id => ({
				url: `/blog/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['BLOG'],
		}),
	}),
	overrideExisting: false,
})

export const {
	useGetBlogsQuery,
	useCreateBlogMutation,
	useDeleteBlogMutation,
} = extendedApi
