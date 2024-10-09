import {createBrowserRouter} from 'react-router-dom'
import Index from '../pages/index'
import About from '../pages/About'
import News from '../pages/News'
import Layout from '../pages/Layout'


export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/', 
          element: <Index />,
        },
        {
          path: '/about', 
          element: <About />,
        },
        {
          path: '/news', 
          element: <News />,
        },
        
      ],
    },
  ]);