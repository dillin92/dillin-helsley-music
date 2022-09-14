import React from "react";
import HeroImage from "../../assets/cover/hero/loseselfdeepalbumart.png";
import {HeroImageEl, HeroDiv} from './HeroElements';

function Hero() {
    return (
        <>
        <HeroDiv>
            <HeroImageEl src={HeroImage} alt="lose self deep in time, it's a must"></HeroImageEl>
        </HeroDiv>
            
        </>
    );

}

export default Hero;