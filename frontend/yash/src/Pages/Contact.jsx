
import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout'
import NewArrivals from '../Components/NewArrivals'



function Contact(){
   const handleSubmit = async (e) => {
   e.preventDefault();
const reponse = await fetch("http://localhost:5050/api/mail", {
   method: "POST",
   headers: {"Content-Type": "application/json"},
   body: JSON.stringify(formData),
   });
const data = await reponse.json();
if (data.success==true) {setFormData({
   name: "",
   email: "",
   subject: "",
   message: ""
})
   alert("Message sent successfully");
  
} else {
   alert("Failed to send message");
   
}
};
 const [formData, setFormData] = useState({
   name: "",
   email: "",
   subject: "",
   message: ""
});


const handleChange = (e) => {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value,
   });
}
  return (
    <>
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

       <section className="why_section layout_padding">
         <div className="container">
         
            <div className="row">
               <div className="col-lg-8 offset-lg-2">
                  <div className="full">
                     <form onSubmit={handleSubmit}>
                        <fieldset>
                           <input type="text" placeholder="Enter your full name" name="name" value={formData.name} onChange={handleChange} required />
                           <input type="email" placeholder="Enter your email address" name="email" value={formData.email} onChange={handleChange} required />
                           <input type="text" placeholder="Enter subject" name="subject" value={formData.subject} onChange={handleChange}required />
                           <textarea placeholder="Enter your message" required name='message' value={formData.message} onChange={handleChange}></textarea>
                           <input type="submit" value="Submit" />
                        </fieldset>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <NewArrivals />
      </Layout>
    </>
  )
}

export default Contact  