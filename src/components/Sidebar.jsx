/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Layout, Button } from "antd";
import { Container, Title } from "../components/Layout";
import styled from "@emotion/styled";
const { Header, Footer, Sider, Content } = Layout;

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
  &:hover {
    background-color: rgba(122, 80, 175, 0.29);
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
        FANALYSIS
      </Title>
    </Container>
  );
};

const Panal = () => {
  return (
    <div
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <MyButton>OVERVIEWS</MyButton>
      <MyButton>VISITORS</MyButton>
      <MyButton>GENDER</MyButton>
      <MyButton>DURATION</MyButton>
      <MyButton>RETENTION</MyButton>
      <MyButton>CUSTOMER JOURNEY</MyButton>
    </div>
  );
};

const Sidebar = () => {
  return (
    <Sider
      width={300}
      css={css`
        background-color: #211634;
      `}
    >
      <Logo />
      <Panal />
    </Sider>
  );
};

export default Sidebar;
