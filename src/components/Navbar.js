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
                                    <li><img src="images/all-icon/map.png" alt="icon" /><span>Dhaka Cantonment, Dhaka-1206</span></li>
                                    <li><img src="images/all-icon/email.png" alt="icon" /><span>info@acc.edu.bd</span></li>
                                </ul>
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
                                        <span>880-2-8872446</span>
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
                                                <li><a href="courses.html">Welcome Note</a></li>
                                                <li><a href="courses-singel.html">About Us</a></li>
                                                <li><a href="courses-singel.html">Why Study in Adamjee</a></li>
                                                <li><a href="courses-singel.html">Vision & Mission</a></li>
                                                <li><a href="courses-singel.html">Principal's Message</a></li>
                                                <li><a href="courses-singel.html">Governing Body</a></li>
                                                <li><a href="courses-singel.html">Curriculum</a></li>
                                                <li><a href="courses-singel.html">The Beautiful Campus</a></li>
                                                <li><a href="courses-singel.html">Maps and Direction</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a href="courses.html">Academics</a>
                                            <ul className="sub-menu">
                                            <li><a href="https://acc.edu.bd/organizational-division/">Organizational Division</a></li>
                                            <li><a href="https://acc.edu.bd/rules-regulation-2/">Rules &amp; Regulation</a></li>
                                            <li><a href="https://acc.edu.bd/teaching-method/">Teaching Method</a></li>
                                            <li><a href="https://acc.edu.bd/teachers-training/">Teacher’s Training</a></li>
                                            <li><a href="https://acc.edu.bd/student-support/">Student Support</a></li>
                                            <li><a href="https://acc.edu.bd/scholarship/">Scholarship</a></li>
                                            <li><a href="https://acc.edu.bd/result/">Result</a></li>
                                            <li><a href="https://acc.edu.bd/co-curricular-activities/">Co-curricular Activities</a></li>
                                            <li><a href="https://acc.edu.bd/facilities/">Facilities</a></li>
                                            <li><a href="https://acc.edu.bd/wall-magazines/">Wall Magazines</a></li>
                                            <li><a href="https://acc.edu.bd/faculties-and-staffs/">Faculties and Staffs</a></li>
                                            <li><a href="https://acc.edu.bd/prospectus-syllabus/">Prospectus &amp; Syllabus</a></li>
                                            <li><a href="https://acc.edu.bd/academic-reformation/">Academic Reformation</a></li>
                                            <li><a href="https://acc.edu.bd/webpages-of-all-departments/">Webpages of All Departments</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="events.html">Admission</a>
                                            <ul className="sub-menu">
                                            <li id="menu-item-1462" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1462"><a href="https://acc.edu.bd/https-acc-edu-bd-wp-content-uploads-2022-01-beggopti-hsc-admission_website-pdfadmission-notice/">Admission Notice</a></li>
                                            <li id="menu-item-554" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-554"><a href="https://acc.edu.bd/undergraduatehsc/">Undergraduate/HSC</a></li>
                                            <li id="menu-item-555" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-555"><a href="https://acc.edu.bd/graduate-honours/">Graduate/ Honours</a></li>
                                            <li id="menu-item-556" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-556"><a href="https://acc.edu.bd/post-graduatema/">Post Graduate/MA</a></li>
                                            <li id="menu-item-557" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-557"><a href="https://acc.edu.bd/bba/">BBA</a></li>
                                            <li id="menu-item-558" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-558"><a href="https://acc.edu.bd/fee-payment-procedure/">Fee Payment Procedure</a></li>
                                            <li id="menu-item-559" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-559"><a href="https://acc.edu.bd/a-guide-for-future-prospects/">A guide for future prospects</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="teachers.html">Administration</a>
                                            <ul className="sub-menu">
                                            <li id="menu-item-605" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-605"><a href="https://acc.edu.bd/calendar/">Calendar</a></li>
                                            <li id="menu-item-606" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-606"><a href="https://acc.edu.bd/time/">Time</a></li>
                                            <li id="menu-item-618" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-618"><a href="https://acc.edu.bd/https-acc-edu-bd-wp-content-uploads-2022-02-advertisement-pdf/">Jobs &amp; Vacancies</a></li>
                                            <li id="menu-item-609" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-609"><a href="https://acc.edu.bd/notice/">Notice</a></li>
                                            <li id="menu-item-608" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-608"><a href="https://acc.edu.bd/https-acc-edu-bd-wp-content-uploads-2022-04-mob-no-teachers-pdf/">Teacher’s Information</a></li>
                                            <li id="menu-item-610" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-610"><a href="https://acc.edu.bd/https-acc-edu-bd-wp-content-uploads-2022-04-mob-no-admin-pers-1st-2nd-3rd-4th-class-pdf/">Officer’s &amp; Staff’s Information</a></li>
                                            <li id="menu-item-611" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-611"><a href="https://acc.edu.bd/student-statistics/">Student Statistics</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="blog.html">Events</a>
                                            <ul className="sub-menu">
                                            <li><a>Clubs</a></li>
                                            <li id="menu-item-667" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-667"><a href="https://acc.edu.bd/study-tour/">Study Tour</a></li>
                                            <li id="menu-item-672" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-672"><a href="https://acc.edu.bd/google-pilot-project/">Google Pilot Project</a></li>
                                            <li id="menu-item-668" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-668"><a href="https://acc.edu.bd/celebration-of-national-days/">Celebration of National Days</a></li>
                                            <li id="menu-item-669" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-669"><a href="https://acc.edu.bd/research-and-publications/">Research and publications</a></li>
                                            <li id="menu-item-670" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-670"><a href="https://acc.edu.bd/online-magazine/">Magazine</a></li>
                                            <li id="menu-item-671" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-671"><a href="https://acc.edu.bd/sports-2/">Sports</a></li>
                                            <li id="menu-item-674" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-674"><a href="https://acc.edu.bd/cultural-activities/">Cultural Activities</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="shop.html">Gallery</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="about.html">Library</a>
                                        </li>

                                        <li className="nav-item">
                                            <a href="contact.html">Contact</a>
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