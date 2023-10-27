import React from 'react'
import ReactDOM from 'react-dom/client'
import Global from './assets/global.svg'
import './routes/App'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Adicionar from './routes/Adicionar.jsx'
import Listar from './routes/Listar.jsx'
import Marcar from './routes/Marcar.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/adicionar',
    element: <Adicionar/>
  },
  {
    path: "/listar",
    element: <Listar/>  
  },
  {
    path: "/marcar",
    element: <Marcar/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='header'>
      <img className='global-logo' src={Global} alt="" />
      <h1 className='header-titulo'>Lista de Tarefas</h1>
    </div>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
