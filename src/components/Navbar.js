import React from 'react'
import { Navlink, Link, To } from 'react-router-dom'


const Navbar = () => {
    return (
        <header id="header-part">

            <div className="header-top d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-contact text-lg-left text-center">
                                <ul>
                                    <li><img src="images/all-icon/map.png" alt="icon" /><span>127/5 Mark street, New york</span></li>
                                    <li><img src="images/all-icon/email.png" alt="icon" /><span>info@yourmail.com</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header-opening-time text-lg-right text-center">
                                <p>Opening Hours : Monday to Saturay - 8 Am to 5 Pm</p>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div> 

            <div className="header-logo-support pt-30 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="logo">
                                <Link to='/' className='logo_cont'>
                                    <img src="images/logo.png" alt="Logo"/>
                                    <h5>Adamjee Cantonment College</h5>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className="support-button float-right d-none d-md-block">
                                <div className="support float-left">
                                    <div className="icon">
                                        <img src="images/all-icon/support.png" alt="icon" />
                                    </div>
                                    <div className="cont">
                                        <p>Need Help? call us free</p>
                                        <span>321 325 5678</span>
                                    </div>
                                </div>
                                <div className="button float-left">
                                    <a href="#" className="main-btn">Online admission</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 

            <div className="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-9 col-8">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>

                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <Link to='/' className="active">Home</Link>
                                        </li>

                                        <li className="nav-item">
                                            <a href="courses.html">At a glance</a>
                                            <ul className="sub-menu">
                                                <li><a href="courses.html">Courses</a></li>
                                                <li><a href="courses-singel.html">Course Singel</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a href="courses.html">Academics</a>
                                            <ul className="sub-menu">
                                                <li><a href="courses.html">Courses</a></li>
                                                <li><a href="courses-singel.html">Course Singel</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="events.html">Admission</a>
                                            <ul className="sub-menu">
                                                <li><a href="events.html">Events</a></li>
                                                <li><a href="events-singel.html">Event Singel</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="teachers.html">Administration</a>
                                            <ul className="sub-menu">
                                                <li><a href="teachers.html">teachers</a></li>
                                                <li><a href="teachers-singel.html">teacher Singel</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="blog.html">Events</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-singel.html">Blog Singel</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="shop.html">Gallery</a>
                                            <ul className="sub-menu">
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="shop-singel.html">Shop Singel</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a href="about.html">Library</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="contact.html">Contact</a>
                                            <ul className="sub-menu">
                                                <li><a href="contact.html">Contact Us</a></li>
                                                <li><a href="contact-2.html">Contact Us 2</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-4">
                            <div className="right-icon text-right">
                                <ul>
                                    <li><a href="#" id="search"><i className="fa fa-search"></i></a></li>
                                </ul>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>


            <div className="search-box">
                <div className="serach-form">
                    <div className="closebtn">
                        <span></span>
                        <span></span>
                    </div>
                    <form action="#">
                        <input type="text" placeholder="Search by keyword" />
                            <button><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>

        </header>
    )
}

export default Navbar