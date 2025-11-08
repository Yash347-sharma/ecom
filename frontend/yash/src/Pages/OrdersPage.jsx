import React from "react";
import AccountSidebar from "../Components/AccountSidebar";
import Layout from "../Components/Layout";

const OrdersPage = () => {
  return (
    <Layout>
      {/* Page Heading */}
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Orders</h3>
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
                  <h5 className="mb-0">My Orders</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Total</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#1001</td>
                          <td>2023-12-01</td>
                          <td>
                            <span className="badge bg-success">Completed</span>
                          </td>
                          <td>$120.00</td>
                          <td>
                            <button className="btn btn-sm btn-outline-secondary">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>#1002</td>
                          <td>2023-12-05</td>
                          <td>
                            <span className="badge bg-warning text-dark">
                              Pending
                            </span>
                          </td>
                          <td>$80.00</td>
                          <td>
                            <button className="btn btn-sm btn-outline-secondary">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>#1003</td>
                          <td>2023-12-10</td>
                          <td>
                            <span className="badge bg-danger">Cancelled</span>
                          </td>
                          <td>$45.00</td>
                          <td>
                            <button className="btn btn-sm btn-outline-secondary">
                              View
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-muted mt-3">
                    Tip: Click on <strong>View</strong> to see full order
                    details.
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

export default OrdersPage;
