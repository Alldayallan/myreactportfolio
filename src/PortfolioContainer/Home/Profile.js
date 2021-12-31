import React from 'react';
import Typical from 'react-typical';

function Profile(props) {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='https://www.facebook.com/'>
                            <i className='fab fa-facebook-f'></i>
                        </a>
                        <a href='https://twitter.com/coding_always'>
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a href='#'>
                            <i className='fab fa-youtube-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fab fa-linkedin-in'></i>
                        </a>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Allan</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity} 
                                steps={[
                                    "Technical Recruiting",
                                    1000,
                                    "Sourcing",
                                    1000,
                                    "Management",
                                    1000,
                                    "Software Development",
                                    1000,
                                ]}
                                />   
                            </h1>
                            <span className='profile-role-tagline'>
                                Closing rare talent that isn't ready to move is an art! 
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href='Allan_Reid_22.pdf' download='Allan Allan_Reid_22.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;