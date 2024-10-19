import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useRouteError } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

// Errors
export default function Error() {
  const error = useRouteError();
  console.log(error);   

  return (
    <div>
      <h1>Page not found</h1>
      <p>{error.data}</p>
    </div>
  );
}

const router = createBrowserRouter([  
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: "about", 
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
