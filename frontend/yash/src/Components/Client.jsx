import React, { useEffect, useState } from 'react'

function Client() {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5050/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data.testimonials);
      });
    }, []);
    return   <section class="client_section layout_padding">
    <div class="container">
       <div class="heading_container heading_center">
          <h2>
             Customer's Testimonial
          </h2>
       </div>
       <div id="carouselExample3Controls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            {testimonials.map((testimonial, index) => (
              
              <div key={testimonial.id} class={`carousel-item ${index === 0 ? "active" : ""}`}>
                <div class="box col-lg-10 mx-auto">
                   <div class="img_container">
                      <div class="img-box">
                         <div class="img_box-inner">
                            <img src={testimonial.img} alt=""/>
                         </div>
                      </div>
                   </div>
                   <div class="detail-box">
                      <h5>
                         {testimonial.name}
                      </h5>
                      <h6>
                         {testimonial.designation}
                      </h6>
                      <p>
                         {testimonial.review}
                      </p>
                   </div>
                </div>
             </div>

            ))}
          </div>
          <div class="carousel_btn_box">
             <a class="carousel-control-prev" href="#carouselExample3Controls" role="button" data-slide="prev">
             <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
             <span class="sr-only">Previous</span>
             </a>
             <a class="carousel-control-next" href="#carouselExample3Controls" role="button" data-slide="next">
             <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
             <span class="sr-only">Next</span>
             </a>
          </div>
       </div>
    </div>
 </section>;
}
export default Client;
