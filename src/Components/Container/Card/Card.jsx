import React, { useMemo } from 'react'
import "./Card.css"

export default function Card({ land, children }) {
    const landSize = useMemo(() => {
        let acresText = "";
        if (land.total_land_size_in_acres.acres) {
            acresText += land.total_land_size_in_acres.acres + " " + "Acres "
        }
        if (land.total_land_size_in_acres.guntas) {
            acresText += land.total_land_size_in_acres.guntas + " " + "Guntas "
        }
        acresText += ". ";
        return acresText;
    }, [land])
    const landPrice = useMemo(() => {
        let priceText = "₹ ";
        if (land.price_per_acre_crore.crore) {
            priceText+= (land.price_per_acre_crore.crore+(land.price_per_acre_crore.lakh/100)) + " crores" 
        }
        else{
            priceText+= land.price_per_acre_crore.lakh+ " lakh"
        }
        priceText += land.total_land_size_in_acres.acres?" per acre":" for full property";
        return priceText;
    }, [land])
    return (
        <div className='cardStyle'>
            {children}
            <div className='detailPart'>
            <h4>{`${land.village_name}, ${land.mandal_name}`}</h4>
            <h4>{`${land.district_name}(dt)`}</h4>
            <b>{`${landSize}`}</b><span>{`${landPrice}`}</span>
            </div>
            </div>
    )
}
