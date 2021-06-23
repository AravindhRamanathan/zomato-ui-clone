import React from 'react';
import "./DisplayFood.css";
import {BsStarFill,BsStarHalf} from 'react-icons/bs';


export default function DisplayFood({src,title}){
    return (
        <div className="display-food">
            <div className="image1">
                <div className="display-image-img">
                    <img className="food-image"src={src} alt="Asian Bowl"/>
                </div>
                <p className="caption">{title}</p>
                <div className="food-rating">
                    <div className="star-rating-icon-background">
                        <BsStarFill size="16px" color="white"/>
                    </div>
                    <div className="star-rating-icon-background">
                        <BsStarFill size="16px" color="white"/>
                    </div>
                    <div className="star-rating-icon-background">
                        <BsStarFill size="16px"color="white"/>
                    </div>
                    <div className="star-rating-icon-background">
                        <BsStarFill size="16px" color="white"/>
                    </div>
                    <div className="star-rating-icon-background">
                        <BsStarHalf size="16px" color="white"/>
                    </div>
                    <div className="description-review">4.5 (32 delivery reviews)</div>
                    
                </div>
                <div className="type-of-food">
                    <p>Chinese</p>
                </div>
                <div className="per-unit-price">
                    <p>₹300 for one </p>
                    <p className="seperator-dot"/>
                    <p className="delivery-duration">49 min</p>
                </div>
                <div className="promoted-or-not">
                    <p>Promoted</p>
                </div>
            </div>
            
        </div>
    );
}