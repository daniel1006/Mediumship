import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { commerce } from './lib/commerce';

import { Products, Navbar, Testimonials, Services, HomeServices, HomeBio, Contact } from './Components';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data }  = await commerce.products.list();

        setProducts(data);
    }


    useEffect(() => {
        fetchProducts();
   }, []);

console.log(products)

    return (
        <div>
          <Router>
            <Switch> 
             <Route path="/" exact component> <Navbar /> <Products products={products}/> <HomeBio/> <HomeServices/> </Route>

              <Route path="/testimonials" component={Testimonials}> <Navbar /> <Testimonials/> </Route>
              <Route path="/services" component={Services}> <Navbar /> <Services/> </Route>
              <Route path="/contact" component={Contact}> <Navbar /> <Contact/> </Route>
            </Switch>
          </Router>
        </div>
    )
}

export default App
