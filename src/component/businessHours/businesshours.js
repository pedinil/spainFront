import React from 'react';
import './businessHours.css'

const businesshours = () => {


    return (

        <div>

            <div class="container demo-bg">
                <div class="row">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                        <div class="business-hours">
                            <h2 class="title">Opening Hours</h2>
                            <ul class="list-unstyled opening-hours">
                                <li>Sunday <span class="pull-right">Closed</span></li>
                                <li>Monday <span class="pull-right">9:00-22:00</span></li>
                                <li>Tuesday <span class="pull-right">9:00-22:00</span></li>
                                <li>Wednesday <span class="pull-right">9:00-22:00</span></li>
                                <li>Thursday <span class="pull-right">9:00-22:00</span></li>
                                <li>Friday <span class="pull-right">9:00-23:30</span></li>
                                <li>Saturday <span class="pull-right">14:00-23:30</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );

}

export default businesshours;