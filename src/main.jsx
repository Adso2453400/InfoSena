import React from 'react'
import ReactDOM from 'react-dom/client'
// import {App} from '../src/components/App';
import {RouterProvider} from 'react-router-dom';
import {router} from '../src/routes/Routes';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);