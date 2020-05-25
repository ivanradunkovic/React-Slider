import React, {useState} from 'react';
import './slider.scss';
import ImageComponent from './ImageComponent';
import i1 from './assets/slider-image-1.jpg';
// import i2 from './assets/slider-image-2.jpg'
// import i3 from './assets/slider-image-3.jpg'
// import i4 from './assets/slider-image-4.jpg'
// import i5 from './assets/slider-image-5.jpg'
// import i6 from './assets/slider-image-6.jpg'
// import i7 from './assets/slider-image-7.jpg'
// import i8 from './assets/slider-image-8.jpg'
// import i9 from './assets/slider-image-9.jpg'


function Slider() {

    //Array for show component inside slider
    let sliderArray = [<ImageComponent src={i1} />, 2,3,4,5];
    const [x, setX] = useState(0);
    const goLeft=() => {
        console.log(x);
        x === 0 ? setX(-100 * (sliderArray.length -1)) : setX(x + 100);
    };
    const goRight=() => {
        console.log(x);
        x === -100 * (sliderArray.length -1) ? setX(0) : setX(x -100);
    };

    return (
        <div className="slider">
            {sliderArray.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    );
            })}
            <button id="goLeft" onClick={goLeft}>Left</button>
            <button id="goRight" onClick={goRight}>Right</button>
        </div>
    );
}

export default Slider