import React from "react";
import Card from "./Card";



const Portfolio = () => {
    return (
       // <div className="portfolio">
         //<h2>Case</h2> 
         //    <br />
           // <p>Earth Hero is a game made for businesses <br />and schools to motivate recycling more.</p>
           // <Cards className="Earth"/>
        
        <div className="Earth">
            <Card 
            title="Earth Hero"
            imageEarth={require("./Hero.png")}
            body="Earth Hero is a game made for businesses
and schools to motivate recycling more." /> 

        </div>

      );
}
 
export default Portfolio;