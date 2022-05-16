import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function LanguageChange() {
  const { i18n } = useTranslation();
  function changeLanguage(e: string) {
    i18n.changeLanguage(e);
  }
  return (
    <div className="d-flex align-items-center justify-content-end  px-4 mt-3">
      <Button
        className="mx-1"
        onClick={() => changeLanguage("en")}
        data-testid="english-btn"
        variant="info"
      >
        English
      </Button>
      <Button
        className="mx-1"
        onClick={() => changeLanguage("hi")}
        variant="info"
        data-testid="hindi-btn"
      >
        Hindi
      </Button>
    </div>
  );
}
