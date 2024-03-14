import React from "react";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const testimonial = importAll(require.context('../images/testimonial', false, /\.(png|jpe?g|svg)$/));


const Testimonial = () => {
    return (
        <section id="testimonial" className="bg_cover pt-115 pb-115" data-overlay="8" style={{backgroundImage: 'url(images/bg-2.jpg)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title pb-40">
                            <h5>Testimonial</h5>
                            <h2>What they say</h2>
                        </div>
                    </div>
                </div>
                <div className="row testimonial-slied mt-40">
                    <div className="col-lg-6">
                        <div className="singel-testimonial">
                            <div className="testimonial-thum">
                                <img src={testimonial['t-1.jpg']} alt="Testimonial" />
                                <div className="quote">
                                    <i className="fa fa-quote-right"></i>
                                </div>
                            </div>
                            <div className="testimonial-cont">
                                <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                                <h6>Rubina Helen</h6>
                                <span>Bsc, Engineering</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="singel-testimonial">
                            <div className="testimonial-thum">
                                <img src={testimonial['t-2.jpg']} alt="Testimonial" />
                                <div className="quote">
                                    <i className="fa fa-quote-right"></i>
                                </div>
                            </div>
                            <div className="testimonial-cont">
                                <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                                <h6>Rubina Helen</h6>
                                <span>Bsc, Engineering</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="singel-testimonial">
                            <div className="testimonial-thum">
                                <img src={testimonial['t-3.jpg']} alt="Testimonial" />
                                <div className="quote">
                                    <i className="fa fa-quote-right"></i>
                                </div>
                            </div>
                            <div className="testimonial-cont">
                                <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                                <h6>Rubina Helen</h6>
                                <span>Bsc, Engineering</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial