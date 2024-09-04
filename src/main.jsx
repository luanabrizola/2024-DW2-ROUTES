import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.jsx'
import Contato from './pages/Contato/Contato.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'
import Page404 from './pages/Page404/Page404.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// const rotas = createBrowserRouter([
//   {path:"/", element:<Home/>},
//   {path:"/home", element:<Home/>},
//   {path:"/contato", element:<Contato/>},
//   {path:"/sobre", element:<Sobre/>},
//   {path:"*", element:<Page404/>}
// ])

const rotas = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route index element={<Home/>} />
    <Route index path='/home' element={<Home/>} />
    <Route path='/sobre' element={<Sobre/>} />
    <Route path='/contato' element={<Contato/>} />
    <Route path='*' element={<Page404/>} />
  </Route>  
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={rotas}/>      
  </StrictMode>,
)
