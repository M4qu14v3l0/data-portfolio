import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from '../pages/inicio/Inicio'
import Layout from '../pages/layout/Layout'
import '../styles/index.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
