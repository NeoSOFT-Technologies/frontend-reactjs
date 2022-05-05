import React, { useEffect, useState } from "react";
import { Form, Button, Alert, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PasswordButtons from "../../components/password-field/Password";
import Loader from "../../components/loader/Loader";
import { regexForEmail, regForPassword, logo } from "../../resources/constants";

import { ToastAlert } from "../../components/toast-alert/toast-alert";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUserDetails } from "../../store/login/slice";
import { RootState } from "../../store";
import { LoginPageState } from "../../types/redux";

export default function Login() {
  const dispatch = useAppDispatch();
  const loginState: LoginPageState = useAppSelector(
    (state: RootState) => state.login
  );
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowpassword] = useState(false);

  const navigate = useNavigate();

  const handle = (event: any) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setFormData({ ...formdata, email: value });

        setError({
          ...error,
          email: regexForEmail.test(value) ? "" : "Email is not valid",
        });
        break;
      case "password":
        setFormData({ ...formdata, password: value });
        setError({
          ...error,
          password: regForPassword.test(value) ? "" : "password is not valid",
        });
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (!loginState.loading && loginState.data && !loginState.error) {
      ToastAlert("Logged In", "success");
      navigate("/landing");
    } else if (!loginState.loading && !loginState.data && loginState.error) {
      ToastAlert(`${loginState.error}!!!`, "error");
    }
  }, [loginState]);

  const validate = () => {
    let valid = false;

    valid = !(formdata.email.length === 0 || formdata.password.length === 0);

    return valid;
  };
  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (validate()) {
      const data = {
        username: formdata.email,
        password: formdata.password,
      };
      dispatch(getUserDetails(data));
    } else {
      ToastAlert("Please fill all the fields", "error");
    }
  };

  return (
    <>
      {loginState.loading ? (
        <Loader />
      ) : (
        <div className="d-flex align-items-center auth px-0 mt-3 login">
          <div className="row w-100 mx-0">
            <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={logo} alt="logo" />
                </div>
                <h2>Hello! let&apos;s get started</h2>
                <h4 className="font-weight-light">Sign in to continue.</h4>
                <Form className="pt-3">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      data-testid="email-input"
                      name="email"
                      placeholder="Enter Email"
                      onChange={handle}
                      required
                    />
                    {error.email.length > 0 && (
                      <Alert variant="danger" className="mt-2">
                        {error.email}
                      </Alert>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        data-testid="password-input"
                        placeholder="Enter password"
                        onChange={handle}
                      />
                      <PasswordButtons
                        viewPassword={showPassword}
                        setViewPassword={setShowpassword}
                      />
                    </InputGroup>
                    {error.password.length > 0 && (
                      <Alert variant="danger" className="mt-2">
                        {error.password}
                      </Alert>
                    )}
                  </Form.Group>
                  <div className="mt-3">
                    <Button
                      data-testid="signin-button"
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      SIGN IN
                    </Button>
                  </div>
                  <div className="my-3 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          data-testid="keep-signed-in"
                        />
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <Link
                      className="text-primary  font-weight-heavy"
                      to="/registration"
                    >
                      Registration Page
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
