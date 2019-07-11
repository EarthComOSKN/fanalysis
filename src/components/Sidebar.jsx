/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Layout } from "antd";
import { Container, Title } from "../components/Layout";
import styled from "@emotion/styled";
import { ReactComponent as OverviewIcon } from "../icons/tiles.svg";
import { ReactComponent as UserIcon } from "../icons/users.svg";
import { ReactComponent as GenderIcon } from "../icons/love.svg";
import { ReactComponent as TimeIcon } from "../icons/time.svg";
import { ReactComponent as GIcon } from "../icons/graph.svg";
import { ReactComponent as MapIcon } from "../icons/map.svg";

import { Link } from "react-router-dom";
const { Sider } = Layout;

const MyButton = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  background: none;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  border: none;
  font-weight: 400;
  text-align: left;
  padding: 1rem 0 1rem 3rem;
  font-size: 1.2rem;
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
        <MyButton active={window.location.pathname === "/"}>
          {" "}
          <OverviewIcon
            css={css`
              width: 30px;
              height: 30px;
            `}
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 1rem;
            `}
          >
            OVERVIEW
          </div>
        </MyButton>
      </a>
      <a href="/user">
        <MyButton active={window.location.pathname === "/user"}>
          <UserIcon
            css={css`
              width: 30px;
              height: 30px;
            `}
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 1rem;
            `}
          >
            VISITORS
          </div>
        </MyButton>
      </a>
      <a href="/">
        <MyButton>
          <GenderIcon
            css={css`
              width: 30px;
              height: 30px;
            `}
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 1rem;
            `}
          >
            GENDER
          </div>
        </MyButton>
      </a>
      <a href="/">
        <MyButton>
          <MapIcon
            css={css`
              width: 30px;
              height: 30px;
            `}
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 1rem;
            `}
          >
            CUSTOMER JOURNEY
          </div>
        </MyButton>
      </a>
      <a href="/retention">
        <MyButton active={window.location.pathname === "/retention"}>
          <GIcon
            css={css`
              width: 30px;
              height: 30px;
            `}
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 1rem;
            `}
          >
            RETENTION
          </div>
        </MyButton>
      </a>
    </div>
  );
};

const Sidebar = () => {
  return (
    <Sider
      width={360}
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
