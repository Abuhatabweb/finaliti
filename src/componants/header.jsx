import { Container, Nav, Navbar } from "react-bootstrap";
import "../styles/header.css";
import { NavLink } from "react-router-dom";
export function Header({ userName, setUserName }) {
  let set = () => {
    setUserName("");
  };
  return (
    <>
      <Navbar bg="primary" className="nav-bar justify-content-between">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            E.commerce
          </Navbar.Brand>
          <Nav className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-light text-bg-secondary rounded"
                  : "nav-link"
              }
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-light text-bg-secondary rounded"
                  : "nav-link"
              }
              to="/products"
            >
              products
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-light text-bg-secondary rounded"
                  : "nav-link"
              }
              to="/"
              onClick={set}
            >
              {userName == "" ? "login" : "logout"}
            </NavLink>
          </Nav>
          <Navbar.Collapse className="">
            <Navbar.Text className="text-light">
              Signed in as: 
              <a href="#login" className="text-warning">
                {userName == "" ? " gust" : userName}
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
