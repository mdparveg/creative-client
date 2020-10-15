import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <section className="footer_contianer">
            <div style={{ height: '550px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1>Let us handle your <br /> project, professionally.</h1>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6">
                    <div className="input-group mb-2">
                        <input type="text" className="form-control" placeholder="Your email address" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-2">
                        <input type="text" className="form-control" placeholder="Your name / company’s name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        
                    </div>


                    <div className="input-group footer_text">
                        <div className="input-group-prepend">
                            <span className="input-group-text">With textarea</span>
                        </div>
                        <textarea placeholder="Your message" className="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <button className="mt-2 btn btn-brand text-white px-5">Send</button>
                </div>
            </div>
            <footer>
              <small className="text-center">	&#169; copyright Parveg 2020</small>
            </footer>
        </section>
    );
};

export default Footer;