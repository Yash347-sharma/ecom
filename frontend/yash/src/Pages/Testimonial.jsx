import React from 'react'
import Client from '../Components/Client'
import Layout from '../Components/Layout'

function Testimonial() {
  return (
    <Layout>
      <section className="inner_page_head">
         <div className="container_fuild">
            <div className="row">
               <div className="col-md-12">
                  <div className="full">
                     <h3>Testimonial</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <Client />
    </Layout>
  )
}

export default Testimonial