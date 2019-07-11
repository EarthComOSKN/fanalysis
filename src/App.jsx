/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Layout } from "antd"

import { Container } from "./components/Layout"
import Sidebar from "./components/Sidebar"

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
        background-image: linear-gradient(
          180deg,
          rgba(76, 36, 126, 0.92) 0%,
          #210c43 61.46%
        );
      `}
    >
      <Layout>
        <Sidebar />
        <Layout
          css={css`
            background-image: linear-gradient(#4c247e, #210c43);
          `}
        >
          <Router>
            <Route path='/' exact component={Overview} />
            <Route path='/user' exact component={User} />
            <Route path='/retention' exact component={Retention} />
          </Router>
        </Layout>
      </Layout>
    </Container>
  );
};
export default App;
