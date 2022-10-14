import { Route, Link, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Course from "./components/Course/Course";
import Testimonial from "./components/Testimonial/Testimonial";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div>
       <Header />    
          
          
        {/* Our Routes   */}
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path="services" element={<Service />} />
            <Route path="courses" element={<Course />} />
            <Route path="testimonial" element={<Testimonial />} />
            <Route path="projects" element={<Project />} />
            <Route path="aboutus" element={<About />} />
            <Route path="contactus" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
