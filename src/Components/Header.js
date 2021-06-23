import React from 'react';
import './Header.css';
import { HiLocationMarker } from "react-icons/hi";
import {GiHamburgerMenu} from "react-icons/gi";
import{BsSearch} from "react-icons/bs";
export default function Header(){

    const userActions=document.getElementsByClassName("user-actions");
    function handleClick(){
        console.log(userActions);
            // userActions.classList.toggle("active");
            // signup.classList.toggle("active");
        }

    return (
        <div className="Header">
            <div className="zomato-logo">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato-logo"/>
            </div>
            <div className="Header-form">
                <form>
                    <div className="form-elements">
                    <HiLocationMarker color="#f26168" size="24px"></HiLocationMarker>
                        <select name="cars" id="cars" placeholder="">
                            <option className="form-options"value="Mumbai"selected>Mumbai</option>
                            <option className="form-options" value="" >Detect Current Location</option>
                        </select>
                        <div className="vertical-line"/>
                        <div className="Search-Symbol">
                            <BsSearch size="16px"/>
                        </div>
                        <div className="Header-Search-Input"> 
                            <input type="text" placeholder="Search for restaurants, cuisines or dishes"/>
                        </div>
                    </div>
                </form>
            </div>
            <div className="hamburger-icon">
                <button onClick={()=>handleClick()} className="hamburger-button"><GiHamburgerMenu size="32px"/></button>
            </div>
            <div className="user-actions">
                <p className="login">Log in</p>
                <p className="signup">Sign up</p>
            </div>
        </div>
        
    );
}