import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form, Card, Button, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";

import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { logIn, passwordReset, googleSignIn } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  const handlePasswordReset = async () => {
    setNotification("");
    setError("");

    try {
      await passwordReset(email);
      setNotification("Password reset email sent!");
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  const handleGoogleSignin = async () => {
    setError("");

    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {notification && <Alert variant="success">{notification}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-end">
              <Card.Link href="#" onClick={handlePasswordReset}>
                Forgot password
              </Card.Link>
            </div>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignin}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;
