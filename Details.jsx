import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Action.css';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import cookie from 'react-cookies';

export default function Details(props) {
  const [showalert, setShowAlert] = useState(false);
  console.log(props)

  const checkLogin = () => {
    if (cookie.load('email')) {
        props.history.push('/play');
    } 
    else {
        setShowAlert(true);
      }
    }

  const {itemDetails,itemImage,itemTitle,itemDirector,itemCast} = props.location.state;
  return (
  
    <div className="Details" style={{backgroundImage: `linear-gradient( to left, transparent -100%, black 95%), url(${itemImage})`}}>
        <div className='leftContainer'>
          <h1 className='imageTitle'>{itemTitle}</h1>
             <div>
               <p className='data'>{itemDetails}</p>
             </div>
                      {/* <div><button className="infoButton">info</button></div>  */}
                <div style={{display:"flex",height:"40px"}}>
                 <i onClick={checkLogin} className="iconPlay"> <BsFillPlayCircleFill /></i>
                  <div className="iconPlus"> <BsFillPlusCircleFill /></div>
                </div>
        </div>
          <div className='rightContainer'>
              <h2 className='rightTitle'>Cast and Crew</h2>
                <div className='Casting'>
                  <p>Directors: {itemDirector}</p>
                  <p>Casts: {itemCast}</p>
                </div>
          </div>
          {
             showalert && <div className='alert'>
              <div className='alertItems'>
                <h1 className='alertText'>Create The Movie Planet Account To Watch This Movie</h1>
                    <div style={{paddingTop:'20px',marginLeft:'70px'}}>
                      <NavLink to='/signin'><button className='alertBtn'>Ok</button></NavLink> 
                      <button className='alertBtn1' onClick={() => setShowAlert()}>Cancel</button>
                    </div>
              </div>
            </div>
          }
    </div>
  )
}