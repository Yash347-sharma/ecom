import React from "react";
import { NavLink} from "react-router-dom";

/**
 * AccountSidebar
 * Props:
 *
 * Usage: <AccountSidebar />
 */
export default function AccountSidebar() {
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  // CSS classes use bootstrap-like utility — adjust to your CSS framework or custom styles
  const linkClass = ({ isActive }) =>
    `list-group-item list-group-item-action ${isActive ? "active" : ""}`;

  return (
    <div className="account-sidebar">
      <div className="card">
        <div className="card-body p-0">
          <div className="list-group list-group-flush">
            <NavLink to="/account" end className={linkClass}>
              Dashboard
            </NavLink>
            <NavLink to="/account/change-password" className={linkClass}>
              Change Password
            </NavLink>
            <NavLink to="/account/orders" className={linkClass}>
              My Orders
            </NavLink>
            {/* <NavLink to="/account/profile" className={linkClass}>
              My Profile
            </NavLink> */}
            <button
              type="button"
              onClick={handleLogout}
              className="list-group-item list-group-item-action text-danger"
              style={{ border: "none", background: "transparent", textAlign: "left" }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
