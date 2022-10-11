import React from "react";
import HeroImage from "../../assets/cover/hero/loseselfdeepalbumart.png";
import {HeroImageEl, HeroDiv, H1} from './HeroElements';

function Hero() {
    return (
        <>
        <HeroDiv>
            <HeroImageEl src={HeroImage} alt="lose self deep in time, it's a must"/>
            <H1> Lose Self Deep Available Now!!!</H1>
         </HeroDiv>   
        
            
        </>
    );

}

export default Hero;