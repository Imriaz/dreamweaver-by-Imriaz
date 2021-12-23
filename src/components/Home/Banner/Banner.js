import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-3 banner-left p-5">
                    <h6 className="text-white text-left">Website Add-ons</h6>
                    <p className='text-left'>Check out our easy to integrate Web Site Add-ons!</p>
                    <br />
                    <div class="form-check mx-5">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
                        <label class="form-check-label text-left" for="flexCheckIndeterminate">
                            Smart Survey
                        </label>
                        <br />
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
                        <label class="form-check-label" for="flexCheckIndeterminate">
                            Smart Multi Poll
                        </label>
                        <br />
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
                        <label class="form-check-label" for="flexCheckIndeterminate">
                            Smart Poll
                        </label>
                        <br />
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
                        <label class="form-check-label" for="flexCheckIndeterminate">
                            Smart Guest Book
                        </label>
                        <br />
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
                        <label class="form-check-label" for="flexCheckIndeterminate">
                            Smart Quote
                        </label>

                    </div>
                </div>
                <div className="col-md-9 p-5">
                    <h2 className="banner-titleText text-left">Features of this CSS Personal/General Template</h2>
                    <br />
                    <p className='text-left'>◆ Attractive general or personal web site design using bright colors</p>
                    <p className='text-left'>◆ Optimized, fast-loading and W3C certified valid CSS & HTML code</p>
                    <p className='text-left'>◆ Easy-to-edit Text Links with easy-to-use Drop-down-Menus</p>
                    <p className='text-left'>◆ Tableless layout CSS design.All <span className="fw-bold"> 11 </span> linked HTML pages included</p>
                    <p className='text-left'>◆ Cross Browser Compatible - <span className="banner-text">Tested for IE 5+, Netscape 6+, Opera 7+, Firefox 1.0+</span></p>
                    <p className='text-left'>◆ Designed to stretch and fit all resolutions(800*600 and higher)</p>
                    <br />
                    <p className='text-left'> <span className="banner-text">Buy Now</span>  for only <span className="fw-bold">$59.95</span>! <span className="banner-link-text"> Add to Cart</span></p>
                    <br />
                    <p className='text-left'>Smart Webby offers professional web templates at affordable prices. Choose from a variety of high quality website designs to find the perfect template for your line of business. <span className="link-text">More Template from SmartWebby.com </span></p>
                </div>
            </div>
        </section>
    );
};

export default Banner;