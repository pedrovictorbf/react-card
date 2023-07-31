import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// Css
import './view/index.css';



//Components
import Card from './view/components/Card';
import ErrorPage from './view/components/error-page';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Card />,
    errorElement: <ErrorPage />
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>
);


