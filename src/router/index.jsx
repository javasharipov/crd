import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SuspenseContainer } from '../utils'
// import Home from '../pages/Home'
// import Contact from '../pages/Contact'
// import About from '../pages/About'
// import Layout from '../pages/Layout'
const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Layout = lazy(() => import('../pages/Layout'))
// const Wishlist = lazy(()=> import("../pages/Wishlist"))
// const Cart = lazy(()=> import("../pages/Cart"))

const RouterMain = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<SuspenseContainer>
						<Layout />
					</SuspenseContainer>
				}
			>
				<Route
					path='/'
					element={
						<SuspenseContainer>
							<Home />
						</SuspenseContainer>
					}
				/>
				<Route
					path='/about'
					element={
						<SuspenseContainer>
							<About />
						</SuspenseContainer>
					}
				/>
				<Route
					path='/contact'
					element={
						<SuspenseContainer>
							<Contact />
						</SuspenseContainer>
					}
				/>
			</Route>
		</Routes>
	)
}

export default RouterMain
