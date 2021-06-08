import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { commerce } from './lib/commerce';
import { Helmet } from "react-helmet";

import { Products, Navbar, Testimonials, Services, HomeServices, HomeBio, Contact, MyJourney, ThankYou, Footer, ScrollToTop, Greetings, HomeTestimonials, Quote, } from './Components';
import './Index.css'

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data }  = await commerce.products.list();

        setProducts(data);
    }


    useEffect(() => {
        fetchProducts();
   }, []);


    return (
        <div className="App">

        <Helmet>
          <title>Lanthier Web Design</title>
          <meta name="description"
             content="Hi! I'm Claudia Remy, a Calgary based evidential medium and this is my website. Here you can view who I am, the services I offer, and a multitle of customer testimonials."/>
        </Helmet>

          <Router>
            <Switch> 
             <Route path="/" exact component> <Navbar /> <Greetings/> <Products products={products}/> <Quote/> <HomeBio/> <HomeServices/> <HomeTestimonials/> <Footer/></Route>

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