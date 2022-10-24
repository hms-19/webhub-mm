import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Course from "./components/Course/Course";
import Testimonial from "./components/Testimonial/Testimonial";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import ServiceItem from "./components/Service/ServiceItem";
import NotFound from "./components/NotFound/NotFound";
import Blog from "./components/Blog/Blog";
import Slider from "./components/PageSlider/Slider";
import Outline from "./components/Course/Outline";
import Detail from "./components/Blog/Detail";
import { useEffect, useState } from "react";
import Social from "./components/Social/Social";

function App() {

  const location = useLocation();

  return (
    <div>

        <Header />    
          
          <Slider />
          <Social />
            
          {/* Our Routes   */}
          <AnimatePresence exitBeforeEnter>

            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} exact />
                <Route path="services" element={<Service />} exact />
                <Route path="services/:serviceId" element={<ServiceItem />} />
                <Route path="courses" element={<Course />} />
                <Route path="courses/:courseId" element={<Outline />} />
                <Route path="testimonial" element={<Testimonial />} />
                <Route path="blogs" element={<Blog />} />
                <Route path="blogs/:blogId" element={<Detail />} />
                <Route path="aboutus" element={<About />} />
                <Route path="contactus" element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

          </AnimatePresence>
    </div>
  );
}

export default App;
