import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="content-footer footer bg-footer-theme">
      <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div className="mb-2 mb-md-0">
          ©<script>document.write(new Date().getFullYear());</script>, made with
          ❤️ by
          <Link
            href="https://themeselection.com"
            target="_blank"
            className="footer-link fw-bolder"
          >
            ThemeSelection
          </Link>
        </div>
        <div>
          <Link
            href="https://themeselection.com/license/"
            className="footer-link me-4"
            target="_blank"
          >
            License
          </Link>
          <Link
            href="https://themeselection.com/"
            target="_blank"
            className="footer-link me-4"
          >
            More Themes
          </Link>

          <Link
            href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
            target="_blank"
            className="footer-link me-4"
          >
            Documentation
          </Link>

          <Link
            href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
            target="_blank"
            className="footer-link me-4"
          >
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
};
