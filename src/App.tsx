import React from 'react'
import Navigation from './components/nav/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Index from './pages/Index/index'
import About from './pages/About/index'
import Blog from './pages/Blog/index'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/about' exact component={About} />
          <Route path='/blog' exact component={Blog} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
