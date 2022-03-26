
import './App.css';
import Aboutpage from './Components/AboutUs/Aboutpage';
import Footer from './Components/Homepage/Footer';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Homepage/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Table from './Components/Admin/Table';
import Contact from './Components/Contacts/Contact';




function App() {
  return (
    <div className="App">
      <Router> 
      <Navbar/>
    <Switch>
        <Route path="/" exact component={Homepage}  />
        <Route path="/about" component={Aboutpage}>
          <Aboutpage/>
          </Route>
          <Route path="/contact" component={Contact}>
          <Contact/>
          </Route>
         
      </Switch>
      <Footer/>
      </Router>
      {/* <Navbar/> */}
     {/* <Homepage/> */}
     {/* <Aboutpage/> */}

     
    </div>
  );
}

export default App;
