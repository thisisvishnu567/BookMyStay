<<<<<<< HEAD
import './MailList.css';

const mailList = () => {
  return (
    <div className='mail'>
        <h1 className="mainTitle">Save Time, Save Money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your email' className='textbox'/>
            <button className="subscribe">Subscribe</button>
        </div>
    </div>
  )
}

=======
import './MailList.css';

const mailList = () => {
  return (
    <div className='mail'>
        <h1 className="mainTitle">Save Time, Save Money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your email' />
            <button className="subscribe">Subscribe</button>
        </div>
    </div>
  )
}

>>>>>>> 107386e2c56d5dde13920e4917298ac6fabd25ad
export default mailList;