import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { commerce } from './lib/commerce';

import { Products, Navbar, Testimonials, Services, HomeServices, HomeBio, Contact, MyJourney, ThankYou, Footer, ScrollToTop, Greetings  } from './Components';

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
             <Route path="/" exact component> <Navbar /> <Greetings/> <Products products={products}/> <HomeBio/> <HomeServices/> <Footer/> </Route>

              <Route path="/testimonials" component={Testimonials}> <Navbar /> <Testimonials/> <Footer/> </Route>
              <Route path="/services" component={Services}> <Navbar /> <Services/> <Footer/> </Route>
              <Route path="/myjourney" component={MyJourney}> <Navbar /> <MyJourney/> <Footer/> </Route>
              <Route path="/contact" component={Contact}> <Navbar /> <Contact/> <Footer/> </Route>
              <Route path="/thankyou" component={ThankYou} > <ThankYou /> </Route>
            </Switch>
            <ScrollToTop/>
          </Router>
        </div>
    )
}

export default App
