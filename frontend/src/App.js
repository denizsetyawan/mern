import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductList from "./components/ProductList"
import AddProduct from "./components/AddProduct"
import EditProduct from "./components/EditProduct"
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
        <div className="container">
            <div className="columns">
                <div className="column">
                    <Switch>
                        <Route exact path="/">
                            <ProductList />
                        </Route>
                        <Route path="/add">
                            <AddProduct />
                        </Route>
                        <Route path="/edit/:id">
                            <EditProduct />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/dashboard">
                            <Navbar/>
                            <Dashboard />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
  );
}

export default App;
