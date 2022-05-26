import React from 'react'

const Footer = () => {
    return (
        <footer className="footer py-5">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-4 col-md-2">
                        <h5 className='text-light'>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">Home</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">Features</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">Pricing</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">FAQs</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">About</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-4 col-md-2">
                        <h5 className='text-light'>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">Home</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">Features</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">Pricing</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">FAQs</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">About</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-4 col-md-2">
                        <h5 className='text-light'>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">Home</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">Features</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">Pricing</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">FAQs</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-light">About</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 offset-md-0 offset-lg-2">
                        <form>
                            <h5 className='text-light'>Subscribe to our newsletter</h5>
                            <div className="d-flex w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-md-flex d-block justify-content-between py-4 my-4 border-top text-light">
                    <p>© 2021 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex justify-content-md-end justify-content-center">
                        <li className="ms-3">
                            <a className="link-light" href="#">
                                <i className='fa fa-2x fa-twitter'></i>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-light" href="#">
                                <i className='fa fa-2x fa-instagram'></i>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-light" href="#">
                                <i className='fa fa-2x fa-facebook'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
