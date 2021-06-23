import React from 'react';
import './Menu.css';

export default function Menu(){
    return (
        <div className="menu-whole-div" id="active-link">
        <div className="Menu" onLoad="document.getElementById('active-link').focus()">
            <a href="/" className="delivery">
                <div className="image-focus">
                    <img className="menu-img" src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" alt="delivery"/>
                </div>
                <span className="menu-span">Delivery</span>
            </a>
            <a href="/" className="dinning">
                <div className="image">
                    <img className="menu-img" src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" alt="dining"/>
                </div>
                <span className="menu-span" >Dining Out</span>
            </a>
            <a href="/" className="nightlife">
                <div className="image">
                    <img className="menu-img" src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp" alt="delivery"/>
                </div>
                <span className="menu-span">Nightlife</span>
            </a>
            <a href="/" className="nutrition">
                <div className="image">
                    <img className="menu-img" src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png?output-format=webp" alt="delivery"/>
                </div>
                <span className="menu-span">Nutrition</span>
            </a>
        </div>
        <hr></hr>
        </div>
    )
}