import React from 'react'
import './Drama.css';
import { FormatString } from '../FormatString';
// import Image28 from '../../images/images/img28.jpg'
// import Image29 from '../../images/images/img29.jpg'
// import Image30 from '../../images/images/img30.jpg'
// import Image31 from '../../images/images/img31.jpg'
// import Image32 from '../../images/images/img32.jpg'
// import Image33 from '../../images/images/img33.jpg'
// import Image34 from '../../images/images/img34.jpg'
// import Image35 from '../../images/images/img35.jpg'
// import Image36 from '../../images/images/img36.jfif'
// import Image37 from '../../images/images/img37.jpg'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
/*import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
after return---
<div><button className="iinfoBotton">info</button></div>
      <div className='plluus'> <AiOutlinePlusCircle /></div>
      <div className ="pllaay"> <AiOutlinePlayCircle /></div>*/

const scrollItems = [
  {
    id: 28,
    image: "https://www.eclipserx.com/modules/prestablog/views/img/grid-for-1-7/up-img/3.jpg",
    title: "M I D N I G H T - S U N",
    detail: " Midnight Sun Sheltered since childhood, 17-year-old Katie Price lives with a life-threatening sensitivity to sunlight. Her world opens up after dark when she ventures out to play her guitar for random travelers.",
    Director:"",
    Cast: ""
  },
  {
    id: 29,
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/Species-Natasha-Henstridge-as-Sil-the-Alien.jpg?q=50&fit=crop&w=767&h=450&dpr=1.5",
    title: "S P E C I E S",
    detail:"Species is a 1995 American science fiction horror film directed by Roger Donaldson and written by Dennis Feldman. It stars Natasha Henstridge (in her film debut role), Ben Kingsley, Michael Madsen, Alfred Molina, Forest Whitaker and Marg Helgenberger.",
    Director:"",
    Cast: ""
  },
  {
    id: 30,
    image: "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/morbius-pic-1648843807.jpg?crop=0.998xw:1.00xh;0.00163xw,0&resize=900:*",
    title: "M O R B I U S",
    detail:"Morbius is a 2022 American superhero film based on the Marvel Comics character Morbius, the Living Vampire, produced by Columbia Pictures in association with Marvel. Distributed by Sony Pictures Releasing, it is the third film in Sony's Spider-Man Universe (SSU).",
    Director:"",
    Cast: ""
  },
  {
    id: 31,
    image: "https://dove.org/wp-content/uploads/monsterscover.jpg",
    title: "LOVE & MONSTERS",
    detail:"Love and Monsters is a 2020 American monster adventure film directed by Michael Matthews, with Shawn Levy and Dan Cohen serving as producers. The film stars Dylan O'Brien, Jessica Henwick, Dan Ewing, Michael Rooker and Ariana Greenblatt.",
    Director:"",
    Cast: ""
    
  },
  {
    id: 32,
    image: "https://images.fanart.tv/fanart/uncut-gems-5de160d33f5f5.jpg",
    title: "U N C U T - G E M S",
    detail:"Uncut Gems is a 2019 American crime thriller film[5] directed by Josh and Benny Safdie, who co-wrote the screenplay with Ronald Bronstein. The film stars Adam Sandler, Lakeith Stanfield, Julia Fox, Kevin Garnett, Idina Menzel and Eric Bogosian.",
    Director:"",
    Cast: ""
  },
  {
    id: 33,
    image: "https://flxt.tmsimg.com/assets/p159678_v_h10_aa.jpg",
    title: "THE - DAVINCI - CODE",
    detail:"The Da Vinci Code is a 2006 American mystery thriller film directed by Ron Howard, written by Akiva Goldsman, and based on Dan Brown's 2003 novel of the same name. The first in the Robert Langdon film series, the film stars Tom Hanks, Audrey Tautou, Sir Ian McKellen, Alfred Molina, Jürgen Prochnow, Jean Reno and Paul Bettany.",
    Director:"",
    Cast: ""
  },
  {
    id: 34,
    image: "https://images.fanart.tv/fanart/cop-land-5549386771357.jpg",
    title: "C O P L A N D",
    detail:"Kenneth Max Copeland (born December 6, 1936) is an American televangelist, and author associated with the charismatic movement. The organization he founded in 1967, Eagle Mountain International Church Inc. (EMIC), is based in Tarrant County, Texas.",
    Director:"",
    Cast: ""
  },
  {
    id: 35,
    image: "http://2.bp.blogspot.com/-kWWzbAw3DFI/UDm-xQM6M4I/AAAAAAAABkE/qI24YnxOilc/w1200-h630-p-k-no-nu/Latest-Hollywood-Romance-Movies-2012-List+%7B+THE+LUCKY+ONE+%7D.jpeg",
    title: "L U C K Y",
    detail:"Lucky is a 2017 American drama film, starring Harry Dean Stanton and directed by John Carroll Lynch from a screenplay by Logan Sparks and Drago Sumonja. It was one of Stanton's final onscreen roles before his death.",
    Director:"",
    Cast: ""
  },
  {
    id: 36,
    image: "https://c.ndtvimg.com/2019-10/av3f286g_joker-movie-review-instagram_625x300_01_October_19.jpg",
    title: "J O K E R",
    detail:"Arthur Fleck works as a clown and is an aspiring stand-up comic. He has mental health issues, part of which involves uncontrollable laughter. Times are tough and, due to his issues and occupation, Arthur has an even worse time than most. ",
    Director:"",
    Cast: ""
  },
  {
    id: 37,
    image: "https://images.hungama.com/c/1/094/0da/2715037/2715037_1280x800.jpg",
    title: "GONE WITH THE WIND",
    detail:"Gone with the Wind is a 1939 American epic historical romance film adapted from the 1936 novel by Margaret Mitchell. The film was produced by David O. Selznick of Selznick International Pictures and directed by Victor Fleming. ",
    Director:"",
    Cast: ""
  },
]

export default function Drama(props) {

  console.log(props)
  const toDrama= (data) => {
    props.history.push("/dramatic/"+ data.id +"/"+ FormatString(data.title), { itemDramatic:data.detail, itemDrama:data.image, itemTitle:data.title, itemDirector:data.Director, itemCast:data.Cast })
  }
 
  return (
    <div className="Action">
      <span className="DramaTitle"> <b>Popular in Drama </b> </span>
      <div className="scrollCnner">
      <div className="leftArrow" onClick={() => document.getElementById('scroolView').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>
      
        <div className="scroolView" id="scroolView">

        {
          scrollItems.map(data => {
            return (
              <div className='scroolItem' onClick={()=> toDrama(data)}  key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Horizntaal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        <div className="leftArrow"  onClick={() => document.getElementById('scroolView').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>

      <span className="Tiittle"><b> Movie Planet Special </b> </span>
      <div className="scrollCnner">
      <div className="leftArrow" onClick={() => document.getElementById('scroolview').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>

        <div className="scroolView" id="scroolview">

        {
          scrollItems.map(data => {
            return (
              <div className='scroolItem' onClick={()=> toDrama(data)}  key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Horizntaal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        
        <div className="leftArrow"  onClick={() => document.getElementById('scroolview').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>

      <span className="baannd"><b>Best of Superheroes </b></span>
      <div className="scrollCnner">
      <div className="leftArrow" onClick={() => document.getElementById('viewScrool').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>

        <div className="scroolView" id="viewScrool">

        {
          scrollItems.map(data => {
            return (
              <div className='scroolItem' onClick={()=> toDrama(data)}  key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Horizntaal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        
        <div className="leftArrow"  onClick={() => document.getElementById('viewScrool').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>

      
    </div>
  )
}
