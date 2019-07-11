/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";

import Navbar from "./components/Navbar";
import { Container, Title } from "./components/Layout";

import Overview from "./pages/Overview";
import User from "./pages/User";
import Sidebar from "./components/Sidebar";

const { Header, Footer, Sider, Content } = Layout;

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
          <Content>Content</Content>
        </Layout>
      </Layout>
      {/* <Navbar />
      <Router>
        <Route path="/" exact component={Overview} />
        <Route path="/user" exact component={User} />
      </Router> */}
    </Container>
  );
};

export default App;
