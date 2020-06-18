import React, { Fragment } from 'react';
import jQuery from 'jquery';
import owl1 from '../../assets/images/owl1.jpg';
import owl2 from '../../assets/images/owl2.jpg';
import owl3 from '../../assets/images/owl3.jpg';
import owl4 from '../../assets/images/owl4.jpg';
import owl5 from '../../assets/images/owl5.jpg';
import owl6 from '../../assets/images/owl6.jpg';
import owl7 from '../../assets/images/owl5.jpg';
import owl8 from '../../assets/images/owl8.jpg';

class OwlCarosuel extends React.PureComponent {

    componentDidMount() {
        const carousel = jQuery("#owl-demo");

        carousel.owlCarousel({          
            navigation : true,
            Items: 3

        });       
    }

    render() {
        return (
            <div className="row">
                <div id="owl-demo" className="owl-carousel owl-theme">
                    <div className="item"><img src={owl1} alt="image1" /></div>
                    <div className="item"><img src={owl2} alt="image2" /></div>
                    <div className="item"><img src={owl3} alt="image2" /></div>
                    <div className="item"><img src={owl4} alt="image3" /></div>
                    <div className="item"><img src={owl5} alt="image4" /></div>
                    <div className="item"><img src={owl6} alt="image5" /></div>
                    <div className="item"><img src={owl7} alt="image6" /></div>
                    <div className="item"><img src={owl8} alt="image7" /></div>
                </div>
            </div>
        );
    }
};

export default OwlCarosuel;