import React, { useState } from "react";
import Layout from "../Components/Layout";
// redirect
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  // check local storage for token
  const token = localStorage.getItem("token");
  if (token) {
    window.location.href = "/account";
  }

  const [formData, setFormData] = useState({
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
    try {
      const response = await fetch("http://localhost:5050/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setFormData({
          email: "",
          password: "",
        });
        alert(data.message);
        localStorage.setItem("token", data.token);
        navigate("/account");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Invalid email or password. Please try again");
    }
  };
  return (
    <Layout>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Login</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="register_form layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={formData.password}
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-md-12">
                    <input type="submit" name="submit" value="Login" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
