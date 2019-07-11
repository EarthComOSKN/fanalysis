/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import { Container } from './components/Layout'

import Overview from './pages/Overview'
import User from './pages/User'
import Retention from './pages/Retention'

const App = () => {
  return (
    <Container
      margin="0"
      padding="0"
      css={css`
        height: 100vh;
        width: 100vw;
        background-image: linear-gradient(180deg, rgba(76, 36, 126, 0.92) 0%, #210C43 61.46%);
      `}
    >
      <Navbar />
      <Router>
        <Route path='/' exact component={Overview} />
        <Route path='/user' exact component={User} />
        <Route path='/retention' exact component={Retention} />
      </Router>
    </Container>
  );
};

export default App;
