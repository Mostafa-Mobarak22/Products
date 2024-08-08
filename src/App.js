import './App.css';
import Cart from './componant/cart/Cart';
import Home from './componant/home/Home';
import Layout from './componant/Layout/Layout';
import NotFound from './componant/not found/NotFound';
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Register from './componant/Register/Register';
import Login from './componant/login/Login';
import Card from './componant/card/Card';

function App() {
  let router = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'cart',element:<Cart/>},
      {path:'register',element:<Register/>},
      {path:'login',element:<Login/>},
      {path:'card',element:<Card/>}
    ]},
    {path:'*',element:<NotFound/>}
  ])
  return <>
    <RouterProvider router={router}></RouterProvider>
  </>
}

export default App;
