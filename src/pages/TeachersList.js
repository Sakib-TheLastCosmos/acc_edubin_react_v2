import React from "react";
import TeacherImage from '../images/teachers/t-1.jpg';
import Review1 from '../images/review/r-1.jpg'
import TeacherPageBanner from '../images/page-banner-3.jpg'

import { Link } from "react-router-dom";

import ict_t_1 from '../images/teachers/ict_t-1.jpg'
import ict_t_2 from '../images/teachers/ict_t-2.jpg'
import ict_t_3 from '../images/teachers/ict_t-3.jpg'
import ict_t_4 from '../images/teachers/ict_t-4.jpg'
import ict_t_5 from '../images/teachers/ict_t-5.jpg'
import ict_t_6 from '../images/teachers/ict_t-6.jpg'
import ict_image from '../images/course/cu-5.jpg'




const TeachersList = () => {
    return (
        <div id="teacher">
            <section id="page-banner" className="pt-105 pb-130 bg_cover" data-overlay="8" style={{backgroundImage: `url(${ict_image})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-banner-cont">
                                <h2>Information and Communication Technology</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Teachers</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="teachers-singel" className="pt-70 pb-120 gray-bg">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-sm-3">
                            <div className="singel-teachers mt-30 text-center">
                                <div className="image">
                                    <img className="teacher_list_image" src={ict_t_1} alt="Teachers" />
                                </div>
                                <div className="cont">
                                    <Link to={"/teacher-name"}><h6>Md. Naimul Haque</h6></Link>
                                    <span>Professor & Head of the department</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="singel-teachers mt-30 text-center">
                                <div className="image">
                                    <img className="teacher_list_image" src={ict_t_2} alt="Teachers" />
                                </div>
                                <div className="cont">
                                    <Link to={"/teacher-name"}><h6>Md, Maksudur Rahman Khan</h6></Link>
                                    <span>Associate Professor</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="singel-teachers mt-30 text-center">
                                <div className="image">
                                    <img className="teacher_list_image" src={ict_t_3} alt="Teachers" />
                                </div>
                                <div className="cont">
                                    <Link to={"/teacher-name"}><h6>Mohammad Mahfuzur Rahman</h6></Link>
                                    <span>Assistant Professor</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="singel-teachers mt-30 text-center">
                                <div className="image">
                                    <img className="teacher_list_image" src={ict_t_4} alt="Teachers" />
                                </div>
                                <div className="cont">
                                    <Link to={"/teacher-name"}><h6>Shafkat Shishir</h6></Link>
                                    <span>Lecturer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="singel-teachers mt-30 text-center">
                                <div className="image">
                                    <img className="teacher_list_image" src={ict_t_5} alt="Teachers" />
                                </div>
                                <div className="cont">
                                    <Link to={"/teacher-name"}><h6>Md. Abdul Halim</h6></Link>
                                    <span>Lecturer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="singel-teachers mt-30 text-center">
                                <div className="image">
                                    <img className="teacher_list_image" src={ict_t_6} alt="Teachers" />
                                </div>
                                <div className="cont">
                                    <Link to={"/teacher-name"}><h6>Md Ikbal Hossain</h6></Link>
                                    <span>Lecturer</span>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </div>
    )
}


export default TeachersList