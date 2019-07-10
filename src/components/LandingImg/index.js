import React, { useState, useEffect } from "react"
import LandingImgLg from "../../assets/page-images/landing-img-lg.png";
import LandingImgSm from "../../assets/page-images/landing-img-sm.png";
import "./style.css"

function LandingImg (props) {

    const [ setWindowWidth ] = useState(window.innerWidth);

    const imageURL = window.innerWidth >= 568 ? LandingImgLg : LandingImgSm;

     const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

     useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    return (
       <div className="landing-img" style={{ backgroundImage: `url(${imageURL})` }}>
            {props.children}
       </div>
    )
}

export default LandingImg; 