import React from "react";
import contact from "./contact.png";


const Contact = () => {

    return (
        <div className="contact">
            <img src={contact} alt="contact" />
        
            <h2>Contact</h2>
            <br />
            
            <h4>Post:</h4> <p>olga.bulanenkova@chasacademy.se</p>
            <br />
            <h4>Phone:</h4> <p>+46-70577-8544</p>
         

        </div>
      );
}
 
export default Contact;