/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Button, Icon, Menu, Dropdown } from "antd";
import { NavbarContainer, Title, Container } from "./Layout";

const Navbar = () => (
  <NavbarContainer>
    <Title
      css={css`
        margin-left: 2rem;
      `}
    >
      Fanalysis
    </Title>
    <Container
      css={css`
        justify-content: flex-end;
      `}
      row
    >
      <Button>Overview</Button>
      <Button>Overview</Button>
    </Container>
  </NavbarContainer>
);

const DropDown = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown
      overlay={menu}
      css={css`
        margin-right: 50px;
      `}
    >
      <a className="ant-dropdown-link" href="#">
        Filter <Icon type="down" />
      </a>
    </Dropdown>
  );
};

export const Filter = () => {
  return (
    <NavbarContainer
      css={css`
        justify-content: flex-start;
      `}
    >
      <Title
        css={css`
          margin-left: 2rem;
        `}
      >
        <Icon type="filter" />
        <span>View and Filter By:</span>
      </Title>
      <Container
        row
        css={css`
          justify-content: flex-start;
        `}
      >
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
