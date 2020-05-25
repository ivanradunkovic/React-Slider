import React from 'react';
import './slider.scss';

function Slider() {

    //Array for show component inside slider
    let sliderArray = [1,2,3,4,5];

    return (
        <div clasName="slider">
            {sliderArray.map((item, index) => {
                    return(
                        <div key={index} className="slide">
                            {item}
                        </div>
                    );
            })}
        </div>
    );

}

export default Slider