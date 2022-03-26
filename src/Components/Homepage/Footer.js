import React from 'react';
import "./css/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import { blue, red } from '@mui/material/colors';
function Footer() {
  return <div className='Footer'>
      <div className='Footer__Logo'>
          <img src='./images/logo.jpg' alt='logo'/>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum.</p>
           <p style={{color:'gray'}}>@2018 atu. All rights reserved.</p>     
      </div>
      <div className='Footer__Contacts'>
          <h3>Contact us</h3>
          <a>Email : office@email.com</a>
          <a>Phone: +977-98765431</a>
          <a>Address: Lazimpat, Kathmandu</a>
      </div>
      <div className='Footer__Links'>
          <h3>Quick Links</h3>
          <a>About US</a>
          <a> Teams of services</a>
          <a>Privacy Policy</a>
      </div>
      <div className='Footer__Social'>
          <h3>Follow us</h3>
          <a href='https://www.facebook.com/lazimpatengineering' target={'_blank'}><FacebookRoundedIcon sx={{color:blue[700],fontSize: 40}}/></a>
          <a href='https://www.instagram.com/lazimpatenggworks/' target={'_blank'}><InstagramIcon sx={{color:red[400], fontSize: 40}}/></a>
          <TwitterIcon sx={{color:blue[400], fontSize: 40}}/>
      </div>
  </div>;
}

export default Footer;
