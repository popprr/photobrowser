import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './containers/Gallery';

const App = () => (
  <div>
    <Header/>
      <Switch>
        <Route path='/gallery' component={ Gallery } />
        <Redirect to='/gallery' />
      </Switch>
    <Footer/>
  </div>
);

export default App;
