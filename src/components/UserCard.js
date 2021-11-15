import React from 'react';
import '../styles/User-Card.css';
import mail from '../images/mail.JPG';
import phone from '../images/phone.JPG';


export default function UserCard({picture,city,name}){
 
  return(
  <div className="userCard">
    <h3 className="userName">{name.first} {name.last}</h3>
    <img className="userImage" src={picture.medium} alt={name.first}></img>  
    
    <p className="place">{city}</p>
    <div className="contact">
        <a href="#" role="button">
            <img className="mail" src={mail} alt="mail"></img>
        </a>
        <a href="#" role="button">
            <img className="phone" src={phone} alt="phone"></img>
        </a>
    </div>
  </div>
  );
}