import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductList from "./components/ProductList"
import AddProduct from "./components/AddProduct"

function App() {
  return (
    <Router>
        <div className="container">
            <div className="columns">
                <div className="column is-half if-offset-one-quarter">
                    <Switch>
                        <Route exact path="/">
                            <ProductList />
                        </Route>
                        <Route path="/add">
                            <AddProduct />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
  );
}

export default App;
