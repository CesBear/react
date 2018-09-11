import React from 'react';
import  {MediaBox, Slider, Slide} from 'react-materialize';

const Bedu = () => {
    return (
        <div>
            <MediaBox src="https://lorempixel.com/350/350/nature/1" caption="A demo media box1" width="350"/>
            <Slider>
                <Slide
                    src="http://lorempixel.com/580/250/nature/1"
                    title="BeDu Principal Page...">
                    Here's our small slogan.
                </Slide>
                <Slide
                    src="http://lorempixel.com/580/250/nature/2"
                    title="Left aligned Caption"
                    placement="left">
                    Here's our small slogan.
                </Slide>
                <Slide
                    src="http://lorempixel.com/580/250/nature/3"
                    title="Right aligned Caption"
                    placement="right">
                    Here's our small slogan.
                </Slide>
            </Slider>
        </div>
    );
};

export default Bedu;