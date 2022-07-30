import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Comedy.css';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import cookie from 'react-cookies';

export default function Compact(props) {
  const [showalert, setShowAlert] = useState(false);

  console.log(props)

  const checkLogin = () => {
    if (cookie.load('email')) {
        props.history.push('/cmovie');
    } 
    else {
        setShowAlert(true);
      }
    }

  const {itemCompact,itemComedy,itemTitle,itemDirector,itemCast} = props.location.state;
  return (
    <div className="Compact" style={{backgroundImage:  `linear-gradient( to left, transparent -100%, black 95%),url(${itemComedy})`}}>
        <div className='tContainer'>
          <h1 className='iTitle'>{itemTitle}</h1>
             <div>
               <p className='daataa'>{itemCompact}</p>
             </div>
                    {/* <div><button className="infoBotton">info</button></div> */}
                    <div style={{display:"flex",height:"40px"}}>
                  <i onClick={checkLogin} className="plaay"> <BsFillPlayCircleFill /></i>
                  <div className="pluus"> <BsFillPlusCircleFill /></div>

        </div>

        </div>
          <div className='rContainer'>
              <h2 className='rTitle'>Cast and Crew</h2>
                <div className='Caasting'>
                  <p>Directors: {itemDirector}</p>
                  <p>Casts: {itemCast}</p>
                </div>
          </div>
          {
             showalert && <div className='aleert'>
              <div className='aleertItems'>
                <h1 className='aleertText'>Create The Movie Planet Account To Watch This Movie</h1>
                    <div style={{paddingTop:'20px',marginLeft:'70px'}}>
                      <NavLink to='/signin'><button className='aleertBtn'>Ok</button></NavLink> 
                      <button className='aleertBtn1' onClick={() => setShowAlert()}>Cancel</button>
                    </div>
              </div>
            </div>
          }
    </div>
  )
}