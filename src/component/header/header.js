import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {


    return (

        <div>
            <nav class="navbar  navbar-expand-lg navbar-light fixed-top " id="mainNav">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src="assets/img/logo.png" alt="ff" />  </a>

                 
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto my-2 my-lg-0">
                            <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/">Home</Link>
                            </li>

                            <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/service">Services</Link></li>
                            <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/contactus">Contact us</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    );

}

export default header;