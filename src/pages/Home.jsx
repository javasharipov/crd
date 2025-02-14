import React, { useRef } from 'react'
import {
	useCreateBlogMutation,
	useDeleteBlogMutation,
	useGetBlogsQuery,
} from '../redux/api/blog.api'

const Home = () => {
	const { data } = useGetBlogsQuery()
	const [createBlog, { isLoading: isLoading, isError, isSuccess }] =
		useCreateBlogMutation()
	const [deleteBlog] = useDeleteBlogMutation()

	const title = useRef(null)
	const desc = useRef(null)
	const author = useRef(null)
	const type = useRef(null)
	const soldCount = useRef(null)

	const handleCreateBlog = e => {
		e.preventDefault()
		let newBlog = {
			title: title.current.value,
			desc: desc.current.value,
			author: author.current.value,
			type: type.current.value,
			soldCount: soldCount.current.value,
		}
		createBlog(newBlog)
			.unwrap()
			.then(() => {
				title.current.value = ''
				desc.current.value = ''
				author.current.value = ''
				type.current.value = ''
				soldCount.current.value = ''
			})
	}
	const handleDeleteBlog = id => {
		deleteBlog(id)
	}

	return (
		<div className='flex items-start p-6 bg-gray-100 min-h-screen  '>
			<div className='bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mr-8'>
				<h2 className='text-2xl font-semibold mb-4'>Add a Book</h2>
				<form onSubmit={handleCreateBlog} className='space-y-4'>
					<input
						required
						ref={title}
						type='text'
						placeholder='Title'
						className='w-full p-3 border rounded-lg'
					/>
					<textarea
						required
						ref={desc}
						placeholder='Description'
						className='w-full p-3 border rounded-lg'
						rows='3'
					></textarea>
					<input
						required
						ref={author}
						type='text'
						placeholder='Author'
						className='w-full p-3 border rounded-lg'
					/>
					<input
						required
						ref={type}
						type='text'
						placeholder='Type'
						className='w-full p-3 border rounded-lg'
					/>
					<input
						required
						ref={soldCount}
						type='number'
						placeholder='Sold Count'
						className='w-full p-3 border rounded-lg'
					/>
					<button
						type='submit'
						className='w-full bg-blue-600 text-white py-3 rounded-lg disabled:bg-blue-200 cursor-pointer disabled:cursor-default  '
						disabled={isLoading}
					>
						{isLoading ? 'Loading' : 'Create'}
					</button>
				</form>
			</div>

			<div className='flex items-center flex-wrap ml-10 gap-2'>
				{data?.map(blog => (
					<div
						key={blog.id}
						className='w-72 max-w-md bg-white p-6 rounded-2xl shadow-lg'
					>
						<h2 className='text-xl font-semibold'>Book Details</h2>
						<div className='mt-4'>
							<p className='text-gray-700 font-medium'>
								Title: <span className='font-normal'>{blog.title}</span>
							</p>
							<p className='text-gray-700 font-medium'>
								Description: <span className='font-normal'>{blog.desc}</span>
							</p>
							<p className='text-gray-700 font-medium'>
								Author: <span className='font-normal'>{blog.author}</span>
							</p>
							<p className='text-gray-700 font-medium'>
								Type: <span className='font-normal'>{blog.type}</span>
							</p>
							<p className='text-gray-700 font-medium'>
								Sold Count:{' '}
								<span className='font-normal'>{blog.soldCount}</span>
							</p>
						</div>
						<button
							className='mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer'
							onClick={() => handleDeleteBlog(blog.id)}
						>
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
export default Home
