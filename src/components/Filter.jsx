/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Icon, Dropdown, Menu, Button, DatePicker } from "antd";
import { ReactComponent as FilterIcon } from "../icons/Group.svg";
import { Title, Container } from "./Layout";
import { useState } from "react";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const DDBut = ({ title, menu }) => {
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

const gender = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Icon type="user" />
        Female
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        Male
      </Menu.Item>
    </Menu>
  );
  return menu;
};

const display = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Icon type="video-camera" />
        Zone 1
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        Zone 2
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        Zone 3
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        Zone 4
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        Zone 5
      </Menu.Item>
    </Menu>
  );
  return menu;
};

const agerange = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Icon type="user" />
        7-14
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        15-20
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        21-40
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        41-60
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        60+
      </Menu.Item>
    </Menu>
  );
  return menu;
};

export const Filter = () => {
  const [dateMode, setDateMode] = useState(0);
  const viewby = () => {
    const menu = (
      <Menu>
        <Menu.Item key="1" onClick={() => setDateMode(0)}>
          <Icon type="calendar" />
          Day
        </Menu.Item>
        <Menu.Item key="2" onClick={() => setDateMode(1)}>
          <Icon type="calendar" />
          Week
        </Menu.Item>
        <Menu.Item key="2" onClick={() => setDateMode(2)}>
          <Icon type="calendar" />
          Month
        </Menu.Item>
        <Menu.Item key="2" onClick={() => setDateMode(3)}>
          <Icon type="calendar" />
          Year
        </Menu.Item>
      </Menu>
    );
    return menu;
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
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
          <DDBut title="Age Ranges" menu={agerange} />
        </span>
        <span
          css={css`
            margin-left: 1rem;
          `}
        >
          <DDBut title="Gender" menu={gender} />
        </span>
        <span
          css={css`
            margin-left: 1rem;
          `}
        >
          <DDBut title="View By" setDateMode={setDateMode} menu={viewby} />
        </span>
        <span
          css={css`
            margin-left: 1rem;
          `}
        >
          <DDBut title="Display" menu={display} />
        </span>
        <span
          css={css`
            margin-left: 1rem;
          `}
        >
          {dateMode === 0 ? (
            <RangePicker
              onChange={onChange}
              css={css`
                background-color: #3e4a7e;
                .ant-input {
                  background-color: #3e4a7e !important;
                  border-color: #3e4a7e !important;
                  border-radius: 4px !important;
                }
              `}
            />
          ) : dateMode === 1 ? (
            <WeekPicker
              onChange={onChange}
              placeholder="Select week"
              css={css`
                background-color: #3e4a7e;
                .ant-input {
                  background-color: #3e4a7e !important;
                  border-color: #3e4a7e !important;
                  border-radius: 4px !important;
                }
              `}
            />
          ) : dateMode === 2 ? (
            <MonthPicker
              onChange={onChange}
              placeholder="Select month"
              css={css`
                background-color: #3e4a7e;
                .ant-input {
                  background-color: #3e4a7e !important;
                  border-color: #3e4a7e !important;
                  border-radius: 4px !important;
                }
              `}
            />
          ) : (
            <MonthPicker
              onChange={onChange}
              placeholder="Select month"
              css={css`
                background-color: #3e4a7e;
                .ant-input {
                  background-color: #3e4a7e !important;
                  border-color: #3e4a7e !important;
                  border-radius: 4px !important;
                }
              `}
            />
          )}
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
