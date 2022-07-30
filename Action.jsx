import React, { useEffect} from 'react'
import './Action.css';
import { FormatString } from '../FormatString';
//import Image1 from '../../images/images/img1.jpg'
//import Image2 from '../../images/images/img2.jpg'
//import Image3 from '../../images/images/img3.jpg'
// import Image4 from '../../images/images/img4.jpg'
// import Image5 from '../../images/images/img5.jpg'
// import Image16 from '../../images/images/img16.jpg'
// import Image17 from '../../images/images/img17.jpg'
// import Image18 from '../../images/images/img18.jpg'
// import Image19 from '../../images/images/img19.jpg'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import cookie from 'react-cookies'
/*import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
after return---
<div><button className="infoButton">info</button></div>
      <div className='plus'> <AiOutlinePlusCircle /></div>
      <div className ="play"> <AiOutlinePlayCircle /></div>*/


const scrollItems = [
  {
    id: 1,
    image: "https://i0.wp.com/screengeek.net/wp-content/uploads/2019/10/joker-movie.jpg",
    title: "THE JOKER (Life of Darkness)",
    detail: "Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin Phoenix as the Joker and provides a possible origin story for the character.",
    Director:"Not Available",
    Cast: "Not Available"

  },
  {
    id: 2,
    image: "https://wallpapercave.com/wp/wp3891853.jpg",
    title: "AVENGERS: E N D G A M E",
    detail:"Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU).",
    Director:"Not Available",
    Cast: "Not Available"
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/M/MV5BMGNlNTA3ZjEtMjkzMC00ZmZiLTgwYWEtNTczMmU1OTA2NGNlXkEyXkFqcGdeQXVyMjI1MTU3NTM@._V1_.jpg",
    title: "FAST & FURIOUS 6",
    detail:"F9 (also known as F9: The Fast Saga and internationally as Fast & Furious 9) is a 2021 action film directed by Justin Lin from a screenplay by Daniel Casey and Lin.[9] It is the sequel to The Fate of the Furious (2017), which serves as the ninth main installment, and the tenth full-length film in the Fast & Furious franchise.",
    Director:"Not Available",
    Cast: "Not Available"
  },
  {
    id: 4,
    image: "https://c4.wallpaperflare.com/wallpaper/698/746/448/action-adventure-fantasy-film-wallpaper-preview.jpg",
    title: "IMMORTALS (Deadly Life)",
    detail:"Immortals is a 2011 American fantasy action film directed by Tarsem Singh and starring Henry Cavill, Stephen Dorff, Luke Evans, John Hurt, Isabel Lucas, Kellan Lutz, Freida Pinto, Joseph Morgan, Daniel Sharman, and Mickey Rourke.",
    Director:"Not Available",
    Cast: "Not Available"
  },
  {
    id: 5,
    image: "https://img2.goodfon.com/wallpaper/nbig/d/7c/riddick-films-the-chronicles.jpg",
    title: "RIDDICK (Dark Athina)",
    detail:"Riddick (also known as Riddick: Rule the Dark) is a 2013 American science fiction action film and the third installment in the Riddick film series. Produced by and starring Vin Diesel as the title character, Riddick is written and directed by David Twohy, who previously wrote and directed the first two installments, Pitch Black (2000) and The Chronicles of Riddick (2004).",
    Director:"Not Available",
    Cast: "Not Available"
  },
  {
    id: 16,
    image: "https://wallpaperaccess.com/full/2564246.jpg",
    title: "STAR WARS (WAR oF GOD)",
    detail:"Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX The Rise of Skywalker) is a 2019 American epic space opera film produced, co-written, and directed by J. J. Abrams. Produced by Lucasfilm and Abrams' production company Bad Robot Productions.",
    Director:"Not Available",
    Cast: "Not Available"
  },
  {
    id: 17,
    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/bullitt-steve-mcqueen.jpg",
    title: "BULLITT (LUST ATTACKER)",
    detail:"Bullitt is a 1968 American neo-noir action thriller film[4] directed by Peter Yates and produced by Philip D'Antoni. The picture stars Steve McQueen, Robert Vaughn, and Jacqueline Bisset.[5] The screenplay by Alan R.",
    Director:"Not Available",
    Cast: "Not Available"
  },
  {
    id: 18,
    image: "https://static.digit.in/OTT/v2/images/tr:w-1200/rambo-144529.jpg",
    title: "Mr. RAMBO (DEATH LIFE)",
    detail:"Rambo: Last Blood[a] is a 2019 American action film directed by Adrian Grünberg. The screenplay, co-written by Matthew Cirulnick and Sylvester Stallone (from a story by Dan Gordon and Stallone), is based on the character John Rambo created by author David Morrell for his novel First Blood.",
    Director:"Not Available",
    Cast: "Not Available"
  },
  {
    id: 19,
    image: "https://static.toiimg.com/photo/71389184.cms?resizemode=4",
    title: "TERMINATOR",
    detail:"Terminator: Dark Fate is a 2019 American science fiction action film directed by Tim Miller and written by David Goyer, Justin Rhodes, and Billy Ray from a story by James Cameron, Charles Eglee, Josh Friedman, Goyer, and Rhodes. Cameron also produced the film with David Ellison.",
    Director:"Not Available",
    Cast: "Not Available"
  },
]
export default function Action(props) {


  useEffect(() => {
    if (cookie.load('reload')) {
      cookie.remove('reload');
      window.location.reload();
    }
  }, [])

 //console.log(props)
 const toDetails= (data) => {
   props.history.push("/details/" + data.id +"/"+ FormatString(data.title), {itemDetails:data.detail, itemImage:data.image, itemTitle:data.title, itemDirector:data.Director, itemCast:data.Cast})

 }
  return (
    
    <div className="Action">
      <span className="ActionTitle"> <b>Top picks for you </b> </span>
      <div className="scrollContainer">
      <div className="leftArrow" onClick={() => document.getElementById('scrollView').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>
      
        <div className="scrollView" id="scrollView">

        {
          scrollItems.map(data => {

            return (
              <div className='scrollItem' onClick={()=> toDetails(data)}key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Horizontal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        <div className="leftArrow"  onClick={() => document.getElementById('scrollView').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>

      <span className="Title"><b> New Releases </b> </span>
      <div className="scrollContainer">
      <div className="leftArrow" onClick={() => document.getElementById('scrollview').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>

        <div className="scrollView" id="scrollview">

        {
          scrollItems.map(data => {
            return (
              <div className='scrollItem' onClick={()=> toDetails(data)} key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Horizontal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        
        <div className="leftArrow"  onClick={() => document.getElementById('scrollview').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>
      <span className="band"><b> Trailer </b> </span>
      <div className="scrollContainer">
      <div className="leftArrow" onClick={() => document.getElementById('viewScroll').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>

        <div className="scrollView" id="viewScroll">

        {
          scrollItems.map(data => {
            return (
              <div className='scrollItem' onClick={()=> toDetails(data)} key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Horizontal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        
        <div className="leftArrow"  onClick={() => document.getElementById('viewScroll').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>
        </div>
        
  )
}


