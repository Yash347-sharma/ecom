// Importing React Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToTop from "./Components/ToTop";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blogs";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Products from "./Pages/Products";
import SingleBlog from "./Pages/SingleBlog";
import SingleProduct from "./Pages/SingleProduct";
import Testimonial from "./Pages/Testimonial";
import Thankyou from "./Pages/Thankyou";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { AuthCheck } from "./AuthCheck";
import Dashboard from "./Pages/Dashboard";
import OrdersPage from "./Pages/OrdersPage";
import ChangePassword from "./Pages/ChangePassword";
import { AuthProvider } from "./AuthProvider";
function App() {
  return (
    <Router>
      <ToTop />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<Error />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />
          <Route path="/product/:slug" element={<SingleProduct />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/thankyou" element={<Thankyou />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* account dashboard with nested routes */}
          {/* wrap with AuthProvider */}
          <Route
            path="/account"
            element={
              <AuthCheck>
                <Dashboard />
              </AuthCheck>
            }
          ></Route>
          <Route
            path="/account/orders"
            element={
              <AuthCheck>
                <OrdersPage />
              </AuthCheck>
            }
          />
          <Route
            path="/account/change-password"
            element={
              <AuthCheck>
                <ChangePassword />
              </AuthCheck>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
