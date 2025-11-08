import React from "react";
import AccountSidebar from "../Components/AccountSidebar";
import Layout from "../Components/Layout";

const ChangePassword = () => {
  return (
    <Layout>
      {/* Page Heading */}
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Change Password</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="register_form layout_padding">
        <div className="container" style={{ paddingTop: 20 }}>
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3">
              <AccountSidebar />
            </div>

            {/* Content */}
            <div className="col-md-9">
              <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">Update Your Password</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="currentPassword" className="form-label">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="currentPassword"
                        name="currentPassword"
                        placeholder="Enter your current password"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="newPassword" className="form-label">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        name="newPassword"
                        placeholder="Enter your new password"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Re-enter your new password"
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="btn btn-primary">
                        Change Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="alert alert-info mt-3">
                <small>
                  <strong>Note:</strong> After changing your password, you will
                  be logged out and need to log in again with the new password.
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ChangePassword;
