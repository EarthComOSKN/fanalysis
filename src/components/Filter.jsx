/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Icon, Dropdown, Menu, Button, DatePicker } from "antd";
import { ReactComponent as FilterIcon } from "../icons/Group.svg";
import { Title, Container } from "./Layout";

const DDBut = ({ title }) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Icon type="user" />
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        3rd item
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <Button
        css={css`
          background-color: #3e4a7e;
          border-color: #3e4a7e !important;
          color: white;
        `}
      >
        {title} <Icon type="down" />
      </Button>
    </Dropdown>
  );
};

export const Filter = () => {
  return (
    <Container
      css={css`
        justify-content: flex-start;
      `}
    >
      <Title css={css``}>
        <FilterIcon />
        <span
          css={css`
            margin-left: 1rem;
            color: #7681a4;
          `}
        >
          View and Filter By:
        </span>
        <span
          css={css`
            margin-left: 1rem;
          `}
        >
          <DDBut title="Age Render" />
        </span>
        <span
          css={css`
            margin-left: 1rem;
          `}
        >
          <DDBut title="Gender" />
        </span>
        <span
          css={css`
            margin-left: 1rem;
          `}
        >
          <DatePicker
            css={css`
              background-color: #3e4a7e;
              .ant-input {
                background-color: #3e4a7e !important;
                border-color: #3e4a7e !important;
                border-radius: 4px !important;
              }
            `}
            dateRender={current => {
              const style = {};
              if (current.date() === 1) {
                style.border = "1px solid #1890ff";
                style.borderRadius = "50%";
              }
              return (
                <div className="ant-calendar-date" style={style}>
                  {current.date()}
                </div>
              );
            }}
          />
        </span>
        <span
          css={css`
            margin-left: 1rem;
          `}
        >
          <DDBut title="Diaplay" />
        </span>
        <span
          css={css`
            margin-left: 1rem;
          `}
        >
          <DDBut title="View By" />
        </span>
      </Title>
      <Container
        row
        css={css`
          justify-content: flex-start;
        `}
      >
        {/* <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown /> */}
      </Container>
    </Container>
  );
};

export default Filter;
