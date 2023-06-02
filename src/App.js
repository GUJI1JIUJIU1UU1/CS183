import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Account } from "./pages/account/Account"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Register } from "./pages/login/Register"
import { useSelector } from "react-redux"
import { createBrowserHistory } from 'history';

const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  const history = createBrowserHistory();
  history.push('/login');

  /*const navigate = useNavigate();
  useEffect(() => {
    if (isLoggIn) {
      navigate('/home', { replace: true });
    }
  }, [isLoggIn, navigate]);*/
  
  
  return (
    <>

      {isLoggIn && (
        <Router history={history}>

          <Header />
          <Routes>
            <Route exact path='/login' element={<Home/>} />
            <Route exact path='/regsiter' element={<Register/>} />
            <Route exact path='/account' element={<Account/>} />
          </Routes>
          <Footer />
          
        </Router>
      )}
      {!isLoggIn && <Login />}
    </>
  )
}
export default App

