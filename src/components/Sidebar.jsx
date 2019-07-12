/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { Container, Title } from "../components/Layout";
import styled from "@emotion/styled";
import { ReactComponent as OverviewIcon } from "../icons/tiles.svg";
import { ReactComponent as UserIcon } from "../icons/users.svg";
import { ReactComponent as GenderIcon } from "../icons/love.svg";
import { ReactComponent as TimeIcon } from "../icons/time.svg";
import { ReactComponent as GIcon } from "../icons/graph.svg";
import { ReactComponent as MapIcon } from "../icons/map.svg";

import { withRouter } from "react-router-dom";
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

const Panal = props => {
  console.log(props);
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <MyButton
        active={window.location.pathname === "/"}
        onClick={() => {
          props.history.push("/");
        }}
      >
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
      <MyButton
        active={window.location.pathname === "/user"}
        onClick={() => {
          props.history.push("/user");
        }}
      >
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
      <MyButton
        active={window.location.pathname === "/customer"}
        onClick={() => {
          props.history.push("/customer");
        }}
      >
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

      <MyButton
        active={window.location.pathname === "/retention"}
        onClick={() => {
          props.history.push("/retention");
        }}
      >
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
    </div>
  );
};

const Sidebar = props => {
  console.log(props);
  return (
    <Sider
      width={300}
      css={css`
        background-color: #121831;
      `}
    >
      <Logo />
      <Panal {...props} />
    </Sider>
  );
};

export default withRouter(Sidebar);
