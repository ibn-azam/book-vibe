import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorElement from "../pages/errorElement/ErrorElement";
import BookDetails from "../pages/BookDetails/BookDetails";

import axios from "axios";
import { Suspense } from "react";
import Charts from "../pages/Charts/Charts";

const booksPromise = axios.get('/booksData.json');


export const router = createBrowserRouter([
  {path:'/',
    Component: MainLayout,
    children:[
      {index:true, element:<Homepage/>}, 
      {path:'/books', element:<Books/>},
      {path:'/bookdetails/:bookId', 
        loader:()=>fetch('/booksData.json'),
        Component: BookDetails
      },
      {path:'/charts',
        element: <Suspense fallback={<span>loading.......</span>}>
          <Charts booksPromise={booksPromise}></Charts>
        </Suspense>
      }
    ],
    errorElement: <ErrorElement/>
  }
  
])