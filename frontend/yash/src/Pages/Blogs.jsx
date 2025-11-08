import React from 'react'
import Layout from '../Components/Layout'
import WhySection from '../Components/WhySection'

function Blogs() {
  return (
    <>
    <Layout>
        <section className="inner_page_head">
         <div className="container_fuild">
            <div className="row">
               <div className="col-md-12">
                  <div className="full">
                     <h3>Blog List</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <WhySection />
    </Layout>
    </>
  )
}

export default Blogs