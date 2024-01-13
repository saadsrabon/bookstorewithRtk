
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import AddBook from './pages/AddBook'
import EditBooks from './pages/EditBooks'
import { Layout } from './layout/Layout'
import { useState } from 'react'


function App() {

  const [isFeatured, setIsFeatured] = useState("");
  return (
    <>
     <BrowserRouter>
     <Layout >
     <Routes>
     
      <Route path="/" element={<Home isFeatured={isFeatured} setIsFeatured={setIsFeatured} />} />
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/EditBook" element={<EditBooks />} />
     
        

        </Routes>
        </Layout>
     </BrowserRouter>
    </>
  )
}

export default App
