import React from 'react';
import './price.css';

const price = () => {


  return (

    <div>

<div class="demo">
    <div class="container">
    <h2 class="text-center mt-0">Subtitle Our Services </h2>
            <hr class="divider my-4" />
        <div class="row">
       


            <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                    <div class="pricingTable-header">
                       
                        <h3 class="title">Basic Plan</h3>
                    </div>
                    <ul class="content-list">
                    <img src="./assets/img/Support/AAT_adaptation.png" class="img-fluid" />
                    </ul>
                    <div class="pricingTable-signup">
                        <a href="/contactus">Contact Us</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="pricingTable blue">
                    <div class="pricingTable-header">
                       
                        <h3 class="title">Enterprise Plan</h3>
                    </div>
                    <ul class="content-list">
                    <img src="./assets/img/Support/AAT_expert_supervision.png" class="img-fluid" />
                    </ul>
                    <div class="pricingTable-signup">
                        <a href="/contactus">Contact Us</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4 col-sm-6">
                <div class="pricingTable blue">
                    <div class="pricingTable-header">
                       
                        <h3 class="title">premium Plan</h3>
                    </div>
                    <ul class="content-list">
                    <img src="./assets/img/Support/AAT_support_tickets.png" class="img-fluid" />
                    </ul>
                    <div class="pricingTable-signup">
                        <a href="/contactus">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
          </div>


    );

}

export default price;