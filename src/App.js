import React from 'react'
import Topbar from './Components/topbar/Topbar'
import Sidebar from './Components/sidebar/Sidebar'
import Home from "./pages/home/Home"
import './app.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import UserList from './pages/userlist/UserList'
import User from './pages/user/User'
import NewUser from './pages/newuser/NewUser'
import Products from './pages/products/Products'
import Product from './pages/product/Product'
import NewProduct from './pages/newproduct/NewProduct'

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container" >
        <Sidebar/>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/users'>
            <UserList/>
          </Route>
          <Route path="/user/:userId">
            <User/>
          </Route>
          <Route path="/newUser">
            <NewUser/>
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/product/:productId">
            <Product/>
          </Route>
          <Route path="/newProduct">
            <NewProduct/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
