/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Button ,Icon} from 'antd';
import { NavbarContainer,Title, Container } from "./Layout";


const Navbar = () => {
  return <NavbarContainer >
    <Title css={css `margin-left:2rem;`}>Fanalysis</Title>
    <Container css={css`justify-content:flex-end`} row>
      <Button >Overview</Button>
      <Button >Overview</Button>
    </Container>
  </NavbarContainer>
};

export default Navbar