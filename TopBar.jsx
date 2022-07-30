import { NavLink } from "react-router-dom";
import "./TopBar.css"
import React, { useEffect, useState } from 'react';
/*import * as FaIcons from 'react-icons/fa';
<div className='navbar' ><NavLink to = "#">
<b className='menu-bars'>
  <FaIcons.FaBars onClick={showSidebar} /></b>
  </NavLink>
</div>*/
import { SidebarData } from './SidebarData';
import Image7 from '../../images/images/img7.jpg'
import './Navbar.css';
import cookie from 'react-cookies'

const topListI = [
  {
    id: 1,
    image: Image7
  },]

export default function TopBar() {

    const [sidebar, setSidebar] = useState(false);
    const [loggedin, setLoggedin] = useState(false);

    useEffect(() => {
      if (cookie.load('email')){
        setLoggedin(true);
      } else {
        setLoggedin(false);
      }
    }, [loggedin])

    const performLogout = () => {
      cookie.remove('email', {path:'/'});
      setLoggedin(false)
    }
  
    const showSidebar = () => setSidebar(!sidebar);
    return (
      <>
      <div className='top'>
      <div className="topLeft">
        <ul className="topList">
       <li className="topListIt" id="topListIt">
         {
           topListI.map(data => {
              return(
                <div className='topListI' key={data.id}>
                <img src={data.image} alt={data.id} /></div>
              )
           })
         }
       </li>
        <li><NavLink to="/action" className= "link">Action</NavLink></li> 
        <li><NavLink to="/comedy" className= "link">Comedy</NavLink></li>
        <li><NavLink to="/horror" className= "link">Horror</NavLink></li>
         <li><NavLink to="/drama" className= "link">Drama</NavLink></li>
        <li><NavLink to="/trailer" className= "link">Trailer</NavLink></li>
        </ul>     
      </div>
      <div className="topRight">
      <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      <ul className="topList">
        { loggedin ?<div style={{display:'flex'}}> 
        <div style={{color:'white', marginLeft:'50px',marginRight:'40px', width:'130px', fontWeight:'600', fontSize:'18px'}}>
          <li> Hello,{cookie.load('firstname')}</li>
        </div>
        <div>
          <li onClick={performLogout}><NavLink to="/signin" className= "link">Logout</NavLink></li> 
        </div>
       </div>:
        <>
              <li><NavLink to="/signin" className="link">Sign In</NavLink></li>
      <li><NavLink to="/signup" className= "link">Sign Up</NavLink></li>
        </>}

      </ul>
      </div>
    </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <NavLink to={item.path}>
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          </>
    );
 }
 