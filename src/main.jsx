import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Contato from './pages/Contato.jsx'
import Sobre from './pages/Sobre.jsx'
import Page404 from './pages/Page404.jsx'
import Layout from './pages/Layout.jsx'
import Estado2 from './pages/Estado/Estado2.jsx'
import Estado1 from './pages/Estado/Estado1.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import CampoTexto from './pages/Estado/CampoTexto.jsx'


// const rotas = createBrowserRouter([
//   {path:"/", element:<Home/>},
//   {path:"/home", element:<Home/>},
//   {path:"/contato", element:<Contato/>},
//   {path:"/sobre", element:<Sobre/>},
//   {path:"*", element:<Page404/>}
// ])

// vai pegar o layout dentro de todos os itens dentro da rota   <Route path='/' element={<Layout />}>

const rotas = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home/>} />
    <Route index path='/home' element={<Home/>} />
    <Route path='/sobre' element={<Sobre/>} />
    <Route path='/contato' element={<Contato/>} />
    <Route path='/estado1' element={<Estado1/>} />
    <Route path='/estado2' element={<Estado2/>} />
    <Route path='/campoTexto' element={<CampoTexto/>}/>
    <Route path='*' element={<Page404/>} />
  </Route>  
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={rotas}/>      
  </StrictMode>,
)
