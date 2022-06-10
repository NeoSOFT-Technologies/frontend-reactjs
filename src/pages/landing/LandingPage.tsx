import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { ToastAlert } from "../../components/toast-alert/toast-alert";
import { useAppSelector } from "../../store/hooks";
import { resetUserLogin } from "../../store/login/slice";
import "./landing.css";

function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, error } = useAppSelector((state) => state.login);
  useEffect(() => {
    if (!loading && !error && !data) {
      navigate("/");
    }
  }, []);
  const logout = () => {
    dispatch(resetUserLogin());
    ToastAlert("Logged out successfully", "success");
    navigate("/");
  };
  return (
    <div className="landing">
      {loading && <Loader></Loader>}
      {!loading && error && <div>{error}</div>}
      {!loading && data && (
        <div className="container">
          <div className="content">
            <div className="text">
              <h1>{data.username}</h1>
              <span> Software Enginneer</span>
              <p>{data.description}</p>
              <Button data-testid="logout-Btn" onClick={() => logout()}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
