import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Error401() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center text-center error-page bg-primary pt-5 pb-4 min-vh-100">
        <div className="container-fluid ">
          <div className="col-lg-8 mx-auto text-white">
            <div className="row align-items-center d-flex flex-row">
              <div className="col-lg-6 text-lg-right pr-lg-4">
                <h1 className="display-1 mb-0">401</h1>
              </div>
              <div className="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                <h2>{t("error-page")}</h2>
                <h3 className="font-weight-light">{t("error-message")}</h3>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 text-center mt-xl-2">
                <Link className="text-white font-weight-medium" to="/">
                  {t("login-link")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
