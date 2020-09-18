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
                <h1 class="text-uppercase cetilscollr font-weight-bold">Contact Us </h1>
                <hr class="divider my-4" />
              </div>
              
            </div>
          </div>
        </header>

        <section class="page-section" >
          <div class="container">
            <div class="row justify-content-center">




              <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

              <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

              <div class="row">


                <div class="col-md-9 mb-md-0 mb-5">
                  <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                    <div class="row">


                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input type="text" id="name" name="name" class="form-control" />
                          <label for="name" class="">Your name</label>
                        </div>
                      </div>



                      <div class="col-md-6">
                        <div class="md-form mb-0">
                          <input type="text" id="email" name="email" class="form-control" />
                          <label for="email" class="">Your email</label>
                        </div>
                      </div>


                    </div>



                    <div class="row">
                      <div class="col-md-12">
                        <div class="md-form mb-0">
                          <input type="text" id="subject" name="subject" class="form-control" />
                          <label for="subject" class="">Subject</label>
                        </div>
                      </div>
                    </div>



                    <div class="row">


                      <div class="col-md-12">

                        <div class="md-form">
                          <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                          <label for="message">Your message</label>
                        </div>

                      </div>
                    </div>


                  </form>

                  <div class="text-center text-md-left">
                    <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                  </div>
                  <div class="status"></div>
                </div>



                <div class="col-md-3 text-center">
                  <ul class="list-unstyled mb-0">
                    <li><i class="fas fa-map-marker-alt fa-2x"></i>
                      <p>San Francisco, CA 94126, USA</p>
                    </li>

                    <li><i class="fas fa-phone mt-4 fa-2x"></i>
                      <p>+ 01 234 567 89</p>
                    </li>

                    <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                      <p>contact@ceit.com</p>
                    </li>
                  </ul>
                </div>


              </div>

              <div class="divider"></div>
            </div>
          </div>

        </section>

        <section class="page-section" >

          <hr class="divider my-4" />
          <div class="container">
            <div class="row justify-content-center">

              <div class="col-md-3">
                <div class="contact-box center-version">
                  <a href="#profile.html">
                    <img alt="image" class="img-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                    <h3 class="m-b-xs"><strong>Jordi Bellver</strong></h3>

                    <div class="font-bold">IT Director,
                    Architect & BPM Lead
</div>
                    <address class="m-t-md">
                      <strong>Twitter, Inc.</strong><br />
                   
                      <abbr title="Phone">P:</abbr> +44 7422 571768
                    </address>

                  </a>
                  <div class="contact-box-footer">
                    <div class="m-t-xs btn-group">
                      <a class="btn btn-xs btn-white"><i class="fa fa-phone"></i> Call </a>
                      <a class="btn btn-xs btn-white"><i class="fa fa-envelope"></i> Email</a>
                      <a class="btn btn-xs btn-white"><i class="fa fa-user-plus"></i> Follow</a>
                    </div>
                  </div>

                </div>
              </div>



              <div class="col-md-3">
                <div class="contact-box center-version">
                  <a href="#profile.html">
                    <img alt="image" class="img-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                    <h3 class="m-b-xs"><strong>Andrés Peñafiel</strong></h3>

                    <div class="font-bold">Sales Dept.
                    Commercial

</div>
                    <address class="m-t-md">
                      <strong>Twitter, Inc.</strong><br />
                     
                      <abbr title="Phone">P:</abbr> +34 684 13 36 19
                    </address>

                  </a>
                  <div class="contact-box-footer">
                    <div class="m-t-xs btn-group">
                      <a class="btn btn-xs btn-white"><i class="fa fa-phone"></i> Call </a>
                      <a class="btn btn-xs btn-white"><i class="fa fa-envelope"></i> Email</a>
                      <a class="btn btn-xs btn-white"><i class="fa fa-user-plus"></i> Follow</a>
                    </div>
                  </div>

                </div>
              </div>




              <div class="col-md-3">
                <div class="contact-box center-version">
                  <a href="#profile.html">
                    <img alt="image" class="img-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                    <h3 class="m-b-xs"><strong>Álvaro Gago</strong></h3>

                    <div class="font-bold">IT Dept.
                    QA Architect

</div>
                    <address class="m-t-md">
                      <strong>Twitter, Inc.</strong><br />
                    
                      <abbr title="Phone">P:</abbr> +34 711 762 049
                    </address>

                  </a>
                  <div class="contact-box-footer">
                    <div class="m-t-xs btn-group">
                      <a class="btn btn-xs btn-white"><i class="fa fa-phone"></i> Call </a>
                      <a class="btn btn-xs btn-white"><i class="fa fa-envelope"></i> Email</a>
                      <a class="btn btn-xs btn-white"><i class="fa fa-user-plus"></i> Follow</a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>




        </section>






        <Footer />

      </body>
    </div >
  );
}

export default App;
