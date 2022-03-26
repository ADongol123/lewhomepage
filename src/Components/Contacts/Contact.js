import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Contact.css';
function Contact() {
  return <div className='contact'>
  <div className='contact__touch'>
      <h2>GET IN TOUCH</h2>
      <p>Enter your info and we'll give you a call</p>
      <div className='contact__form'>
        <p>Name<span style={{color:'red',fontSize:20}}>*</span></p>
        <div className='contactform__name'>
            <div className='cname__first'>
                <input type='text' required/>
                <p>First</p>
            </div>
            <div className='cname__second'>
                 <input type='text'required/>
                 <p>Last</p>
            </div>
        </div>
        <div className='contactform__email'>
            <p>Email<span style={{color:'red',fontSize:20}}>*</span></p>
            <input type='email' required/>
         </div>
         <div className='contactform__message'>
            <p>Message<span style={{color:'red',fontSize:20}}>*</span></p>
            <input type='email' required/>
         </div>
         <button className='contact__button'>Submit</button>
      </div>
  </div>
  <div className='contact__info'>
      <h2>INFORMATION</h2>
      <p>Contact us at anytime</p>
      <div className='contact__information'>
            <div className='contactinfo__description'>
                <LocalPhoneIcon style={{color:"#0e304e",height:50,width:50}} className='contactinfo__icon' />
                <p>977 984-1879982 <br/>01-4428506</p>
            </div>
            <div className='contactinfo__description'>
                <EmailIcon style={{color:"#0e304e",height:50,width:50}} className='contactinfo__icon'/>
                <p>lazimpatmetal@gmail.com</p>
            </div>
            <div className='contactinfo__description'>
                <LocationOnIcon style={{color:"#0e304e",height:50,width:50}} className='contactinfo__icon'/>
                <p>Lazimpat,Kathmandu</p>
            </div>
      </div>
      <div className='contact__smedia'>
            <p>SOCIAL MEDIA</p>
            <div className='contact__icons'>
                <FacebookIcon style={{color:"#0e304e",height:50,width:50}}/>
                <TwitterIcon style={{color:"#0e304e",height:50,width:50}}/>
                <InstagramIcon style={{color:"#0e304e",height:50,width:50}}/>
            </div>
      </div>
  </div>
</div>;
}

export default Contact;
