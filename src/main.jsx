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
import CampoTexto from './pages/Estado/CampoTexto.jsx'
import Contador from './pages/Estado/Contador.jsx'
import ComunicacaoDireta from './pages/Comunicacao/Comunicacaodireta.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ComunicacaoIndireta from './pages/Comunicacao/Comunicacaoindireta.jsx'
import UseEffect from './pages/hooks-basicos/UseEffect.jsx'
import UseRef from './pages/hooks-basicos/UseRef.jsx'
import Tradutor from './pages/Tradutor.jsx'


const rotas = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home/>} />
    <Route index path='/home' element={<Home/>} />
    <Route path='/sobre' element={<Sobre/>} />
    <Route path='/contato' element={<Contato/>} />
    <Route path='/estado1' element={<Estado1/>} />
    <Route path='/estado2' element={<Estado2/>} />
    <Route path='/campoTexto' element={<CampoTexto/>}/>
    <Route path='/contador' element={<Contador/>}/>
    <Route path='/direta' element={<ComunicacaoDireta/>}/>
    <Route path='/indireta' element={<ComunicacaoIndireta/>}/>
    <Route path='/effect' element={<UseEffect/>}/>
    <Route path='/ref' element={<UseRef/>}/>
    <Route path='/tradutor' element={<Tradutor/>}/>
    
    

    <Route path='*' element={<Page404/>} />
  </Route>  
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={rotas}/>      
  </StrictMode>,
)
