import React from 'react'
import { Button, Menu, Navbar } from 'react-daisyui'
import {  NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="flex w-full component-preview p-4 pb-40 items-center justify-center gap-2 font-sans">
          <Navbar>
            <div className="flex-1 ">
              <Button className="normal-case text-xl btn-ghost">
                WEBHUB
              </Button>
            </div>
            <div className="flex-none">
              <Menu horizontal className="p-0">
                <Menu.Item>
                  <NavLink to="home">Home</NavLink>
                </Menu.Item>
          
                <Menu.Item>
                  <NavLink to="services">Services</NavLink>
                </Menu.Item>

                <Menu.Item>
                  <NavLink to="courses">Courses</NavLink>
                </Menu.Item>

                <Menu.Item>
                  <NavLink to="testimonial">Testimonial</NavLink>
                </Menu.Item>

                <Menu.Item>
                  <NavLink to="aboutus">About Us</NavLink>
                </Menu.Item>

                <Menu.Item>
                  <NavLink to="contactus">Contact Us</NavLink>
                </Menu.Item>
              </Menu>
            </div>
          </Navbar>
        </div>
      )
    
    
    
}

export default Header