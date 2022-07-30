import React, { useEffect } from 'react'
import './Home.css';
// import Image1 from '../../images/images/img1.jpg'
// import Image2 from '../../images/images/img2.jpg'
// import Image3 from '../../images/images/img3.jpg'
// import Image4 from '../../images/images/img4.jpg'
// import Image5 from '../../images/images/img5.jpg'
// import Image16 from '../../images/images/img16.jpg'
// import Image17 from '../../images/images/img17.jpg'
// import Image18 from '../../images/images/img18.jpg'
// import Image19 from '../../images/images/img19.jpg'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { FormatString } from '../FormatString';

const scrollItems = 
  [
    {
      number:1,
      Name: "Blockbuster Movie",
      content: [
        {
          id: 1,
          image: "https://wallpapercave.com/dwp1x/wp2162756.jpg",
          title: "THE DARK KNIGHT",
          detail: "Dark Knight is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver.",
          Director:"Not Available",
          Cast: "Not Available"
        },
        {
          id: 2,
          image: "https://wallpapercave.com/wp/wp2162781.jpg",
          title: "THOR: R A N G O K",
          detail:"Thor: Rangok is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengersr.",
          Director:"Not Available",
          Cast: "Not Available"
        },
        {
          id: 3,
          image: "https://wallpapercave.com/dwp1x/wp2162757.jpg",
          title: "RIDDICK Part(1)",
          detail:"Riddick: The Fast Saga and internationally as Fast & Furious 9) is a 2021 action film directed by Justin Lin from a screenplay by Daniel Casey and Lin.",
          Director:"Not Available",
          Cast: "Not Available"
        },
        {
          id: 4,
          image: "https://wallpapercave.com/dwp1x/wp2162760.jpg",
          title: "IRON MAN 3",
          detail:"Iron man is a 2011 American fantasy action film directed by Tarsem Singh and starring Henry Cavill, Stephen Dorff, Luke Evans, John Hurt, Isabel Lucas.",
          Director:"Not Available",
          Cast: "Not Available"
        },
        {
          id: 5,
          image: "https://wallpapercave.com/dwp1x/wp2162761.jpg",
          title: "WOLVERINE",
          detail:"Wolverine is a 2013 American science fiction action film and the third installment in the Riddick film series.",
          Director:"Not Available",
          Cast: "Not Available"
        },
        {
          id: 16,
          image: "https://wallpapercave.com/dwp1x/wp1934769.jpg",
          title: "PIRATES OF THE CARRIBIAN",
          detail:"Pirates of the Carribian: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic space opera film produced. ",
          Director:"Not Available",
          Cast: "Not Available"
        },
        {
          id: 17,
          image: "https://wallpapercave.com/dwp1x/wp1934780.jpg",
          title: "RED SONJA",
          detail:"Red sonja is a 1968 American neo-noir action thriller film[4] directed by Peter Yates and produced by Philip D'Antoni. ",
          Director:"Not Available",
          Cast: "Not Available"
        },
        {
          id: 18,
          image: "https://wallpapercave.com/dwp1x/wp2162770.jpg",
          title: "NO TIME TO DIE",
          detail:"No time to die: Last Blood[a] is a 2019 American action film directed by Adrian Grünberg. The screenplay, co-written by Matthew Cirulnick and Sylvester Stallone (from a story by Dan Gordon and Stallone).",
          Director:"Not Available",
          Cast: "Not Available"
        },
        {
          id: 19,
          image: "https://wallpapercave.com/dwp1x/wp2162835.jpg",
          title: "ROTTEN TOMATOES",
          detail:"Rotten Tomatoes: Dark Fate is a 2019 American science fiction action film directed by Tim Miller and written by David Goyer, Justin Rhodes, and Billy Ray from a story by James Cameron, Charles Eglee.",
          Director:"Not Available",
          Cast: "Not Available"
        },
      ],
    },
    {
      number:2,
      Name: "Movie Bazzar",
      content: [
        {
          id: 50,
          image: "https://variety.com/wp-content/uploads/2021/07/army-of-the-dead.jpg",
          title: "Army of Thieves",
          detail: "In this prequel to 'Army of the Dead', a mysterious woman recruits bank teller Dieter to assist in a heist of impossible-to-crack safes across Europe.",
          Director: "Matthias Schweighöfer",
          Cast: "Matthias Schweighöfer, Nathalie Emmanuel, Ruby O. Fee"
        },
        {
          id: 51,
          image: "https://m.media-amazon.com/images/M/MV5BMGQ0OWM3OTQtMDIwNi00ZTIyLThiMjQtZTBkZTUzZWVhNzBmXkEyXkFqcGdeQWFybm8@._V1_.jpg",
          title: "Red Notice",
          detail: "In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",
          Director: "Rawson Marshall Thurber",
          Cast: "Dwayne Johnson, Ryan Reynolds, Gal Gadot"
        },
        {
          id: 52,
          image: "https://www.whats-on-netflix.com/wp-content/uploads/2021/05/how-well-is-army-of-the-dead-doing-on-netflix.jpg",
          title: "Army of the Dead",
          detail: "After a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble and venture into the quarantine zone in hopes of pulling off an impossible heist.",
          Director: "Zack Snyder",
          Cast: "Dave Bautista, Ella Purnell, Ana de la Reguera"
        },
        {
          id: 53,
          image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/fistful-of-vengeance-social-featured.jpg",
          title: "Fistful of Vengeance",
          detail: "A revenge mission becomes a fight to save the world from an ancient threat when superpowered assassin Kai tracks a killer to Bangkok.",
          Director: "Roel Reiné",
          Cast: "Iko Uwais, Lewis Tan, Lawrence Kao"
        },
        {
          id: 54,
          image: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRDCAlethJrCS1-arZUSsG73v1gdgbe0ztY70UJfHxB1AKXPut6L2dFYxqmV9V9KnGtm6fNZENhCdj93hB01n_EPzRxq.jpg?r=15e",
          title: "Murder Mystery",
          detail: "A New York cop and his wife go on a European vacation to reinvigorate the spark in their marriage. A chance encounter leads to them being framed for the murder of an elderly billionaire.",
          Director: "Kyle Newacheck",
          Cast: "Adam Sandler, Jennifer Aniston, Luke Evans"
        },
        {
          id: 55,
          image: "https://cdn.flickeringmyth.com/wp-content/uploads/2018/05/Zombieland-poster-crop.jpg",
          title: "Zombieland: Double Tap",
          detail: "Ten years after their adventure at Zombieland, survivors Tallahassee, Columbus, Wichita and Little Rock embark on a mission to slay evolved zombies while struggling with their emotional battles.",
          Director: "Ruben Fleischer",
          Cast: "Woody Harrelson, Jesse Eisenberg, Emma Stone"
        },
        {
          id: 56,
          image: "https://i0.wp.com/dmtalkies.com/wp-content/uploads/2021/10/ezgif-7-efc8654b6919.jpg?fit=1200%2C675&ssl=1",
          title: "After We Fell",
          detail: "As Tessa makes a life-changing decision, revelations about her family and Hardin's past threaten to derail her plans and end the couple's intense relationship.",
          Director: "Castille Landon",
          Cast: "Josephine Langford, Hero Fiennes Tiffin, Louise Lombard"
        },
        {
          id: 57,
          image: "https://variety.com/wp-content/uploads/2020/10/run-sarah-paulson-kiera-allen.jpg",
          title: "Run",
          detail: "Chloe, a teenager, is forbidden from seeing the mail and is kept in isolation. She soon starts suspecting her mother of keeping dark secrets and decides to investigate.",
          Director: "Aneesh Chaganty",
          Cast: "Sarah Paulson, Kiera Allen, Sara Sohn"
        },
        {
          id: 58,
          image: "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2021/04/the-unholy-sam-raimi-movie.png?resize=1000%2C585&ssl=1",
          title: "The Unholy",
          detail: "Alice, a girl with hearing impairment, is able to hear, speak and even heal the ill after having visions of the Virgin Mary. But when a journalist probes into the matter, he unearths a conspiracy.",
          Director: "Evan Spiliotopoulos",
          Cast: "Jeffrey Dean Morgan, Cricket Brown, William Sadler"
        },
        {
          id: 59,
          image: "https://i.ytimg.com/vi/H1FzmSFXsr4/maxresdefault.jpg",
          title: "Slender Man",
          detail: "Fascinated by the Internet lore of the Slender Man, four friends attempt to summon him. However, things get out of hand when one of them mysteriously goes missing.",
          Director: "Sylvain White",
          Cast: "Joey King, Julia Goldani Telles, Jaz Sinclair"
        },
        {
          id: 60,
          image: "https://www.nme.com/wp-content/uploads/2021/03/texas-chainsaw-massacre.jpg",
          title: "Texas Chainsaw Massacre",
          detail: "Influencers looking to breathe new life into a Texas ghost town encounter Leatherface, the legendary killer who wears a mask of human skin.",
          Director: "David Blue Garcia",
          Cast: "Sarah Yarkin, Mark Burnham, Olwen Fouere, Elsie Fisher"
        },
      ],
    },
  ];

export default function Home(props) {
  
  useEffect(() => {

  }, [])

  console.log(props)
  const toDetails= (data) => {
  props.history.push("/navigate/" + data.id+"/"+ FormatString(data.title), {itemDetails:data.detail,itemImage:data.image, itemTitle:data.title, itemDirector:data.Director, itemCast:data.Cast})

 }
  return (
    
    <div className="Home">
      {
        scrollItems.map(user => {
          return(
            <div key={user.number}>
              <span className="HomeTitle">{user.Name}</span>
              <div className="HomeContainer">
                <div className="leftArrow" onClick={() => document.getElementById('viewHome').scrollBy(-900,0) }>
                  <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
                </div>
                <div className="HomeView" id="viewHome">
                    {user.content.map(subUser => 
                      <div className='HomeItem' onClick={()=> toDetails(subUser)} key={subUser.id}>
                        <img src={subUser.image} alt={subUser.id} />
                        <p className='Vertical'>{subUser.title}</p>
                      </div>
                    )}
              </div>
              <div className="leftArrow"  onClick={() => document.getElementById('viewHome').scrollBy(900,0) }>
                <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
              </div>
                </div>
            </div>
          )
        })
      }
    </div>
      
     
/*       
        <div className="HomeView" id="HomeView">

        {
          scrollItems.map(data => {

            return (
              <div className='HomeItem' onClick={()=> toDetails(data)}key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Vertical'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        <div className="leftArrow"  onClick={() => document.getElementById('HomeView').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>

      <span className="HTitle"><b> New Releases </b> </span>
      <div className="HomeContainer">
      <div className="leftArrow" onClick={() => document.getElementById('viewHome').scrollBy(-900,0) }>
        <AiOutlineDoubleLeft color='white' size="40" cursor="pointer" />
        </div>

        <div className="HomeView" id="viewHome">

        {
          scrollItems.map(data => {
            return (
              <div className='HomeItem' onClick={()=> toDetails(data)} key={data.id}>
                <img src={data.image} alt={data.id} />
                <p className='Vertical'>{data.title}</p>
              </div>
              
            )
          })
        }
      </div>
        
        <div className="leftArrow"  onClick={() => document.getElementById('viewHome').scrollBy(900,0) }>
          <AiOutlineDoubleRight color="white" size="40" cursor="pointer" />
        </div>
      </div>
        </div>*/
        
  )
}

