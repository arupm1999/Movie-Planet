import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Drama.css';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import cookie from 'react-cookies';

export default function Dramatic(props) {
  const [showalert, setShowAlert] = useState(false);

  console.log(props)

  const checkLogin = () => {
    if (cookie.load('email')) {
        props.history.push('/dmovie');
    } 
    else {
        setShowAlert(true);
      }
    }

  const {itemDramatic,itemDrama,itemTitle,itemDirector,itemCast} = props.location.state;
  return (
    <div className="Dramatic" style={{backgroundImage: `linear-gradient( to left, transparent -120%, black 95%),url(${itemDrama})`}}>
      <div className='tCoontainer'>
          <h1 className='iTiitle'>{itemTitle}</h1>
             <div>
               <p className='daaataa'>{itemDramatic}</p>
             </div>
                    {/* <div><button className="infoBotton">info</button></div> */}
                    <div style={{display:"flex",height:"40px"}}>
                  <i onClick={checkLogin} className="pllaay"> <BsFillPlayCircleFill /></i>
                  <div className="plluus"> <BsFillPlusCircleFill /></div>

        </div>

        </div>
          <div className='rCoontainer'>
              <h2 className='rTiitle'>Cast and Crew</h2>
                <div className='Caaasting'>
                  <p>Directors: {itemDirector}</p>
                  <p>Casts: {itemCast}</p>
                </div>
          </div>
          {
             showalert && <div className='allert'>
              <div className='allertItems'>
                <h1 className='allertText'>Create The Movie Planet Account To Watch This Movie</h1>
                    <div style={{paddingTop:'20px',marginLeft:'70px'}}>
                      <NavLink to='/signin'><button className='allertBtn'>Ok</button></NavLink> 
                      <button className='allertBtn1' onClick={() => setShowAlert()}>Cancel</button>
                    </div>
              </div>
            </div>
          }
    </div>
  )
}