import React from 'react';
import '../css/styles.css'
import Header from '../component/header/header.js'
import Footer from '../component/footer/footer.js'


function App() {
  return (
    <div className="App">

      <body id="page-top">

        <Header />

        <header class="masthead">
          <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center text-center">
              <div class="col-lg-10 align-self-end">
                <h1 class="text-uppercase cetilscollr font-weight-bold">CEITA – AAT WEB SUPPORT CONTENT  </h1>
                <hr class="divider my-4" />
              </div>
          
            </div>
          </div>
        </header>

        <section class="page-section" >
          <div class="container">
            <div class="row py-4">
              <div class="col-3 order-2" id="sticky-sidebar">
                <div class="sticky-top">
                  <div class="nav flex-column">
                    <a href="#_" class="nav-link">UAT</a>
                    <a href="#_" class="nav-link">ATT</a>
                    <a href="#_" class="nav-link">BDD</a>
                    <a href="#_" class="nav-link">INTEGRATION</a>
                    <a href="#_" class="nav-link">TECHNICAL ARCHITECTURE</a>
                  </div>
                </div>
              </div>
              <div class="col" id="main">
                <h1>Main Area</h1>
                <p>Chambray sustainable roof party. Shoreditch vegan artisan Helvetica. Tattooed Codeply <br /> Echo Park Godard kogi, next level irony ennui twee squid fap selvage. Meggings flannel Brooklyn literally small batch, mumblecore PBR try-hard kale chips. Brooklyn vinyl lumbersexual bicycle rights, viral fap cronut leggings squid chillwave pickled gentrify mustache. 3 wolf moon hashtag church-key Odd Future. Austin messenger bag normcore, Helvetica Williamsburg sartorial tote bag distillery Portland before they sold out gastropub taxidermy Vice.</p>
                <p>3 wolf moon retro jean shorts chambray sustainable roof party. Shoreditch <br />vegan artisan Helvetica. Tattooed Codeply Echo Park Godard kogi, next level irony ennui twee squid fap selvage. Meggings flannel<br /> Brooklyn literally small batch, mumblecore PBR try-hard kale chips. Brooklyn vinyl lumbersexual bicycle rights, viral fap cronut leggings squid chillwave pickled gentrify mustache. 3 wolf moon hashtag church-key Odd Future. Austin messenger bag normcore, Helvetica Williamsburg sartorial tote bag distillery Portland before they sold out gastropub taxidermy Vice.</p>
              </div>
            </div>
          </div>

         

    

        </section>
        <hr class="featurette-divider" />

        <div class="container marketing">

        <div class="row featurette">
          <div class="col-md-5">
            <h2 class="featurette-heading">Ticket  <span class="text-muted">Support</span></h2>
            <p class="lead">Do you need help with the plan or how to use the AAT tool? We are glad to give you the support for all your users. Our technical support is able to provide the solution you need in order to make the right changes. We put our best efforts to help you through your  customer experience.</p>
          </div>
          <div class="col-md-7">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto"  alt="500x500" src="./assets/img/service/AAT_support_tickets.png" />
        </div>
        </div>


        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">AAT  <span class="text-muted">ADAPTATION</span></h2>
            <p class="lead">We apply the necessary adjustments to the AAT tool, in order to customize its functions, and adapt it to your temporary needs. Therefore, you talk to us about your preferences, and we apply new functions based on your previous experiences.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="" src="./assets/img/service/AAT_adaptation.png" />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-5">
            <h2 class="featurette-heading">Expert   <span class="text-muted">supervision</span></h2>
            <p class="lead">With years of experience, our team has the capacity and know-how necessary to move your company forward, to transform your processes and strategies. We are totally involved in customer satisfaction, therefore, our experts help clients to shape and to improve the structure and management of their companies.</p>
          </div>
          <div class="col-md-7">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto"  alt="500x500" src="./assets/img/service/AAT_expert_supervision.png" />
        </div>
        </div>

        </div>
     


        <Footer />

      </body>
    </div>
  );
}

export default App;
