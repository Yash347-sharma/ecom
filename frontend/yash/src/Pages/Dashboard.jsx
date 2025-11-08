import React, { useContext } from "react";
import AccountSidebar from "../Components/AccountSidebar";
import Layout from "../Components/Layout";
import { AuthContext } from "../AuthProvider";

const Dashboard = () => {
    const { profile } = useContext(AuthContext);
  
    // loading
    if (!profile) return null;

  return (
    <Layout>
      <section className="inner_page_head">
        <div className="container1">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Dashboard</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="register_form layout_padding">
        <div className="container" style={{ paddingTop: 20 }}>
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3">
              <AccountSidebar />
            </div>

            {/* Main Content */}
            <div className="col-md-9">
              <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">Welcome to your Dashboard</h5>
                </div>
                <div className="card-body">
                  <h5 className="mb-3">Profile Information</h5>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="row mb-2">
                        <div className="col-sm-3">
                          <strong>First Name:</strong>
                        </div>
                        <div className="col-sm-9">{profile.first_name}</div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-3">
                          <strong>Last Name:</strong>
                        </div>
                        <div className="col-sm-9">{profile.last_name}</div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-3">
                          <strong>Email:</strong>
                        </div>
                        <div className="col-sm-9">{profile.email}</div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-3">
                          <strong>Status:</strong>
                        </div>
                        {/* show color green if active and red if inactive */}
                        <div className="col-sm-9">{profile.status === "active" ? <span className="text-success">Active</span> : <span className="text-danger">Inactive</span>}</div>
                      </div>
                      {/* created at */}
                      <div className="row mb-2">
                        <div className="col-sm-3">
                          <strong>Created At:</strong>
                        </div>
                        {/* show date in dd/mm/yyyy format */}
                        <div className="col-sm-9">{profile.created_at ? new Date(profile.created_at).toLocaleDateString() : "N/A"}</div>
                      </div>
                      {/* updated at */}
                      <div className="row mb-2">
                        <div className="col-sm-3">
                          <strong>Updated At:</strong>
                        </div>
                        <div className="col-sm-9">{ profile.updated_at ? new Date(profile.updated_at).toLocaleDateString() : "N/A"}</div>
                      </div>
                      <div className="text-end mt-3">
                        <button className="btn btn-outline-primary btn-sm">
                          Edit Profile
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted">
                    Use the sidebar to navigate through your account options
                    like orders, password, and settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
