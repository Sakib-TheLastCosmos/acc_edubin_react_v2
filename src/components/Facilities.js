import React from "react";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const all_icon = importAll(require.context('../images/all-icon', false, /\.(png|jpe?g|svg)$/));


const Facilities = () => {
    return (
        <section id="video-feature" className="bg_cover pt-60 pb-110" style={{ backgroundImage: 'url(images/bg-1.jpg)' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-last order-lg-first">
                        <div className="video text-lg-left text-center pt-50">
                            <a className="Video-popup" href="https://www.youtube.com/watch?v=B_-unRExEGQ"><i className="fa fa-play"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 order-first order-lg-last">
                        <div className="feature pt-50">
                            <div className="feature-title">
                                <h3>Our Facilities</h3>
                            </div>
                            <ul>
                                <li>
                                    <div className="singel-feature">
                                        <div className="icon">
                                            <img src={all_icon['f-1.png']} alt="icon" />
                                        </div>
                                        <div className="cont">
                                            <h4>Global Certificate</h4>
                                            <p>Gravida nibh vel velit auctor aliquetn auci elit cons solliazcitudirem sem quibibendum sem nibhutis.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="singel-feature">
                                        <div className="icon">
                                            <img src={all_icon['f-2.png']} alt="icon" />
                                        </div>
                                        <div className="cont">
                                            <h4>Alumni Support</h4>
                                            <p>Gravida nibh vel velit auctor aliquetn auci elit cons solliazcitudirem sem quibibendum sem nibhutis.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="singel-feature">
                                        <div className="icon">
                                            <img src={all_icon['f-3.png']} alt="icon" />
                                        </div>
                                        <div className="cont">
                                            <h4>Books & Library</h4>
                                            <p>Gravida nibh vel velit auctor aliquetn auci elit cons solliazcitudirem sem quibibendum sem nibhutis.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature-bg"></div>
        </section>
    )
}

export default Facilities