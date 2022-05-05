import React from "react";
import { Link } from "react-router-dom";
export default function Error401() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center text-center error-page bg-primary pt-5 pb-4 full-page">
        <div className="container-fluid ">
          <div className="col-lg-8 mx-auto text-white">
            <div className="row align-items-center d-flex flex-row">
              <div className="col-lg-6 text-lg-right pr-lg-4">
                <h1 className="display-1 mb-0">401</h1>
              </div>
              <div className="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                <h2>SORRY!</h2>
                <h3 className="font-weight-light">
                  You&apos;re not authorized to access this page.
                </h3>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 text-center mt-xl-2">
                <Link className="text-white font-weight-medium" to="/">
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
