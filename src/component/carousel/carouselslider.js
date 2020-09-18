import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const carouselslider = () => {


  return (

    <div>

      <Carousel>
        <div>
          <img src="./assets/img/AAT/AAT-designer.png"  alt ="ceiti"/>
          
        </div>
        <div>
        <img src="./assets/img/AAT/AAT-repository.png"  alt ="ceiti" />
        </div>
        <div>
        <img src="./assets/img/AAT/AAT-UAT-create.png"  alt ="ceiti"  />
        </div>
        <div>
        <img src="./assets/img/AAT/AAT-UAT.png"  alt ="ceiti"  />
        </div>
        <div>
        <img src="./assets/img/AAT/AAT-work-station.png"  alt ="ceiti"  />
        </div>

        <div>
        <img src="./assets/img/AAT/AATlogin.png"  alt ="ceiti" />
        </div>
      </Carousel>

    </div>


  );

}

export default carouselslider;