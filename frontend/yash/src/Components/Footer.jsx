import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="full">
                <div className="logo_footer">
                  <a href="#">
                    <img width="210" src="/images/logo.png" alt="#" />
                  </a>
                </div>
                <div className="information_f">
                  <p>
                    <strong>ADDRESS:</strong> 28 White tower, Street Name New
                    York City, USA
                  </p>
                  <p>
                    <strong>TELEPHONE:</strong> +91 987 654 3210
                  </p>
                  <p>
                    <strong>EMAIL:</strong> yourmain@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Menu</h3>
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/services">Services</Link>
                          </li>
                          <li>
                            <Link to="/testimonial">Testimonial</Link>
                          </li>
                          <li>
                            <Link to="/blogs">Blog</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Account</h3>
                        <ul>
                          <li>
                            <Link to="/account">Account</Link>
                          </li>
                          <li>
                            <Link to="/checkout">Checkout</Link>
                          </li>
                          <li>
                            <Link to="/Login">Login</Link>
                          </li>
                          <li>
                            <Link to="/Register">Register</Link>
                          </li>
                          <li>
                            <Link to="/products">Shopping</Link>
                          </li>
                          <li>
                            <Link to="/widget">Widget</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="widget_menu">
                    <h3>Newsletter</h3>
                    <div className="information_f">
                      <p>
                        Subscribe by our newsletter and get update protidin.
                      </p>
                    </div>
                    <div className="form_sub">
                      <form>
                        <fieldset>
                          <div className="field">
                            <input
                              type="email"
                              placeholder="Enter Your Mail"
                              name="email"
                            />
                            <input type="submit" value="Subscribe" />
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="cpy_">
        <p className="mx-auto">
          © 2021 All Rights Reserved By{" "}
          <a href="https://html.design/">Free Html Templates</a>
          <br />
          Distributed By{" "}
          <a href="https://themewagon.com/" target="_blank">
            ThemeWagon
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
