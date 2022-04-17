import React from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './componenets/header/Header';
import Footer from './componenets/footer/Footer';
import Home from './componenets/home/Home';
import About from './componenets/about/About';
import Service from './componenets/service/Service';

function App() {
  return (
    <>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/service" component={Service} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
