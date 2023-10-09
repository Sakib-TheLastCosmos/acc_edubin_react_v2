import React from "react";


const Slider = () => {
    return (
        <section id="slider-part" className="slider-active">
            <div className="single-slider bg_cover pt-150" style={{backgroundImage: 'url(images/slider/s-1.jpg)'}} data-overlay="4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9">
                            <div className="slider-cont">
                                <h1 data-animation="bounceInLeft" data-delay="1s">Welcome to Adamjee Cantonment College!</h1>
                                <p data-animation="fadeInUp" data-delay="1.3s">Donec vitae sapien ut libearo venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt  Sed fringilla mauri amet nibh.</p>
                                <ul>
                                    <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#">Read More</a></li>
                                    <li><a data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" href="#">Get Started</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-slider bg_cover pt-150" style={{backgroundImage: 'url(images/slider/s-2.jpg)'}} data-overlay="4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9">
                            <div className="slider-cont">
                                <h1 data-animation="bounceInLeft" data-delay="1s">Choose the right theme for education</h1>
                                <p data-animation="fadeInUp" data-delay="1.3s">Donec vitae sapien ut libearo venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt  Sed fringilla mauri amet nibh.</p>
                                <ul>
                                    <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#">Read More</a></li>
                                    <li><a data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" href="#">Get Started</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-slider bg_cover pt-150" style={{backgroundImage: 'url(images/slider/s-3.jpg)'}} data-overlay="4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9">
                            <div className="slider-cont">
                                <h1 data-animation="bounceInLeft" data-delay="1s">Choose the right theme for education</h1>
                                <p data-animation="fadeInUp" data-delay="1.3s">Donec vitae sapien ut libearo venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt  Sed fringilla mauri amet nibh.</p>
                                <ul>
                                    <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#">Read More</a></li>
                                    <li><a data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" href="#">Get Started</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Slider