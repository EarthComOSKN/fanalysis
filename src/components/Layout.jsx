/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Drawer as AntDrawer, Button } from "antd";

export const Container = styled.div`
  display: flex;
  padding: ${props => (props.padding ? props.padding : `0 5rem`)};
  margin: ${props => (props.margin ? props.margin : "8px 0")};
  flex-wrap: ${props => (props.wrap ? "wrap" : "nowrap")};
  flex-direction: ${props => (props.row ? "row" : "column")};
  ${props => (props.align ? `align-items:${props.align};` : "")}
  ${props => (props.justify ? `justify-content:${props.justify};` : "")}
  ${props =>
    props.fullWidth ? "width: 100%; padding-left: 0; padding-right: 0;" : ""}
  ${"" /* ${props=> (props.notOverflow ? '' : 'overflow: auto;' )} */}
`;

export const Flex = styled.div`
  display: flex;
`;

export const Title = styled.div`
  color: black;
  font-size: 1.5rem;
  font-weight: 800;
`;

export const NavbarContainer = styled.nav`
  background-color: white;
  height: 56px;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  ${props => (props.radius ? `border-radius: ${props.radius}` : "")}
  ${props => (props.fixed ? "position: fixed; z-index: 99;" : "")}
`;

export const NavButton = styled(Button)`
  padding: 0 32px;
`;

const BaseDrawer = styled(AntDrawer)`
  transform: translateY(0) !important;
  .ant-drawer-content {
    overflow: auto;
    max-height: ${props => (props.maxHeight ? props.maxHeight : "100%")};
    ${props => (props.minHeight ? `min-height: ${props.minHeight};` : "")}
    ${props => (props.borderRadius ? "border-radius: 24px 24px 0 0;" : "")}
  }
  .ant-drawer-content-wrapper {
    ${props => (props.borderRadius ? "border-radius: 24px 24px 0 0;" : "")}
  }
  .ant-drawer-body {
    padding: 0;
    position: relative;
    ${props => (props.padding ? `padding: ${props.padding};` : "")}
  }
`;

export const Spacer = styled.div`
  flex: ${props => props.flex || 1};
`;
export const NavDrawerSpacer = styled.div`
  height: 55px;
`;
