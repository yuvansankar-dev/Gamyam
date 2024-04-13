import React from 'react'
import noImage from "../../../assets/no-image.png"
import "./BootstrapCarousel.css"
import forward from "../../../assets/forward.svg"
import backward from "../../../assets/backward.svg"

export default function BootstrapCarousel({ land,index }) {
    return (

        Boolean(land.land_media.length) ? <div key={index} id={land.id} className="carousel slide">
            <div className="carousel-inner" >
                {land.land_media.map((media, ind) => <div className={
                    ind === 0 ? "carousel-item active" : "carousel-item "
                } active="true" key={ind}>
                    <img src={media.image} className="d-block w-100" alt={`image${media.id}`} />
                </div>)}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${land.id}`} data-bs-slide="prev">
                <div className='iconParent'><span >&#8678;</span></div>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${land.id}`} data-bs-slide="next">
            <div className='iconParent'><span>&#8680;</span></div>
                <span className="visually-hidden">Next</span>
            </button>
        </div> : <img src={noImage} alt='No image' />)

}
