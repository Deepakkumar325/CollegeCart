import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import MarketPlace from './components/MarketPlace';
import Sell from './components/Sell';
import ProductPage from './components/ProductPage';
import MyProducts from './components/MyProducts'


import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    
    setAlert({msg: message,type: type})

    setTimeout(() => {

      setAlert(null);

    }, 2000);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar showAlert={showAlert} />

        <Alert alert={alert} />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login showAlert={showAlert} />} />
        
          <Route path="/signup" element={<Signup showAlert={showAlert} />} />
          
          <Route path="/marketplace" element={<MarketPlace />} />
          
          <Route path="/marketplace/request" element={<MarketPlace />} />
          
          <Route path="/marketplace/rent" element={<MarketPlace />} />
          
          <Route path="/marketplace/donate" element={<MarketPlace />} />
          
          <Route path="/marketplace/sell" element={<Sell showAlert={showAlert} />} />
         
          <Route path="/product/:productName" element={<ProductPage />} />
         
          <Route path="/myproducts" element={<MyProducts showAlert={showAlert} />} />
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
