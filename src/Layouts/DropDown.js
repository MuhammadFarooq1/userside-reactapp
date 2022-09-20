import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
//import images
import avatar1 from "../assets/imgs/user/avatar-1.jpg";
import { logout, isAuthenticated } from "../api's/auth";
const ProfileDropdown = () => {
  let navigate = useNavigate();
  //Dropdown Toggle
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };
  return (
    <React.Fragment>
      <Dropdown
        isOpen={isProfileDropdown}
        toggle={toggleProfileDropdown}
        className="ms-sm-3 header-item "
      >
        <DropdownToggle tag="button" type="button">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-person-lines-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <h6 className="dropdown-header">Welcome Farooq</h6>
          <DropdownItem>
            <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
            <Link className="align-middle" to={"/user/dashboard"}>
              Profile
            </Link>
          </DropdownItem>
          {!isAuthenticated() && (
            <>
              <DropdownItem>
                <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                <Link className="align-middle" to={"/signin"}>
                  {" "}
                  login
                </Link>
              </DropdownItem>
              <DropdownItem>
                <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                <Link className="align-middle" to={"/signup"}>
                  {" "}
                  Register
                </Link>
              </DropdownItem>
            </>
          )}
          <div className="dropdown-divider"></div>
          {/* <DropdownItem href="/pages-profile">
            <i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">
              Balance : <b>$5971.67</b>
            </span>
          </DropdownItem> */}

          <DropdownItem>
            <i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i>{" "}
            <Link className="align-middle" to={"/404"}>
              {" "}
              404 Page
            </Link>
          </DropdownItem>
          {isAuthenticated() && (
            <DropdownItem>
              <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>{" "}
              <span
                className="align-middle"
                onClick={() =>
                  logout(() => {
                    navigate("/");
                  })
                }
              >
                Logout
              </span>
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileDropdown;
