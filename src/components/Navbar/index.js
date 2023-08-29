import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import "rsuite/dist/rsuite.min.css";
export default function NavbarComponent() {
    return (
  <Navbar>
    <Navbar.Brand href="#">GoEase</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Menu title="About">
        <Nav.Item>Company</Nav.Item>
        <Nav.Item>Team</Nav.Item>
        <Nav.Menu title="Contact">
          <Nav.Item>Via email</Nav.Item>
          <Nav.Item>Via telephone</Nav.Item>
        </Nav.Menu>
      </Nav.Menu>
    </Nav>
    <Nav pullRight>
      <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
    </Nav>
  </Navbar>
    );
};

