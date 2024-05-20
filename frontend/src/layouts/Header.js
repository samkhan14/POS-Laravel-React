import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        {/* logo */}
        <Link to="/dashboard" className="app-brand-link">
          <span className="app-brand-logo demo">
            <img
              src="../assets/img/pos-logo.png"
              alt=""
              style={{ width: "26%", marginLeft: "30px" }}
            />
          </span>
        </Link>

        <Link
          to=""
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </Link>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li className="menu-item active">
          <Link to="/dashboard" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
          </Link>
          {/* this is dropdown menu which is not working */}
        </li>
        {/*<li className="menu-item">
          <Link to="" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Layouts">Layouts</div>
          </Link>

          <ul className="menu-sub">
            <li className="menu-item">
              <Link to="layouts-without-menu.html" className="menu-link">
                <div data-i18n="Without menu">Without menu</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="layouts-without-navbar.html" className="menu-link">
                <div data-i18n="Without navbar">Without navbar</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="layouts-container.html" className="menu-link">
                <div data-i18n="Container">Container</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="layouts-fluid.html" className="menu-link">
                <div data-i18n="Fluid">Fluid</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="layouts-blank.html" className="menu-link">
                <div data-i18n="Blank">Blank</div>
              </Link>
            </li>
          </ul>
        </li> */}
        {/* heading for the menus */}
        {/* <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Pages</span>
        </li> */}
        {/* <li className="menu-item">
          <Link to="" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Account Settings</div>
          </Link>
          <ul className="menu-sub">
            <li className="menu-item">
              <Link
                to="pages-account-settings-account.html"
                className="menu-link"
              >
                <div data-i18n="Account">Account</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="pages-account-settings-notifications.html"
                className="menu-link"
              >
                <div data-i18n="Notifications">Notifications</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="pages-account-settings-connections.html"
                className="menu-link"
              >
                <div data-i18n="Connections">Connections</div>
              </Link>
            </li>
          </ul>
        </li> */}

        <li className="menu-item">
          <Link to="/orders" className="menu-link">
            <i class="menu-icon tf-icons bx bxs-shopping-bags"></i>
            <div data-i18n="Basic">Orders</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/products" className="menu-link">
            <i class="menu-icon tf-icons bx bxs-package"></i>
            <div data-i18n="Basic">Products</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/customers" className="menu-link">
            <i class="menu-icon tf-icons bx bxs-user-detail"></i>
            <div data-i18n="Basic">Customers</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/categories" className="menu-link">
            <i class="menu-icon tf-icons bx bxs-category"></i>
            <div data-i18n="Basic">Categories</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/brands" className="menu-link">
            <i class="menu-icon tf-icons  bx bxs-purchase-tag-alt"></i>
            <div data-i18n="Basic">Brands</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="cards-basic.html" className="menu-link">
            <i className="menu-icon tf-icons bx bx-collection"></i>
            <div data-i18n="Basic">Backup</div>
          </Link>
        </li>

        <li className="menu-item">
          <Link to="cards-basic.html" className="menu-link">
            <i class="menu-icon tf-icons bx bxs-report"></i>
            <div data-i18n="Basic">Reports</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="cards-basic.html" className="menu-link">
            <i class="menu-icon tf-icons bx bxs-bank"></i>
            <div data-i18n="Basic">Inventory</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="cards-basic.html" className="menu-link">
            <i className="menu-icon tf-icons bx bx-collection"></i>
            <div data-i18n="Basic">Revenue</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
