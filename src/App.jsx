/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Overview from './pages/Overview'

const App = () => {
  return (
    <Router>
      <Route
        path='/'
        exct
        component={Overview}
      />
    </Router>
  )
}

export default App
