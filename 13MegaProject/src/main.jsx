import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: (
                <authLayout authentication={false}>
                    <login />
                </authLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <authLayout authentication={false}>
                    <signup />
                </authLayout>
            ),
        },
        {
            path: "/all-post",
            element: (
                <authLayout authentication>
                    {" "}
                    <allPost />
                </authLayout>
            ),
        },
        {
            path: "/all-post",
            element: (
              <authLayout authentication>
                <allPosts />
              </authLayout>
            )
        },
        {
            path: "/edit-post/:slug",
            element: (
                <uthLayout authentication>
                    {" "}
                    <editPost />
                </uthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <post />,
        },
    ],
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider  store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
