import React from 'react';
import '../css/styles.css'
import Header from '../component/header/header.js'
import Footer from '../component/footer/footer.js'
import Price from '../component/price/price.js'
import Carousel from '../component/carousel/carouselslider.js'

function App() {
  return (
    <div className="App">

      <body id="page-top">

        <Header />

        <header class="masthead">
          <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center text-center">
              <div class="col-lg-10 align-self-end">
                <h1 class="text-uppercase cetilscollr font-weight-bold">Appian Automated Test  </h1>
                <hr class="divider my-4" />
              </div>
              <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 font-weight-light mb-5">All our IT consulting services at your disposal</p>
                <a class="btn btn-primary btn-xl js-scroll-trigger " href="#about">Request a demo</a>

                <a class="btn btn-primary btn-xl js-scroll-trigger ml-4" href="#about">Support access</a>
              </div>
            </div>
          </div>
        </header>

        <section class="page-section" >
        <div class="container">
            <div class="row justify-content-center">
            <Carousel />
            </div>
            </div>

        </section>
        
        <section class="page-section bg-primary" id="about">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 text-center">
                <h2 class="text-white mt-0">AAT</h2>
                <hr class="divider light my-4" />
                <p class="text-white-50 mb-4">Appian automated test is the solution that will facilitate not efficinency in your projects but also improve your time to market </p>
                <a class="btn btn-light btn-xl js-scroll-trigger  " href="#services">Learn More About CEITA</a>
                <a class="btn btn-light btn-xl js-scroll-trigger ml-4" href="https://www.youtube.com/watch?v=dlarjDopjaI">See Videos About AAT </a>
              </div>
            </div>
           

          </div>
        </section>

        <section class="page-section" id="services">
          <div class="container">
            <h2 class="text-center mt-0">Benefits of AAT</h2>
            <hr class="divider my-4" />
            <div class="row">
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                  <h3 class="h4 mb-2">Return on investment </h3>
                  <p class="text-muted mb-0">Common examples have a ROI of one year or less.</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <i class="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <h3 class="h4 mb-2">Optimize QA workforce</h3>
                  <p class="text-muted mb-0">Analyst and testers could be released in specific cases during the sprints of a project </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <i class="fas fa-4x fa-globe text-primary mb-4"></i>
                  <h3 class="h4 mb-2">Shorten UAT</h3>
                  <p class="text-muted mb-0">The time spent in UAT will decrease around 30%.</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <i class="fas fa-4x fa-heart text-primary mb-4"></i>
                  <h3 class="h4 mb-2">High speed interface automation</h3>
                  <p class="text-muted mb-0">The user experience has been improved thanks to a great interface design, therefore the usability has increased the automation experience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="page-section" id="services">
          <Price />
        </section>



        <Footer />

      </body>
    </div>
  );
}

export default App;
