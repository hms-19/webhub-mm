import React, { useEffect, useState } from 'react'
import { Button, Menu, Navbar } from 'react-daisyui'
import {  NavLink, useLocation } from 'react-router-dom'
import './Header.css'
import { BiMenuAltRight } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import $ from 'jquery'
import logo from '../../assets/images/logo-shadow.svg'
const Header = () => {


    const [isToggle,setIsToggle] = useState(false)

    //sidebar off
      
    window.onload = () => setIsToggle(false)

    //body doesn't scroll

    useEffect(() => {
        if(isToggle){
          $('body').attr('class','overflow-y-hidden')
        }
        else{
          $('body').attr('class','')
        }
    },[isToggle])

    //toggle sidebar

    const toggleSidebar = () => {
      setIsToggle(!isToggle)
    }

    //route change

    const location = useLocation();
    useEffect(() => {
        if(isToggle){
          setIsToggle(!isToggle)
        }

        if(location.pathname !== '/'){
          $('.menu li:first-child a').removeClass('active')
        }
        else{
          $('.menu li:first-child a').addClass('active')
        }
    }, [location])

    return (
        <div className="flex w-full py-2 px-2 component-preview items-center justify-center gap-2 font-sans">
          <Navbar className='twMerge(className, "bg-primary text-primary-content")' style={{
            'zIndex' : 200
          }}>
            <div className="flex-1">
              <NavLink to='/' className="normal-case text-xl">
                <img src={logo} alt="" style={{
                  'width' : '37px',
                  'height' : '44px'
                }} />
              </NavLink>
            </div>
            <div className="flex-none component-preview">
              <Menu className={isToggle ? 'activeSidebar' : ''} horizontal>
                <Menu.Item>
                  <NavLink to="/">Home</NavLink>
                </Menu.Item>
          
                <Menu.Item>
                  <NavLink to="services">Services</NavLink>
                </Menu.Item>

                <Menu.Item>
                  <NavLink to="courses">Courses</NavLink>
                </Menu.Item>

                <Menu.Item>
                  <NavLink to="blogs">Blogs</NavLink>
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
            

            {
                isToggle ? 
                <Button onClick={toggleSidebar} className='toggle-sidebar-btn' style={{
                  'display' : 'none'
                }} shape="square">
                  <BiX style={{
                  'fontSize' : '36px'
                  }} />
                </Button>
                
                :
                
                <Button onClick={toggleSidebar} className='toggle-sidebar-btn' style={{
                  'display' : 'none'
                  }} shape="square">
                  <BiMenuAltRight onClick={toggleSidebar} style={{
                    'fontSize' : '36px'
                  }} />
                </Button>

              }
          </Navbar>
        </div>
      )
    
    
    
}

export default Header