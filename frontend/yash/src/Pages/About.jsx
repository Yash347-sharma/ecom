import React from 'react'
import Layout from '../Components/Layout'
import WhySection from '../Components/WhySection'
import NewArrivals from '../Components/NewArrivals'

function About() {
  return (
    <Layout>
         
      <section className="inner_page_head">
         <div className="container_fuild">
            <div className="row">
               <div className="col-md-12">
                  <div className="full">
                     <h3>About us</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <WhySection />
      <NewArrivals />
    </Layout>
  )
}

export default About