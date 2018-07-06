import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './containers/Gallery';
import Photo from './containers/Photo';

const App = () => (
  <div>
    <Header/>
      <Switch>
        <Route path='/gallery' component={ Gallery } />
        <Route path='/photo/:id' component={ Photo } />
        <Redirect to='/gallery' />
      </Switch>
    <Footer/>
  </div>
);

export default App;
