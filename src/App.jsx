import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart.jsx'
import ProductDisplay from './pages/ProductDisplay.jsx';
import Home from './pages/home.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx'


function App() {
  //   const [data,setdata]=useState([])

  //   const api="https://fakestoreapi.com/products "
  // axios.get(api).then((data)=>{
  //   // console.log(data);
  //   setdata(data.data)

  // })

  return (
    <div>
      {/* {
        data.map((data)=>(
          <h1>{data.title}</h1>
        ))
      } */}
      <BrowserRouter>
     
      <Navbar />
    
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart />}/>
        <Route path='product/:id' element={<ProductDisplay/>}/> 
        <Route path='CheckoutPage/:id' element={<CheckoutPage/>}/> 
      
        
      </Routes>
      <Footer /> 
      </BrowserRouter>

    </div>
  )
}

export default App
