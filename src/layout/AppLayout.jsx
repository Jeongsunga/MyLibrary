import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useUserStore from "../stores/useUserStore";

const AppLayout = () => {

  const navigate = useNavigate()
  const { authenticate, setAuthenticate } = useUserStore();

  const goToLogin = () => {
    if (authenticate) {
      const confirmed = window.confirm("로그아웃 하시겠습니까?");
      if (confirmed) {
        setAuthenticate(false);
        navigate("/");
      }
    } else {
      navigate("/login");
    }
  }


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">코알누 도서관</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/'>메인</Nav.Link>
              <Nav.Link as={Link} to='/mypage'>나의 책</Nav.Link>
              <Nav.Link onClick={goToLogin}>{authenticate ? '로그아웃' : '로그인'}</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default AppLayout;
