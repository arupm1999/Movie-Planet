import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Trailer.css';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import cookie from 'react-cookies';

export default function Launch(props) {
  const [showalert, setShowAlert] = useState(false);

  console.log(props)

  const checkLogin = () => {
    if (cookie.load('email')) {
        props.history.push('/tmovie');
    } 
    else {
        setShowAlert(true);
      }
    }

  const {itemLaunch,itemTrailer,itemTitle,itemDirector,itemCast} = props.location.state;
  return (
    <div className="Launch"  style={{backgroundImage: `linear-gradient( to left, transparent -100%, black 95%), url(${itemTrailer})`}}>
      <div className='tCoontaaiiner'>
          <h1 className='iTiittlee'>{itemTitle}</h1>
             <div>
               <p className='dataa'>{itemLaunch}</p>
             </div>
                    {/* <div><button className="infoBotton">info</button></div> */}
                    <div style={{display:"flex",height:"40px"}}>
                  <i onClick={checkLogin} className="plaayy"> <BsFillPlayCircleFill /></i>
                  <div className="pluuss"> <BsFillPlusCircleFill /></div>

        </div>

        </div>
          <div className='rCoontaaiiner'>
              <h2 className='rTiittlee'>Cast and Crew</h2>
                <div className='Caaasstiing'>
                  <p>Directors: {itemDirector}</p>
                  <p>Casts: {itemCast}</p>
                </div>
          </div>
          {
             showalert && <div className='allerrt'>
              <div className='allerrtItems'>
                <h1 className='allerrtText'>Create The Movie Planet Account To Watch This Movie</h1>
                    <div style={{paddingTop:'20px',marginLeft:'70px'}}>
                      <NavLink to='/signin'><button className='allerrtBtn'>Ok</button></NavLink> 
                      <button className='allerrtBtn1' onClick={() => setShowAlert()}>Cancel</button>
                    </div>
              </div>
            </div>
          }
    </div>
  )
}