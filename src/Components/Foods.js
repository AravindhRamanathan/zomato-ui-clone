import React from 'react';
import DisplayFood from './DisplayFood';
import './Foods.css';


export default function Foods(){
    return (
        <div className="foods">
            <DisplayFood title="Baskin-Robbin" src="https://b.zmtcdn.com/data/pictures/chains/5/32465/75d6026888167fcc63d7a3d192c25527_o2_featured_v2.jpg"/>
            <DisplayFood title="Asian-Bowl" src="https://b.zmtcdn.com/data/pictures/2/19686642/45d1be3f3cca22fe4ab70b1e98151418_o2_featured_v2.jpg"/>
            <DisplayFood title="Wok and Roll" src="https://b.zmtcdn.com/data/pictures/8/19680968/6779929093be59fb59f201508b95318e_o2_featured_v2.jpg"/>
            <DisplayFood title="Burger King" src="https://b.zmtcdn.com/data/pictures/chains/1/49781/9f2f843523d0e8b9ecd9ee9ee32c1c46_o2_featured_v2.jpg"/>
            <DisplayFood title="Hawalian Shawk" src="https://b.zmtcdn.com/data/pictures/3/36883/339bb9d3758a6078c7f8a7db996b0854_o2_featured_v2.jpg"/>
            <DisplayFood title="The Roll Company" src="https://b.zmtcdn.com/data/pictures/5/18544135/21c99da5ce9408ebb1a818cdb9bbfe5c_o2_featured_v2.jpg"/>
            <DisplayFood title="Z3 Authlenic Chinese Cusine" src="https://b.zmtcdn.com/data/pictures/9/19677599/b0323f606692a578258e781441e397c4_featured_v2.jpg"/>
            <DisplayFood title="McDonalds" src="https://b.zmtcdn.com/data/pictures/chains/9/35079/c0ba9ec0f08684316b2552a8eb5a1ea8_o2_featured_v2.jpg"/>
            <DisplayFood title="M&M Momo" src="https://b.zmtcdn.com/data/pictures/chains/6/18651116/502f39dbc30eeace3bfdd8a43e71a4a4_o2_featured_v2.jpg?output-format=webp"/>
            <DisplayFood title-="Masal Chaai" src="https://b.zmtcdn.com/data/pictures/1/18435901/40d155cf25922615c147311a06712e23_o2_featured_v2.jpg?output-format=webp"/>
        </div>
    );
}