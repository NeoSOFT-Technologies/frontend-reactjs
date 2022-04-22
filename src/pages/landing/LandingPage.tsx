import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { useAppSelector } from "../../store/hooks";
import "./landing.scss";

function LandingPage() {
  const navigate = useNavigate();
  const { data, loading, error } = useAppSelector((state) => state.login);
  useEffect(() => {
    if (!loading && !error && !data) {
      navigate("/");
    }
  }, []);

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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
