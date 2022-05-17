import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import PasswordButtons from "../../components/password-field/Password";
import {
  regexForEmail,
  regForPassword,
  logo,
  regexForUser,
} from "../../resources/constants";
import { ToastAlert } from "../../components/toast-alert/toast-alert";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
export default function Registration() {
  const { t } = useTranslation();
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowpassword] = useState(false);

  const handle = (event: any) => {
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setFormData({ ...formdata, username: value });

        setError({
          ...error,
          username: regexForUser.test(value) ? "" : "Enter a valid UserName",
        });
        break;
      case "email":
        setFormData({ ...formdata, email: value });

        setError({
          ...error,
          email: regexForEmail.test(value) ? "" : "Enter a valid EmailId ",
        });
        break;
      case "password":
        setFormData({ ...formdata, password: value });
        setError({
          ...error,
          password: regForPassword.test(value) ? "" : "Enter a valid Password",
        });
        break;
    }
  };
  const validate = () => {
    let valid = false;

    valid =
      !(
        formdata.username.length === 0 ||
        formdata.email.length === 0 ||
        formdata.password.length === 0
      ) &&
      error.username === "" &&
      error.password === "" &&
      error.email === "";

    return valid;
  };

  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();

    if (validate()) {
      ToastAlert("registrated", "success");
    } else {
      ToastAlert("Please fill valid details", "error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Registration Page</title>
        <meta
          name="description"
          content="Registration page of React.ts Template application"
        />
      </Helmet>
      <div className="d-flex align-items-center auth px-0 mt-3 login">
        <div className="row w-100 mx-0">
          <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={logo} alt="logo" />
              </div>
              <h2> {t("greeting")}</h2>
              <h4 className="font-weight-light">{t("sign-up-clause")}</h4>
              <Form className="pt-3">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    data-testid="username-input"
                    name="username"
                    placeholder={t("username-placeholder")}
                    onChange={handle}
                    required
                  />
                  {error.username.length > 0 && (
                    <p className="mt-2 text-danger"> {t("username-error")}</p>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    data-testid="email-input"
                    name="email"
                    placeholder={t("email-placeholder")}
                    onChange={handle}
                    required
                  />
                  {error.email.length > 0 && (
                    <p className="mt-2 text-danger"> {t("email-error")}</p>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      data-testid="password-input"
                      placeholder={t("password-placeholder")}
                      onChange={handle}
                    />
                    <PasswordButtons
                      viewPassword={showPassword}
                      setViewPassword={setShowpassword}
                    />
                  </InputGroup>
                  {error.password.length > 0 && (
                    <p className="mt-2 text-danger">{t("password-error")}</p>
                  )}
                </Form.Group>
                <div className="mt-3">
                  <Button
                    data-testid="signup-button"
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    {t("sign-up-button")}
                  </Button>
                </div>
              </Form>
              <div className="my-3 d-flex justify-content-end align-items-center">
                <Link className="text-primary  font-weight-heavy " to="/">
                  {t("login-page-link")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
