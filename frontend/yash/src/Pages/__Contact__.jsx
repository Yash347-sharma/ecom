import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import NewArriaval from "../Components/NewArriaval";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  //   loading..
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  send data to server
    setLoading(true);
    const response = await fetch("http://localhost:5050/api/mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.success) {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setMessage("Message sent successfully");
      setSuccess(true);
    } else {
      setMessage("Message sent failed");
      setSuccess(false);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    // validation
    if (
      e.target.name === "email" &&
      !e.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      setMessage("Invalid email");
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //   set time out for message
  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage(""), 3000);
    }
  }, [message]);

  return (
    <Layout>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Contact us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact form */}
      <section className="why_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="full">
                {/* contact form */}
                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Enter subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <textarea
                      name="message"
                      placeholder="Enter your message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <input
                      type="submit"
                      value={loading ? "Sending..." : "Submit"}
                      disabled={loading}
                    />
                  </fieldset>
                </form>

                {/* success and error message */}
                {message && success && (
                  <div className="alert alert-success mt-3">{message}</div>
                )}
                {message && !success && (
                  <div className="alert alert-danger mt-3">{message}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewArriaval />
    </Layout>
  );
};

export default Contact;
