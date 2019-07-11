/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Layout } from "antd";
import { Container, Title } from "../components/Layout";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const { Sider } = Layout;

const MyButton = styled.div`
  color: white;
  background: none;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  border: none;
  font-weight: 400;
  text-align: left;
  padding: 1rem 0 1rem 3.5rem;
  font-size: 1rem;
  cursor: pointer;
  ${props => (props.active ? "background-color: #1984FC;" : "")}

  &:hover {
    background-color: #1984fc;
  }
`;

const Logo = () => {
  return (
    <Container fullWidth padding="2rem 0 2rem 0">
      <Title
        css={css`
          padding-left: 3rem;
          color: white;
        `}
      >
        FANALYSIS.
      </Title>
    </Container>
  );
};

const Panal = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <a href="/">
        <MyButton active={window.location.pathname === "/"}>OVERVIEW</MyButton>
      </a>
      <a href="/user">
        <MyButton active={window.location.pathname === "/user"}>
          VISITORS
        </MyButton>
      </a>
      <a href="/">
        <MyButton>GENDER</MyButton>
      </a>
      <a href="/">
        <MyButton>DURATION</MyButton>
      </a>
      <a href="/retention">
        <MyButton active={window.location.pathname === "/retention"}>
          RETENTION
        </MyButton>
      </a>
      <a href="/">
        <MyButton>CUSTOMER JOURNEY</MyButton>
      </a>
    </div>
  );
};

const Sidebar = () => {
  return (
    <Sider
      width={300}
      css={css`
        background-color: #121831;
      `}
    >
      <Logo />
      <Panal />
    </Sider>
  );
};

export default Sidebar;
