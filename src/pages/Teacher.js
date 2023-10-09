import React from "react";
import TeacherImage from '../images/teachers/t-1.jpg';
import Review1 from '../images/review/r-1.jpg'
import TeacherPageBanner from '../images/page-banner-3.jpg'



const Teacher = () => {
    return (
        <div id="teacher">
            <section id="page-banner" className="pt-105 pb-130 bg_cover" data-overlay="8" style={{backgroundImage: `url(${TeacherPageBanner})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-banner-cont">
                                <h2>Teachers</h2>
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
                        <div className="col-lg-4 col-md-8">
                            <div className="teachers-left mt-50">
                                <div className="hero">
                                    <img src={TeacherImage} alt="Teachers"/>
                                </div>
                                <div className="name">
                                    <h6>Mark alen</h6>
                                    <span>Vice chencelor</span>
                                </div>
                                <div className="social">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus-square"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    </ul>
                                </div>
                                <div className="description">
                                    <p>Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate..</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-8">
                            <div className="teachers-right mt-50">
                                <ul className="nav nav-justified" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="active" id="dashboard-tab" data-toggle="tab" href="#dashboard" role="tab" aria-controls="dashboard" aria-selected="true">Dashboard</a>
                                    </li>

                                    <li className="nav-item">
                                        <a id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                                    </li>
                                </ul> 
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                        <div className="dashboard-cont">
                                            <div className="singel-dashboard pt-40">
                                                <h5>About</h5>
                                                <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                            </div> 
                                            <div className="singel-dashboard pt-40">
                                                <h5>Acchivments</h5>
                                                <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                            </div> 
                                            <div className="singel-dashboard pt-40">
                                                <h5>My Objective</h5>
                                                <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                            </div> 
                                        </div> 
                                    </div>
                                    
                                    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                        <div className="reviews-cont">
                                            <div className="title">
                                                <h6>Student Reviews</h6>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className="singel-reviews">
                                                        <div className="reviews-author">
                                                            <div className="author-thum">
                                                                <img src={Review1} alt="Reviews"/>
                                                            </div>
                                                            <div className="author-name">
                                                                <h6>Bobby Aktar</h6>
                                                                <span>April 03, 2019</span>
                                                            </div>
                                                        </div>
                                                        <div className="reviews-description pt-20">
                                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                            <div className="rating">
                                                                <ul>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <span>/ 5 Star</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="singel-reviews">
                                                        <div className="reviews-author">
                                                            <div className="author-thum">
                                                                <img src={Review1}/>
                                                            </div>
                                                            <div className="author-name">
                                                                <h6>Humayun Ahmed</h6>
                                                                <span>April 13, 2019</span>
                                                            </div>
                                                        </div>
                                                        <div className="reviews-description pt-20">
                                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                            <div className="rating">
                                                                <ul>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <span>/ 5 Star</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="singel-reviews">
                                                        <div className="reviews-author">
                                                            <div className="author-thum">
                                                                <img src={Review1} alt="Reviews"/>
                                                            </div>
                                                            <div className="author-name">
                                                                <h6>Tania Aktar</h6>
                                                                <span>April 20, 2019</span>
                                                            </div>
                                                        </div>
                                                        <div className="reviews-description pt-20">
                                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                            <div className="rating">
                                                                <ul>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                    <li><i className="fa fa-star"></i></li>
                                                                </ul>
                                                                <span>/ 5 Star</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="title pt-15">
                                                <h6>Leave A Comment</h6>
                                            </div>
                                            <div className="reviews-form">
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-singel">
                                                                <input type="text" placeholder="Fast name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-singel">
                                                                <input type="text" placeholder="Last Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-singel">
                                                                <div className="rate-wrapper">
                                                                    <div className="rate-label">Your Rating:</div>
                                                                    <div className="rate">
                                                                        <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                                        <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                                        <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                                        <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                                        <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-singel">
                                                                <textarea placeholder="Comment"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-singel">
                                                                <button type="button" className="main-btn">Post Comment</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Teacher