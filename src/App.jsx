/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";

import { Container } from "./components/Layout";
import Sidebar from "./components/Sidebar";

import Overview from "./pages/Overview";
import User from "./pages/User";
import Retention from "./pages/Retention";
import Gender from "./pages/Gender";
import Customer from "./pages/Customer";

const App = () => {
  return (
    <Container
      margin="0"
      padding="0"
      css={css`
        height: 100vh;
        width: 100vw;
        background-image: linear-gradient(180deg, #303f65 0%, #121830 61.46%);
      `}
    >
      <Router>
        <Layout>
          <Sidebar />
          <Layout
            css={css`
              background-image: linear-gradient(#303f65, #121830);
            `}
          >
            <Route path="/" exact component={Overview} />
            <Route path="/user" exact component={User} />
            <Route path="/retention" exact component={Retention} />
            <Route path="/gender" exact component={Gender} />
            <Route path="/customer" exact component={Customer} />
          </Layout>
        </Layout>
      </Router>
    </Container>
  );
};
export default App;
