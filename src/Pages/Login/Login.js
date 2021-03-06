import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import LoginWithGoogle from "../Shared/LoginWithGoogle/LoginWithGoogle";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-secondary text-center mt-2">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="secondary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>
        <small>
          New to <b>Your Doc</b>?
        </small>
        <Link
          to="/register"
          className="text-success pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          <small>Please Register</small>
        </Link>{" "}
      </p>
      <p>
        <small>Forget Password? </small>
        <button
          className="btn btn-link text-success pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          <small>Reset Password</small>
        </button>{" "}
      </p>
      <LoginWithGoogle></LoginWithGoogle>
      <ToastContainer />
    </div>
  );
};

export default Login;
