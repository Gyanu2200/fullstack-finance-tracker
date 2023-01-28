import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setUser(user);
    console.log(user);
  }, []);

  //logout handle
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser({});
    navigate("/"); //navigate is not working
  };
  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <div className="nav-link fw-bolder text-warning">
                  Welcome Back {user.name}
                </div>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="nav-link" to="#" onClick={handleLogout}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
                <Link className="nav-link" to="/">
                  Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
