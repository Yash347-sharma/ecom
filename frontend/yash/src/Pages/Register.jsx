import React, { useState } from "react";
import Layout from "../Components/Layout";
const Register = () => {
  const token = localStorage.getItem("token");
  if (token) {
   window.location.href = "/account";
  }
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    //  post api
    const response = await fetch("http://localhost:5050/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    if (data.success) {
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      });
      alert(data.message);
    } else {
      alert(data.message || "Something went wrong");
    }
  };

  return (
    <Layout>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Register</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register Form */}
      <section class="product_section layout_padding">
        <div class="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="first_name"
                        onChange={handleChange}
                        value={formData.first_name}
                        placeholder="First Name *"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="last_name"
                        onChange={handleChange}
                        value={formData.last_name}
                        placeholder="Last Name *"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        placeholder="Email *"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        placeholder="Password *"
                      />
                    </div>
                    <div className="col-md-12">
                      <input type="submit" name="submit" value="Register" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
