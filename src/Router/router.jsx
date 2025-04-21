import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Root from '../Root/Root';
import Booking from "../Pages/Booking";
import Blogs from "../Pages/Blogs";
import LowyerDetils from "../Pages/LowyerDetils";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[

        {
            path:'/',
            element:<App></App>
        },

        {
            path:'/lawyer/:id',
            loader: ({ params }) => {
              return fetch('/Lowyar.json')
                .then(res => res.json())
                .then(data => {
                  const found = data.find(item => item.id === params.id);
                  return found || null;
                });
            },
            element:<LowyerDetils></LowyerDetils>,
        },
        {
            path:'/booking',
            element:<Booking></Booking>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        }

      ]
    },
  ]);