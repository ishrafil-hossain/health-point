import React from 'react';
import img from './Ishrafil.jpg';

const About = () => {
    return (
        <div>
            {/* developer information  */}
            <h2 className="text-center text-info mt-5">Developer info</h2>
            <div>
                <div class="card mb-3">
                    <div class="row g-0 ms-5">
                        <div class="col-md-4">
                            <img src={img} className="w-75 img-fluid rounded-start border rounded-3 shadow p-3 mb-5 bg-body" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h4>Md Ishrafil Hossain</h4>
                                <h5>BSc. in CSE</h5>
                                <small>fULL Stack Developer</small>
                                <p>Description : I am a self motivated, career focus, Software Engineer.I feel comfortable doing challenging work and I try to learn from my mistakes.
                                    I have participated two times in International Collegiate Programming Contest(ICPS)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* constact and message  */}
            <div className="d-flex justify-content-around bg-info text-dark text-center p-5 mt-3">
                <div className="border rounded-3 shadow p-3 mb-5 bg-body">
                    <h2>CONTACT INFO</h2>
                    <p>Welcome to my Website. I am glad to have you around.</p>
                    <h4>E-mail</h4>
                    <samp>ishrafil2233@gmail.com</samp>
                </div>
                <div className="border rounded-3 shadow p-3 mb-5 bg-body">
                    <h2>SEND A MESSAGE</h2>
                    <p>Your email address will not be published. Required fields are marked.</p>

                    <div>
                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Please enter your name*" />
                            </div>
                            <br />
                            <div class="form-group">

                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Please enter your email*" />
                            </div>
                            <br />
                            <div class="form-group">

                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Please enter your massage*" ></textarea>
                            </div>
                            <div className="mt-3">
                                <button type="button" className="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;