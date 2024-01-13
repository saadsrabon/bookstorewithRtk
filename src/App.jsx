
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import AddBook from './pages/AddBook'
import EditBooks from './pages/EditBooks'
import { Layout } from './layout/Layout'

function App() {


  return (
    <>
     <BrowserRouter>
     <Layout>
     <Routes>
     
      <Route path="/" element={<Home />} />
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/EditBook" element={<EditBooks />} />
     
        

        </Routes>
        </Layout>
     </BrowserRouter>
    </>
  )
}

export default App
