import React from "react";
import Debate from '../images/debate.jpg'


const Notice = () => {
    return (
        <section id="about-part" className="pt-65">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="section-title mt-50">
                            <h5>Update</h5>
                            <h2>Champion in National Debate Competition! </h2>
                        </div>

                        <img src={Debate} style={{marginTop: 15 + 'px'}} />

                        <div className="about-cont">
                            <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt  mauris. <br/> auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt  mauris</p>
                            <a href="#" className="main-btn mt-55">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="about-event mt-50">
                            <div className="event-title">
                                <h3>Notice Board</h3>
                            </div>
                            <ul>
                                <li>
                                    <div className="singel-event">
                                        <span><i className="fa fa-calendar"></i> 2 December 2018</span>
                                        <a href="events-singel.html"><h4>About XI Admission</h4></a>
                                        <span><i className="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                                        <span><i className="fa fa-map-marker"></i> Rc Auditorim</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="singel-event">
                                        <span><i className="fa fa-calendar"></i> 2 December 2018</span>
                                        <a href="events-singel.html"><h4>Movie outing with the students</h4></a>
                                        <span><i className="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                                        <span><i className="fa fa-map-marker"></i> Rc Auditorim</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="singel-event">
                                        <span><i className="fa fa-calendar"></i> 2 December 2018</span>
                                        <a href="events-singel.html"><h4>About upcoming year final exam for XI students</h4></a>
                                        <span><i className="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                                        <span><i className="fa fa-map-marker"></i> Rc Auditorim</span>
                                    </div>
                                </li>

                                <li>
                                    <div className="singel-event">
                                        <span><i className="fa fa-calendar"></i> 2 December 2018</span>
                                        <a href="events-singel.html"><h4>Scholarship form</h4></a>
                                        <span><i className="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                                        <span><i className="fa fa-map-marker"></i> Rc Auditorim</span>
                                    </div>
                                </li>

                                <li>
                                    <div className="singel-event">
                                        <span><i className="fa fa-calendar"></i> 2 December 2018</span>
                                        <a href="events-singel.html"><h4>Fresher's reception 2023</h4></a>
                                        <span><i className="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                                        <span><i className="fa fa-map-marker"></i> Rc Auditorim</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Notice