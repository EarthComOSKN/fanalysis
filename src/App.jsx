/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Container } from "./components/Layout";

import Overview from "./pages/Overview";
import User from "./pages/User";

const App = () => {
  return (
    <Container
      margin="0"
      padding="0"
      css={css`
        height: 100vh;
        width: 100vw;
      `}
    >
      <Navbar />
      <Router>
        <Route path="/" exact component={Overview} />
        <Route path="/user" exact component={User} />
      </Router>
    </Container>
  );
};

export default App;
