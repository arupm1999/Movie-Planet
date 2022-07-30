import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Horror.css';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import cookie from 'react-cookies';

export default function Ghost(props) {
  const [showalert, setShowAlert] = useState(false);

  console.log(props)

  const checkLogin = () => {
    if (cookie.load('email')) {
        props.history.push('/hmovie');
    } 
    else {
        setShowAlert(true);
      }
    }

  const {itemGhost,itemHorror,itemTitle,itemDirector,itemCast} = props.location.state;
  return (
    <div className="Ghost" style={{backgroundImage: `linear-gradient( to left, transparent -100%, black 95%),url(${itemHorror})`}}>
        <div className='tCoontaainer'>
          <h1 className='iTiittle'>{itemTitle}</h1>
             <div>
               <p className='datta'>{itemGhost}</p>
             </div>
                    {/* <div><button className="infoBotton">info</button></div> */}
                    <div style={{display:"flex",height:"40px"}}>
                  <i onClick={checkLogin} className="playy"> <BsFillPlayCircleFill /></i>
                  <div className="pluss"> <BsFillPlusCircleFill /></div>

        </div>

        </div>
          <div className='rCoontaainer'>
              <h2 className='rTiittle'>Cast and Crew</h2>
                <div className='Caaassting'>
                  <p>Directors: {itemDirector}</p>
                  <p>Casts: {itemCast}</p>
                </div>
          </div>
          {
             showalert && <div className='alleert'>
              <div className='alleertItems'>
                <h1 className='alleertText'>Create The Movie Planet Account To Watch This Movie</h1>
                    <div style={{paddingTop:'20px',marginLeft:'70px'}}>
                      <NavLink to='/signin'><button className='alleertBtn'>Ok</button></NavLink> 
                      <button className='alleertBtn1' onClick={() => setShowAlert()}>Cancel</button>
                    </div>
              </div>
            </div>
          }
    </div>
  )
}