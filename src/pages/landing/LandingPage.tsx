import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loader from "../../components/loader/Loader";
import { useAppSelector } from "../../store/hooks";
import { getLandingPageDetails } from "../../store/landing/slice";
import "./landing.scss";

function LandingPage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useAppSelector((state) => state.landing);

  useEffect(() => {
    dispatch(getLandingPageDetails());
  }, [dispatch]);

  return (
    <div className="landing">
      {loading && <Loader></Loader>}
      {!loading && error && <div>{error}</div>}
      {!loading && data && (
        <div className="container">
          <div className="content">
            <div className="text">
              <h1>Santosh Shinde</h1>
              <span>Senior Software Enginneer</span>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
