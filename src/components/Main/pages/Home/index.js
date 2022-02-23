import React from 'react'
import skyline from '../../../../resources/AtlantaSkyline.png';

const Home = () => {
    return (
        <div>
            <img src={skyline} alt='Atlanta Skyline' className='responsive-img-skyline' />
            <div className='row'>
                <div className='col s12 m6'>
                    <div className='card blue-grey darken-1'>
                        <div className="card-content white-text">
                            <span className="card-title">Our Story</span>
                            <p>Atlanta Brews was launched in the Spring of 2021 by two guys
                                who saw the richness of the Atlanta Brewery scene, but had no
                                way of planning all their visits. With a little effort, they
                                began cataloging every brewery in the greater Atlanta area, with the
                                hope of one day trying them all. We hope you find this page as useful
                                as we have. </p>
                        </div>
                    </div>
                </div>
                <div className='col s12 m6'>
                    <div className='row'>
                        <div className='col s12'>
                            <div className='card blue-grey darken-1'>
                                <div className="card-content white-text">
                                    <span className="card-title">Join Our Mailing List!</span>
                                    <p>Please email brewsatlanta@gmail.com to get updates from our site.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col s12'>
                            <div className='card blue-grey darken-1'>
                                <div className="card-content white-text">
                                    <span className="card-title">Contact Us</span>
                                    <p>Question or comment? Email brewsatlanta@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;