/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Icon, Dropdown } from "antd";
import { Title, Container } from "./Layout";

export const Filter = () => {
  return (
    <Container
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
