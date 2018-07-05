import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PhotoList from './containers/PhotoList';
import PhotoDetails from './containers/PhotoDetails';

const App = () => (
  <div>
    <Header/>
      <Switch>
        <Route path='/gallery' component={ PhotoList } />
        <Route path='/photo/:id' component={ PhotoDetails } />
        <Redirect to='/gallery' />
      </Switch>
    <Footer/>
  </div>
);

export default App;
