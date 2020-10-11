import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
const App = () => (
  <main>
    <Switch exact path="/">
      <Route exact path="/"  component={Dashboard} />
    </Switch>
  </main>
)

export default App