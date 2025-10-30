 import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./Components/Common/Footer"
import Admin from "./Pages/Admin"
import Login from "./Components/Home/Login"
import ProductList from "./Components/ProductList"
import ScrollToTop from "./Components/Common/ScrollToTop"
import Breadcrumb from "./Components/Common/Breadcrumb"
import ProductDetail from "./Components/Home/ProductDetail"
import ProtectedRoute from "./Components/Common/ProtectedRoute"
import Web from "./Components/Home/Web"
import WebQuoteForm from "./Components/Common/WebQuoteForm"
import Navbar from "./Components/Common/Navbar"




function App() {
  return (
    <>
     <Router>
      <ScrollToTop/>
       <Navbar/> 
       <Breadcrumb/> 
     <Routes> 
     <Route path="/" element ={  <Home/> }/> 
    <Route path="/Articulos_de_coleccion" element={<ProductList/>} />
     <Route path="/producto/:id" element={<ProductDetail/>} /> 
      <Route path="/Cotizacion_de_servicios" element={<Web/>} /> 
    <Route path="/login" element ={  <Login/> }/> 
    <Route path="/formulario" element ={  <WebQuoteForm/> }/> 
    
    <Route 
         path="/admin" 
         element={
           <ProtectedRoute>
            <Admin/>
           </ProtectedRoute>
         } 
    />
     </Routes> 
     <Footer/> 
     </Router>
    </>
  )
}

export default App
