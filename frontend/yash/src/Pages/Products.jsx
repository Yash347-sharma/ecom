import React from 'react'
import Layout from '../Components/Layout'
import HomeProduct from '../Components/HomeProduct'
function Products() {
  return (
    <>
    <Layout>
      <section className="inner_page_head">
         <div className="container_fuild">
            <div className="row">
               <div className="col-md-12">
                  <div className="full">
                     <h3>Product Grid</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
<HomeProduct/>
    </Layout>
    </>
  )
}

export default Products