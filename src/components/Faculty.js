import React from "react";
import { Link } from "react-router-dom";


const Faculty = () => {
    return (
        <section id="course-part" className="pt-115 pb-120 gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title pb-45">
                            <h5>Featured departments</h5>
                            <h2>Our Faculty</h2>
                        </div>
                    </div>
                </div>
                <div className="row course-slied mt-30">
                    <div className="col-lg-4">
                        <div className="singel-course">
                            <div className="thum">
                                <div className="image">
                                    <img className="dept_img" src="images/course/cu-5.jpg" alt="Course" />
                                </div>
                            </div>
                            <div className="cont">

                                <Link to='/ict'><h4>ICT</h4></Link>

                                <p>Total teachers: 6</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="singel-course">
                            <div className="thum">
                                <div className="image">
                                    <img className="dept_img" src="images/course/cu-2.jpg" alt="Course" />
                                </div>
                            </div>
                            <div className="cont">

                                <Link to><h4>Higher Mathematics</h4></Link>

                                <p>Total teachers: 10</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="singel-course">
                            <div className="thum">
                                <div className="image">
                                    <img className="dept_img" src="images/course/cu-3.jpg" alt="Course" />
                                </div>
                            </div>
                            <div className="cont">

                                <a href="courses-singel.html"><h4>Physics</h4></a>

                                <p>Total teachers: 10</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="singel-course">
                            <div className="thum">
                                <div className="image">
                                    <img className="dept_img" src="images/course/cu-1.jpg" alt="Course" />
                                </div>
                            </div>
                            <div className="cont">

                                <a href="courses-singel.html"><h4>Chemistry</h4></a>

                                <p>Total teachers: 10</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="singel-course">
                            <div className="thum">
                                <div className="image">
                                    <img className="dept_img" src="images/course/cu-4.jpg" alt="Course" />
                                </div>
                            </div>
                            <div className="cont">

                                <a href="courses-singel.html"><h4>Biology</h4></a>

                                <p>Total teachers: 10</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Faculty