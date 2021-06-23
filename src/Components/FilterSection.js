import React from 'react';
import {BiFilter,BiTransfer} from 'react-icons/bi';
import "./FilterSection.css";

export default function FilterSection(){
    return (
        <div className="filter-section">
            <div className="filter">
                <BiFilter color="grey" size="14px"/>
                <span className="filter-span">Filters</span>
            </div>
            <div className="rating">
                <span className="filter-span">Rating +4.0</span>
            </div>
            <div className="safe">
                <span className="filter-span">Safe and Hygenic</span>
            </div>
            <div className="pureveg">
                <span className="filter-span">Pure Veg</span>
            </div>
            <div className="delivery-time">
                <div className="imagetransfer">
                <BiTransfer/>
                </div>
                <span className="filter-span">Delivery Time</span>
            </div>
            <div className="greatoffers">
                <span className="filter-span">Great Offers</span>
            </div>
        </div>
    );
}