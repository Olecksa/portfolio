import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';



import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='content'>
      <Switch>
            
              <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/portfolio">
               <Portfolio />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
                   
        <h2>Hello, I am Olga <br /> UX/UI Designer!</h2>
        <br />
        <p>I keep fresh by reading industry blogs, taking classes, networking, and looking to the latest trends for inspiration and guidance.</p>
        <br />
        <img src="foto.png" alt="foto" 
        style={{
                
                borderRadius: '250px'}}/>
                
                
              
      
            </Route>
          </Switch>
      </div> 

      </div>
    </Router>
  );
}

export default App;
