import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Gallery from './containers/Gallery';
import Photo from './containers/Photo';

const App = () => (
  <div>
    <Switch>
      <Route path='/gallery' component={ Gallery } />
      <Route path='/photo/:id' component={ Photo } />
      <Redirect to='/gallery' />
    </Switch>
  </div>
);

export default App;
