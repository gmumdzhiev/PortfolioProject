import React from 'react';
import phone from './img/phone.svg';
import email from './img/mail.svg';
import pin from './img/pin.svg';

const Footer = () => (
  <div id='footer'>

    <div id='social'>

      <a className='fa fa-linked-in' target='_blank' rel='noopener noreferrer' href='https://linkedin.com/in/georgi-mumdzhiev-7842b814a'></a>
      <a className='fa fa-github' target='_blank' rel='noopener noreferrer' href='https://github.com/gmumdzhiev'></a>
      <a className='fa fa-google' rel='noopener noreferrer' href="mailto:george.mumdzhiev@gmail.com"></a>
      <a className='fa fa-instagram' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/gmumdzhiev/?hl=undefined'></a>

    </div>

    <div id='elements'>

      <img id='phone' src={phone} />
      <p>+32 495 85 13 61</p>

      <img id='email' src={email} /> <p>GEORGE.MUMDZHIEV@GMAIL.COM</p>
      <img id='pin' src={pin} /> <p>ANTWERP , BELGIUM</p>
    </div>
  </div >
)
export default Footer