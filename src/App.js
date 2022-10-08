import { RouterProvider } from 'react-router-dom';
import './App.css';
import { createBrowserRouter } from "react-router-dom";
import Main from './Layout/Main';

import Orders from './components/Orders/Orders';
import Home from './components/Home/Home';
import Grandpa from './components/Grandpa/Grandpa';

export const router =createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,children: [
       {
        path:"/",
        loader: ()=> fetch("tshirt.json"),
        element: <Home></Home>
       },
        {
          path:"/orders",
          element: <Orders></Orders>
        },
        {
          path:"/grandpa",
          element: <Grandpa></Grandpa>
        }
        ]
      }
])

function App() {
  return (
    <div className="App">
      
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
