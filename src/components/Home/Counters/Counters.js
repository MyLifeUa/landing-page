import React from 'react';

import fullImage from '../../../assets/home/full_image_1.jpg';

class Counters extends React.Component {

    constructor(props) {
        super(props);
        this.state = { daysLeft: 1, workHours:1 };
    }
    
    componentDidMount() {
    this.calculateDaysLeft();
    this.calculateWorkingHours();
    }

   calculateDaysLeft () {
        var today=new Date();
        var finalDay=new Date(today.getFullYear(), 5, 30);

        
        var one_day=1000*60*60*24;
     
        this.setState({daysLeft:Math.ceil((finalDay.getTime()-today.getTime())/(one_day)).toString()})
    }

    calculateWorkingHours () {
        var today=new Date();
        var initialDay=new Date(today.getFullYear(), 1, 10);

        
        var one_week=1000*60*60*24*7;
     
        this.setState({workHours:Math.ceil(((today.getTime()-initialDay.getTime())/(one_week))*20).toString()})
    }

    render () {
       return( <div id="counters">
            <section id="fh5co-counters" style={{backgroundImage: "url(" + fullImage + ")"}} data-stellar-background-ratio="0.5">
                <div class="fh5co-overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 section-heading text-center to-animate">
                            <h2>Fun Facts</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="fh5co-counter to-animate">
                                <i class="fh5co-counter-icon icon-briefcase to-animate-2"></i>
                                <span class="fh5co-counter-number js-counter" data-from="0" data-to="7" data-speed="5000" data-refresh-interval="50">9</span>
                                <span class="fh5co-counter-label">Gitlab repositories</span>
                            </div>
                        </div>
                        
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="fh5co-counter to-animate">
                                <i class="fh5co-counter-icon icon-cup to-animate-2"></i>
                                <span class="fh5co-counter-number js-counter" data-from="0" data-to={this.state.workHours} data-speed="5000" data-refresh-interval="50">500</span>
                                <span class="fh5co-counter-label">Working hours</span>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="fh5co-counter to-animate">
                                <i class="fh5co-counter-icon icon-people to-animate-2"></i>
                                <span class="fh5co-counter-number js-counter" data-from="0" data-to={this.state.daysLeft} data-speed="5000" data-refresh-interval="50">77</span>
                                <span class="fh5co-counter-label">Days left</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
       )};
}

export default Counters;