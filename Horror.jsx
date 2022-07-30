import React from 'react'
import './Horror.css';
import { FormatString } from '../FormatString';
// import Image8 from '../../images/images/img8.jpg'
// import Image9 from '../../images/images/img9.jpg'
// import Image10 from '../../images/images/img10.jpg'
// import Image11 from '../../images/images/img11.jpg'
// import Image12 from '../../images/images/img12.jpg'
// import Image13 from '../../images/images/img13.png'
// import Image14 from '../../images/images/img14.jpg'
// import Image15 from '../../images/images/img15.jpg'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
/*import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
after rerurn---
     <div><button className="infooButton">info</button></div>
      <div className='pluss'> <AiOutlinePlusCircle /></div>
      <div className ="playy"> <AiOutlinePlayCircle /></div>*/

const scrollItems = [
  {
    id: 8,
    image: "https://qqcdnpictest.mxplay.com/pic/a57986eee28a48969e54678467c0b80f/en/16x9/640x360/67fa49b64e751935f6b1297e63149d88_1920x1080.jpg",
    title: "D R A C U L A",
    detail:"This version of Dracula is closely based on Bram Stoker's classic novel. Young barrister Jonathan Harker is assigned to a gloomy village in the mists of eastern Europe. He is captured and imprisoned by the undead vampire Dracula, who travels to London.",
    Director:"",
    Cast: ""
  },
  {
    id: 9,
    image: "https://www.houseofhorrors.com/wp-content/uploads/2019/02/fridaythe13th.jpg",
    title: "FRIDAY 13th",
    detail:"Friday the 13th is an American horror franchise that comprises twelve slasher films, a television series, novels, comic books, video games, and tie in merchandise.",
    Director:"",
    Cast: ""
  },
  {
    id: 10,
    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b7fd7f74a65e61abc8e2787646e41392d99c210170694087414182653deb2ac4._UY500_UX667_RI_V_TTW_.jpg",
    title: "E X I S T S",
    detail:"Exists is a 2014 American found footage monster horror film, directed by Eduardo Sánchez.The film had its world premiere on March 7, 2014 at South by Southwest and stars Chris Osborn and Samuel Davis. The story revolves around a group of friends hunted by something in the woods of East Texas.",
    Director:"",
    Cast: ""
  },
  {
    id: 11,
    image: "https://cdn.mos.cms.futurecdn.net/bA92Nu6bBDrdXxBoQgmKVa.jpg",
    title: "T H I N G",
    detail:"The Thing is a 2011 science fiction horror film directed by Matthijs van Heijningen Jr., written by Eric Heisserer, and starring Mary Elizabeth Winstead, Joel Edgerton, Ulrich Thomsen, Adewale Akinnuoye-Agbaje, and Eric Christian Olsen. It is a direct prequel to the 1982 film of the same name by John Carpenter, which was an adaptation of the 1938 novella Who Goes There? by John W. Campbell.",
    Director:"",
    Cast: ""
  },
  {
    id: 12,
    image: "https://1.bp.blogspot.com/-8XshoR2fXLI/WbBDc17micI/AAAAAAAAApM/_6Rlf18YkyUkM5XuxcaRAXzX0cDA7ulSwCLcBGAs/s1600/IT%2Bposter%2Buse.png",
    title: "I T (Internal Tourism)",
    detail:"It (titled onscreen as It: Chapter One) is a 2017 American coming-of-age supernatural horror film directed by Andy Muschietti and written by Chase Palmer, Cary Fukunaga and Gary Dauberman. The film was produced by New Line Cinema, RatPac Entertainment, KatzSmith Productions, Lin Pictures, and Vertigo Entertainment.",
    Director:"",
    Cast: ""
  },
  {
    id: 13,
    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/07/Insidious-Movies-in-Order.jpg",
    title: "I N S I D I O U S - 2",
    detail:"Insidious is a series of American horror films created by James Wan and Leigh Whannell. There are four films in the franchise—Insidious (2010), Insidious: Chapter 2 (2013), Insidious: Chapter 3 (2015), and Insidious: The Last Key (2018)—which have grossed a total of $539 million worldwide on a combined budget of $26.5 million.",
    Director:"",
    Cast: ""
  },
  {
    id: 14,
    image: "https://gbhbl.com/wp-content/uploads/2017/09/Evil-Dead-Pic-10.jpg",
    title: "E V I L - D E A D",
    detail:"The Evil Dead is a 1981 American supernatural horror film written and directed by Sam Raimi, produced by Robert Tapert and executive produced by Raimi, Tapert, and Bruce Campbell, who also starred alongside Ellen Sandweiss, Richard DeManicor, Betsy Baker and Theresa Tilly.",
    Director:"",
    Cast: ""
  },
  {
    id: 15,
    image: "http://gonewiththetwins.com/new/wp-content/uploads/2013/10/carrie20131.jpg",
    title: "C A R R I E",
    detail:"Carrie is a 2013 American supernatural horror film directed by Kimberly Peirce. It is the third film adaptation and a remake to the 1976 adaptation of Stephen King's 1974 novel of the same name and the fourth film in the Carrie franchise.",
    Director:"",
    Cast: ""
  },
]
export default function Horror(props) {

  console.log(props)
  const toGhost= (data) => {
    props.history.push("/ghost/"+ data.id +"/"+ FormatString(data.title), { itemGhost:data.detail, itemHorror:data.image,itemTitle:data.title,itemDirector:data.Director,itemCast:data.Cast })
  }

  return (
    <div className="Horror">
      <span className="HorrorTitle"> <b>Your Horror Station </b> </span>
      <div className="scrolltrainer">
      <div className="leftArrow" onClick={() => document.getElementById('scrolllView').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>
      
        <div className="scrolllView" id="scrolllView">

        {
          scrollItems.map(data => {
            return (
              <div className='scrolllItem' onClick={()=> toGhost(data)} key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Horizoontal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        <div className="leftArrow"  onClick={() => document.getElementById('scrolllView').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>

      <span className="Titlee"><b> Most Hunted </b> </span>
      <div className="scrollContrainer">
      <div className="leftArrow" onClick={() => document.getElementById('scrolllview').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>

        <div className="scrolllView" id="scrolllview">

        {
          scrollItems.map(data => {
            return (
              <div className='scrolllItem' onClick={()=> toGhost(data)} key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Horizoontal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        
        <div className="leftArrow"  onClick={() => document.getElementById('scrolllview').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>

      <span className="baand"><b> Today's Top 8 </b> </span>
      <div className="scrollContrainer">
      <div className="leftArrow" onClick={() => document.getElementById('viewscrolll').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>

        <div className="scrolllView" id="viewscrolll">

        {
          scrollItems.map(data => {
            return (
              <div className='scrolllItem' onClick={()=> toGhost(data)} key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Horizoontal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        
        <div className="leftArrow"  onClick={() => document.getElementById('viewscrolll').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>

      
    </div>
  )
}

