import React, { useState, useEffect } from "react";

function HomeProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>products</span>
            </h2>
          </div>
          <div className="row">
            {products.map((product, index) => (
              <div key={product.id} className="col-sm-6 col-md-4 col-lg-4">
              <div className="box">
                <div className="option_container">
                  <div className="options">
                    <a href="" className="option1">
                      Men's Shirt
                    </a>
                    <a href="" className="option2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div className="img-box">
                  <img src={product.image_url} alt="" />
                </div>
                <div className="detail-box">
                  <h5>{product.name}</h5>
                  <h6>₹{product.price}</h6>
                </div>
              </div>
            </div>
            
            ))}
            
            
           
          </div>
          <div className="btn-box">
            <a href="">View All products</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeProduct;
