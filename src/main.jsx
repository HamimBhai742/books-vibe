import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Error from './Componets/Error/Error';
import ListedBook from './Componets/Listed-Book/ListedBook';
import PageToRead from './Componets/PageToRead/PageToRead';
import { Root } from 'postcss';



import Home from './Componets/Home/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './Componets/Nav/Nav';
import ReadPage from './Componets/Listed-Book/ReadPage/ReadPage';
import WishlistBooks from './Componets/Listed-Book/whitlist/Whitlist';
import Bookdetlais from './Componets/Home/Books/Booksdetlis/Bookdetlais';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav></Nav>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        loader: () => fetch('/public/Books.json'),
        element: <Home></Home>
      },
      {
        path: '/listedBook',
        element: <ListedBook></ListedBook>,
        children: [
          {
            // path: 'readPage',
            index: true,
            element: <ReadPage></ReadPage>
          },
          {
            path: 'wishlistBooksPage',
            element: <WishlistBooks></WishlistBooks>
          }
        ]

      },
      {
        path: '/pageToRead',
        element: <PageToRead></PageToRead>
      },
      {
        path:'/book/:bookId',
        loader:()=>fetch(`/public/Books.json`),
        element: <Bookdetlais></Bookdetlais>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
