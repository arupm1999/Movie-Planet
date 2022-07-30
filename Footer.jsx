import './Footer.css';
import Image7 from '../../images/images/img7.jpg'

const buttomL = [
  {
    id: 1,
    image: Image7
  },]

export default function Footer() {
  return (
    <div className="buttom">
      <li className="buttomLI" id='buttomLI'>
      {
           buttomL.map(data => {
              return(
                <div className='buttomL' key={data.id}>
                <img src={data.image} alt={data.id} /></div>
              )
           })
         }
      </li>
      <div className="buttomBox">
        <h3 className="Group">Get Help</h3>
        <li className="buttomList">Help With Movie Planet</li>
      </div>
      <div className="buttomBox">
        <h3 className="Group">About</h3>
        <li className="buttomList">About Us</li>
        <li className="buttomList">Contact Us</li>
      </div>
      <div className="buttomBox">
        <h3 className="Group">Our Apps</h3>
        <li className="buttomList">Movie Planet for IOS</li>
        <li className="buttomList">Movie Planet for Android</li>
        <li className="buttomList">Movie Planet for Roku</li>
      </div>
      <div className="buttomBox">
        <h3 className="Group">Social</h3>
        <li className="buttomList">Instagram</li>
        <li className="buttomList">Facebook</li>
        <li className="buttomList">Twitter</li>
      </div>
      <div className="buttomBox">
        <h3 className="Group">Legal</h3>
        <li className="buttomList">Terms of Use</li>
        <li className="buttomList">Privacy Policy</li>
        <li className="buttomList">© 2022 Movie Planet</li>
      </div>
    </div>
  )
}
