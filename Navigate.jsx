import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Home.css';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import cookie from 'react-cookies';

export default function Details(props) {
  const [showalert, setShowAlert] = useState(false);
  console.log(props)

  const checkLogin = () => {
    if (cookie.load('email')) {
        props.history.push('/hplay');
    } 
    else {
        setShowAlert(true);
      }
    }

  const {itemDetails,itemImage,itemTitle,itemDirector,itemCast} = props.location.state;
  return (
  
    <div className="Detaaaails" style={{backgroundImage: `linear-gradient( to left, transparent -100%, black 95%), url(${itemImage})`}}>
        <div className='lefffftContainer'>
          <h1 className='imageeeeTitle'>{itemTitle}</h1>
             <div>
               <p className='daaaata'>{itemDetails}</p>
             </div>
                      {/* <div><button className="infoButton">info</button></div>  */}
                <div style={{display:"flex",height:"40px"}}>
                 <i onClick={checkLogin} className="icoooonPlay"> <BsFillPlayCircleFill /></i>
                  <div className="icoooonPlus"> <BsFillPlusCircleFill /></div>
                </div>
        </div>
          <div className='riiiightContainer'>
              <h2 className='righttttTitle'>Cast and Crew</h2>
                <div className='Castttting'>
                  <p>Directors: {itemDirector}</p>
                  <p>Casts: {itemCast}</p>
                </div>
          </div>
          {
             showalert && <div className='alertttt'>
              <div className='alerttttItems'>
                <h1 className='alerttttText'>Create The Movie Planet Account To Watch This Movie</h1>
                    <div style={{paddingTop:'20px',marginLeft:'70px'}}>
                      <NavLink to='/signin'><button className='alertttttBtn'>Ok</button></NavLink> 
                      <button className='alertttttBtn1' onClick={() => setShowAlert()}>Cancel</button>
                    </div>
              </div>
            </div>
          }
    </div>
  )
}