import React from 'react'
import './Comedy.css';
import { FormatString } from '../FormatString';
// import Image20 from '../../images/images/img20.jpg'
// import Image21 from '../../images/images/img21.jpg'
// import Image22 from '../../images/images/img22.jpg'
// import Image23 from '../../images/images/img23.jpg'
// import Image24 from '../../images/images/img24.jpg'
// import Image25 from '../../images/images/img25.jfif'
// import Image26 from '../../images/images/img26.jfif'
// import Image27 from '../../images/images/img27.jfif'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
/*import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
after return---
<div><button className="infoBotton">info</button></div>
      <div className='pluus'> <AiOutlinePlusCircle /></div>
      <div className ="plaay"> <AiOutlinePlayCircle /></div>*/

const scrollItems = [
  {
    id: 20,
    image: "http://images.jdmagicbox.com/movies/mumbai_10717499852017_04_21_11_59_12.jpg",
    title: "D A R K - W O R L D",
    detail:"In Russia, the mystic student of linguistic Marina Leonova is in love with her boyfriend Artur. However, he blows her off and dates their schoolmate Vika.",
    Director:"",
    Cast: ""
  },
  {
    id: 21,
    image: "https://m.media-amazon.com/images/M/MV5BZmU0Njc5YTItNGYxYy00MGNmLTgxZDQtMzkwOGI5OTdiMWVmXkEyXkFqcGdeQXVyNTM0MDYyNTk@._V1_FMjpg_UX1000_.jpg",
    title: "P I D D U",
    detail:"Giuseppe the Clutch Hand Morello (Italian: [dʒuzɛppe morɛllo]; May 2, 1870 August 15, 1930), also known as The Old Fox, was the first boss of the Morello crime family and later top adviser to Giuseppe Joe the Boss Masseria.",
    Director:"",
    Cast: ""
  },
  {
    id: 22,
    image: "https://vistapointe.net/images/ride-along-1.jpg",
    title: "R I D E - A L O N G",
    detail:"Ride Along is a 2014 American Action comedy film directed by Tim Story and starring Ice Cube, and Kevin Hart. The film follows Ben Barber (Kevin Hart), a security guard who must prove to his girlfriend's police officer brother, James Payton (Ice Cube), that he is worthy of marrying her.",
    Director:"",
    Cast: ""
  },
  {
    id: 23,
    image: "https://www.askideas.com/media/13/The-Three-Stooges-Funny-Hollywood-Picture.jpg",
    title: "The Three Stooges",
    detail:"Ride Along is a 2014 American Action comedy film directed by Tim Story and starring Ice Cube, and Kevin Hart.The film follows Ben Barber (Kevin Hart), a security guard who must prove to his girlfriend's police officer brother, James Payton (Ice Cube), that he is worthy of marrying her.",
    Director:"",
    Cast: ""
  },
  {
    id: 24,
    image: "https://www.womensbyte.com/wp-content/uploads/2020/07/Hot-Rod-1024x683.jpg",
    title: "H O T - R O D",
    detail:"Hot Rod is a 2007 American comedy film directed by Akiva Schaffer (in his directorial debut) and written by Pam Brady. The film stars Andy Samberg as amateur stuntman Rod Kimble, whose stepfather, Frank (Ian McShane), continuously mocks and disrespects him.",
    Director:"",
    Cast: ""
  },
  {
    id: 25,
    image: "https://www.macxdvd.com/mac-dvd-video-converter-how-to/article-image/dumb-and-dumber-comedy.jpg",
    title: "D U M B - D U M B E R ",
    detail:"Dumb and Dumber is a 1994 American buddy comedy film directed by Peter Farrelly,[1][2] who co-wrote the screenplay with Bobby Farrelly and Bennett Yellin. It is the first installment in the Dumb and Dumber franchise. ",
    Director:"",
    Cast: ""
  },
  {
    id: 26,
    image: "https://images.fanart.tv/fanart/wild-hogs-6108929e9e628.png",
    title: "W I L D - H O G S",
    detail:"Tired of their humdrum lives, some middle-aged friends (Tim Allen, John Travolta, Martin Lawrence) decide to temporarily ditch their responsibilities and take a motorcycle trip. The freedom of the open road holds many surprises for the group, including an encounter with the Del Fuegos, a hardcore gang, who take a dim view of the novice bikers.",
    Director:"",
    Cast: ""
  },
  {
    id: 27,
    image: "https://www.flixwatch.co/wp-content/uploads/81044224.jpg.webp",
    title: "D I E - B A N K",
    detail:"Vier gegen die Bank (Four Against the Bank) is a 2016 German crime comedy film directed by Wolfgang Petersen. It is Petersen's first film since Poseidon in 2006 and his first German-language film since Das Boot in 1981.",
    Director:"",
    Cast: ""
  },
]

export default function Comedy(props) {

  
 console.log(props)
 const toCompact= (data) => {
   props.history.push("/compact/"+ data.id +"/"+ FormatString(data.title), { itemCompact:data.detail, itemComedy:data.image, itemTitle:data.title, itemDirector:data.Director, itemCast:data.Cast})
 }

  return (
    <div className="Action">
      <span className="ComedyTitle"> <b>Making you Laughter </b> </span>
      <div className="scrollConner">
      <div className="leftArrow" onClick={() => document.getElementById('scrolView').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>
      
        <div className="scrolView" id="scrolView">

        {
          scrollItems.map(data => {
            return (
              <div className='scrolItem' onClick={()=> toCompact(data)} key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Horizntal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        <div className="leftArrow"  onClick={() => document.getElementById('scrolView').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>

      <span className="Tittle"><b> Special Comedy </b> </span>
      <div className="scrollConner">
      <div className="leftArrow" onClick={() => document.getElementById('scrolview').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>

        <div className="scrolView" id="scrolview">

        {
          scrollItems.map(data => {
            return (
              <div className='scrolItem'onClick={()=> toCompact(data)} key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Horizntal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        
        <div className="leftArrow"  onClick={() => document.getElementById('scrolview').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>

      <span className="bannd"><b>Suspense Comedy </b></span>
      <div className="scrollConner">
      <div className="leftArrow" onClick={() => document.getElementById('viewScrol').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>

        <div className="scrolView" id="viewScrol">

        {
          scrollItems.map(data => {
            return (
              <div className='scrolItem' onClick={()=> toCompact(data)} key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Horizntal'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        
        <div className="leftArrow"  onClick={() => document.getElementById('viewScrol').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>

      
    </div>
  )
}


