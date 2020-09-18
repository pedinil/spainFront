import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const carouselslider = () => {


  return (

    <div>

      <Carousel>
        <div>
          <img src="./assets/img/AAT/AAT-designer.png" />
          
        </div>
        <div>
        <img src="./assets/img/AAT/AAT-repository.png" />
        </div>
        <div>
        <img src="./assets/img/AAT/AAT-UAT-create.png" />
        </div>
        <div>
        <img src="./assets/img/AAT/AAT-UAT.png" />
        </div>
        <div>
        <img src="./assets/img/AAT/AAT-work-station.png" />
        </div>

        <div>
        <img src="./assets/img/AAT/AATlogin.png" />
        </div>
      </Carousel>

    </div>


  );

}

export default carouselslider;