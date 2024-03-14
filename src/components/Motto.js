import React from "react";
import '../index.css'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const all_icon = importAll(require.context('../images/all-icon', false, /\.(png|jpe?g|svg)$/));

const Motto = () => {
    return (
        <section id="category-part">
            <div className="container">
                <div className="category pt-40 pb-80">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="category-text pt-40">
                                <h2>Best platform to learn everything</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
                            <div className="row category-slied mt-40">
                                <div className="col-lg-4">
                                    <a href="#">
                                        <span className="singel-category text-center color-1">
                                            <span className="icon">
                                                <img src={all_icon['ctg-1.png']} alt="Icon" />
                                            </span>
                                            <span className="align_center cont">
                                                <span className="align_center">Education</span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="#">
                                        <span className="singel-category text-center color-2">
                                            <span className="icon">
                                                <img src={all_icon['ctg-2.png']} alt="Icon" />
                                            </span>
                                            <span className="align_center cont">
                                                <span className="align_center">Discipline</span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="#">
                                        <span className="singel-category text-center color-3">
                                            <span className="icon">
                                                <img src={all_icon['ctg-3.png']} alt="Icon" />
                                            </span>
                                            <span className="align_center cont">
                                                <span className="align_center">Morality</span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="#">
                                        <span className="singel-category text-center color-1">
                                            <span className="icon">
                                                <img src={all_icon['ctg-1.png']} alt="Icon" />
                                            </span>
                                            <span className="align_center cont">
                                                <span className="align_center">Language</span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="#">
                                        <span className="singel-category text-center color-2">
                                            <span className="icon">
                                                <img src={all_icon['ctg-2.png']} alt="Icon" />
                                            </span>
                                            <span className="align_center cont">
                                                <span className="align_center">Business</span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="#">
                                        <span className="singel-category text-center color-3">
                                            <span className="icon">
                                                <img src={all_icon['ctg-3.png']} alt="Icon" />
                                            </span>
                                            <span className="align_center cont">
                                                <span className="align_center">Literature</span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Motto