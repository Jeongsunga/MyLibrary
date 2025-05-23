import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import useUserStore from "../../stores/useUserStore";

const Loginpage = () => {
  const navigate = useNavigate();
  const { setAuthenticate } = useUserStore();
  const loginUser = (event) => {
    event.preventDefault();
    console.log("login user function issue");
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Loginpage;
