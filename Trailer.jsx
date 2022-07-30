import React from 'react'
import './Trailer.css'
import { FormatString } from '../FormatString';
// import Image38 from '../../images/images/img38.jfif'
// import Image39 from '../../images/images/img39.jpg'
// import Image40 from '../../images/images/img40.jpg'
// import Image41 from '../../images/images/img41.jpg'
// import Image42 from '../../images/images/img42.jfif'
// import Image43 from '../../images/images/img43.jfif'
// import Image44 from '../../images/images/img44.jfif'
// import Image45 from '../../images/images/img45.jfif'
// import Image46 from '../../images/images/img46.jfif'
// import Image47 from '../../images/images/img47.jpg'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
/*import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
after return---
<div><button className="innfoBotton">info</button></div>
      <div className='pluuss'> <AiOutlinePlusCircle /></div>
      <div className ="plaayy"> <AiOutlinePlayCircle /></div>*/

const scrollItems = [
  {
    id: 38,
    image: "https://www.telecomasia.net/upload/iblock/314/31430564b26853f5d1d51f0cfa78ab29.jpg",
    title: "W A R C R A F T",
    detail:"Warcraft (alternatively known as Warcraft: The Beginning)[4] is a 2016 American action fantasy film based on the video game series of the same name.",
    Director:"",
    Cast: ""
  },
  {
    id: 39,
    image: "https://i.ytimg.com/vi/HTjVvlK1sBk/maxresdefault.jpg",
    title: "LONDON HAS FALLEN",
    detail:"London Has Fallen is a 2016 American action thriller film directed by Babak Najafi and written by Creighton Rothenberger, Katrin Benedikt, Chad St. John and Christian Gudegast.",
    Director:"",
    Cast: ""
  },
  {
    id: 40,
    image: "https://free4kwallpapers.com/uploads/originals/2015/11/18/brad-pitt-world-war-z-movie-wallpaper.jpg",
    title: "W O R L D - W A R Z",
    detail:"Life for former United Nations investigator Gerry Lane and his family seems content. Suddenly, the world is plagued by a mysterious infection turning whole human populations into rampaging mindless zombies.",
    Director:"",
    Cast: ""
  },
  {
    id: 41,
    image: "https://images.saymedia-content.com/.image/t_share/MTc0NDY4NDg5MTQ1MjMwNjk2/top-strongest-characters-in-troy-the-movie.jpg",
    title: "T R O Y",
    detail:"Brad Pitt stars in an epic tale of passion, heroism, betrayal and war that has been passed from generation to generation since the dawn of civilization--the story of the battle for Troy.",
    Director:"",
    Cast: ""
  },
  {
    id: 42,
    image: "https://images.thedirect.com/media/article_full/delay-black-adam.jpg",
    title: "B L A C K - A D A M",
    detail:"Black Adam is an upcoming American superhero film based on the DC Comics character of the same name. Produced by New Line Cinema, DC Films, Seven Bucks Productions, and FlynnPictureCo., and set for distribution by Warner Bros.",
    Director:"",
    Cast: ""
  },
  {
    id: 43,
    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/dr-strange-multi-verse-of-madness.jpg",
    title: "DR. S T R A N G E",
    detail:"Doctor Strange is a 2016 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 14th film in the Marvel Cinematic Universe (MCU).",
    Director:"",
    Cast: ""
  },
  {
    id: 44,
    image: "http://gonewiththetwins.com/new/wp-content/uploads/2014/02/pompeii.jpg",
    title: "P O M P E I I",
    detail:"Pompeii is a 2014 epic romantic and historical disaster film produced and directed by Paul W. S. Anderson.[8] An international co-production between the United States, Germany and Canada.",
    Director:"",
    Cast: ""
  },
  {
    id: 45,
    image: "https://images.thedirect.com/media/article_full/BW_yTKcWEF.jpg",
    title: "B L A C K - W I D O W",
    detail:"Black Widow is a 2021 American superhero film based on Marvel Comics featuring the character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 24th film in the Marvel Cinematic Universe (MCU).",
    Director:"",
    Cast: ""
  },
  {
    id: 46,
    image: "https://www.gscmovies.com.my/wp-content/uploads/2016/02/New-Horror-Movies-Pride-Prejudice-Zombies.jpg",
    title: "PRIDE - PREDUKE ZOMBBIES",
    detail:"Pride & Prejudice is a 2005 romantic drama film directed by Joe Wright, in his feature directorial debut, and based on Jane Austen's 1813 novel of the same name. The film features five sisters from an English family of landed gentry as they deal with issues of marriage, morality and misconceptions.",
    Director:"",
    Cast: ""
  },
  {
    id: 47,
    image: "https://a.ltrbxd.com/resized/sm/upload/zu/51/m1/43/the-dark-knight-20-1200-1200-675-675-crop-000000.jpg?k=0a44472192",
    title: "THE - DARK - KNIGHT",
    detail:"Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as The Joker appears in Gotham.",
    Director:"",
    Cast: ""
  },
]

export default function Trailer(props) {

  console.log(props)
  const toLaunch= (data) => {
    props.history.push("/launch/"+ data.id +"/"+ FormatString(data.title), { itemLaunch:data.detail, itemTrailer:data.image,itemTitle:data.title,itemDirector:data.Director,itemCast:data.Cast})
  } 

  return (
    <div className="Action">
      <span className="TrailerTitle"> <b>New & Upcoming </b> </span>
      <div className="scrllConner">
      <div className="leftArrow" onClick={() => document.getElementById('sccrolView').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>
      
        <div className="sccrolView" id="sccrolView">

        {
          scrollItems.map(data => {
            return (
              <div className='sccrolItem' onClick={()=> toLaunch(data)} key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Hoorizntal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        <div className="leftArrow"  onClick={() => document.getElementById('sccrolView').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>

      <span className="Titttle"><b>  Special Shows </b> </span>
      <div className="scrllConner">
      <div className="leftArrow" onClick={() => document.getElementById('sccrolview').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>

        <div className="sccrolView" id="sccrolview">

        {
          scrollItems.map(data => {
            return (
              <div className='sccrolItem' onClick={()=> toLaunch(data)} key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Hoorizntal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        
        <div className="leftArrow"  onClick={() => document.getElementById('sccrolview').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>

      <span className="banndd"><b>Suspense Thriller </b></span>
      <div className="scrllConner">
      <div className="leftArrow" onClick={() => document.getElementById('viewSccrol').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>

        <div className="sccrolView" id="viewSccrol">

        {
          scrollItems.map(data => {
            return (
              <div className='sccrolItem' onClick={()=> toLaunch(data)} key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Hoorizntal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        
        <div className="leftArrow"  onClick={() => document.getElementById('viewSccrol').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>

      
    </div>
  )
}
