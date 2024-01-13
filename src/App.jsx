
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import AddBook from './pages/AddBook'
import EditBooks from './pages/EditBooks'
import { Layout } from './layout/Layout'
import { useState } from 'react'


function App() {

  const [isFeatured, setIsFeatured] = useState(null);
  const [seacrh ,setSearch]=useState("")
  return (
    <>
     <BrowserRouter>
     <Layout  setSearch={setSearch}>
     <Routes>
     
      <Route path="/" element={<Home seacrh={seacrh} isFeatured={isFeatured} setIsFeatured={setIsFeatured} />} />
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/EditBook/:id" element={<EditBooks />} />
     
        

        </Routes>
        </Layout>
     </BrowserRouter>
    </>
  )
}

export default App
