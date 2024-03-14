import React from "react";
import { Link } from "react-router-dom";
import TeacherImage from "../images/teachers/t-1.jpg"


const Principal = () => {
    return (
        <section id="teachers-part" className="pt-70 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="section-title mt-50">
                            <h5>Featured Teachers</h5>
                            <h2>Meet Our Principal</h2>
                        </div>
                        <div className="teachers-cont">
                            <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt  mauris. <br /> auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt  mauris</p>
                            <a href="#" className="main-btn mt-55">Send a message</a>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1" style={{width: 40 + 'rem'}}>
                        <div className="teachers mt-50">
                            <div className="row">
                                <div className="col-sm-10">
                                    <div className="singel-teachers mt-30 text-center">
                                        <div className="image">
                                            <img src={TeacherImage} alt="Teachers" />
                                        </div>
                                        <div className="cont">
                                            <Link to={"/teacher-name"}><h6>Brigadier General Al Faroque Siddiquee</h6></Link>
                                            <span>BSP, ndu, afwc, psc, MPhil.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Principal