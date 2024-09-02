import React, { useState } from "react";
import image from './images/web-dev.png';
import { Link } from 'react-router-dom'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import musicplayer from './images/musicPlayer.png'
import weatherImg from './images/Weather.png'
import { HiOutlineExternalLink } from "react-icons/hi";

let Home = () => {
    const [popUp, setpopUp] = useState(false)
    const [popUpCross, setpopUpCross] = useState(false)
    const [mernstackPopup, setmernstackPopup] = useState(null)
    const handleMouseEnter = (popupType) => {
        setmernstackPopup(popupType);
    };

    const handleMouseLeave = () => {
        setmernstackPopup(null);
    };
    let ShowHide = () => { setpopUp(!popUp) }
    return (
        <>
            <div className="home">
                <div className="aboutMe">
                    <h1>Hi my name is <span className="Myname">SONU</span> I am a passionate Web developer</h1>
                </div>
                <img className="web-dev-img" src={image} />
                <button onClick={ShowHide} className="resumeBtn"><Link >About me</Link></button>
                {/* About me pop */}
                <div className={`popUp ${popUp ? 'show' : 'hide'}`} >
                    <div><RxCross2 onClick={ShowHide} className='popUpCross' />
                    </div>
                    <p>Hi! I'm Sonu, a front-end developer. Currently pursuing  BCA degree and now in my final year. and i work with </p>
                    <div className="technology">
                        <div className="tech_name">#HTML</div>
                        <div className="tech_name">#CSS</div>
                        <div className="tech_name">#Javascript</div>
                        <div className="tech_name">#Mongodb</div>
                        <div className="tech_name">#Experss.js</div>
                        <div className="tech_name">#React.js</div>
                        <div className="tech_name">#Node.js</div>
                        <div className="tech_name">#GIT</div>
                        <div className="tech_name">#GITHUB</div>
                        <div className="tech_name">#VSCODE</div>
                    </div>
                    <div className={`mernstack-popup mongodbpopup ${mernstackPopup === ('mongodb') ? 'show' : 'hide'}`}>
                        mongodb
                    </div>
                    <div className={`mernstack-popup expresspopup ${mernstackPopup === ('express') ? 'show' : 'hide'}`}>
                        Experss.js
                    </div>
                    <div className={`mernstack-popup reactpopup ${mernstackPopup === ('react') ? 'show' : 'hide'}`}>
                        React.js
                    </div>
                    <div className={`mernstack-popup nodepopup ${mernstackPopup === ('node') ? 'show' : 'hide'}`}>
                        Node.js
                    </div>
                    <div className="mernstackIcon">
                        <SiMongodb onMouseEnter={() => handleMouseEnter('mongodb')}
                            onMouseLeave={handleMouseLeave} />
                        <SiExpress onMouseEnter={() => handleMouseEnter('express')}
                            onMouseLeave={handleMouseLeave} />
                        <FaReact onMouseEnter={() => handleMouseEnter('react')}
                            onMouseLeave={handleMouseLeave} />
                        <RiNodejsLine onMouseEnter={() => handleMouseEnter('node')}
                            onMouseLeave={handleMouseLeave} />
                    </div>
                    <div className="mernstack">
                        <h2 className="alphabate mongodb">M</h2>
                        <h2 className="alphabate ">E</h2>
                        <h2 className="alphabate react">R</h2>
                        <h2 className="alphabate mongodb">N</h2>
                    </div>

                </div >
            </div>
            <div className="social-media">
                <div className="linkedin">
                    <Link to="https://www.linkedin.com/in/sonu-kumar-abb2082aa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_linkedin"><IoLogoLinkedin /></Link>
                </div>
                <div className="linkedin">
                    <Link to="https://www.instagram.com/sonukushwaha4788?igsh=amRodHhheGhuOHY2" target="_instagram"><FaInstagramSquare /></Link>
                </div>
                <div className="linkedin">
                    <Link to="https://github.com/sonuxkushwaha98" target="_github"><FaGithubSquare /></Link>
                </div>
                <div className="linkedin">
                    <Link to="/contact" ><MdMessage /></Link>
                </div>
                <div className="linkedin">
                    <Link to="mailto:sonuxkumar98@gmail.com" ><MdEmail /></Link>
                </div>
            </div>



            <div id="aboutPage">
                <div className="Aboutleft">
                    <div className="About">
                        <h1>About me</h1>
                        <div className="aboutContainer">
                            <h2></h2>
                            <p>Hi! I'm Sonu, a front-end developer. I work with HTML, CSS, JavaScript, and the MERN stack to create websites and web applications. I love turning ideas into user-friendly designs and making websites work smoothly.</p>
                        </div>
                        <div className="aboutContainer">
                            <p>Currently pursuing  BCA degree and I'm in my final year. I've been passionate about web development for the past 1.5 years. I started learning through YouTube and have been building my skills ever since..</p>
                        </div>
                        <div className="aboutContainer">
                            <p>I built this portfolio website using React.js to showcase my skills and projects. I've been learning web development through YouTube for 1.5 years and have expertise in HTML, CSS, JavaScript, and knowledge of the complete MERN stack. Currently, I'm in my final year of pursuing a BCA degree.</p>
                        </div>

                    </div>
                </div>
                <div className="Aboutright">
                    <div className="aboutRightContainer">
                        <h2>I have worked on several projects that showcase my skills and creativity</h2>
                        <div className="Aboutright-content">
                            <b>1. </b><p><b>Music player Website</b> I built a music player website using HTML, CSS, and JavaScript. This project involved creating a user-friendly interface, implementing audio controls, and managing playlists.</p>
                        </div>
                        <div className="MusicPlayer">
                            <img className="musicImg" src={musicplayer} />
                            <button className="btn"><Link to="/MusicPlayer">Music player <HiOutlineExternalLink /></Link></button>
                        </div>
                        <div className="Aboutright-content">
                            <b>2. </b><p><b>Weather Detector Website:</b>I developed a weather detector website that provides real-time weather information. This project utilized APIs to fetch data and display it in an intuitive and visually appealing manner. </p>
                        </div>
                        <div className="weather-website MusicPlayer">
                            <img className="musicImg" src={weatherImg} />
                            <button className="btn">
                                <Link to="/weather-website">Weather web app <HiOutlineExternalLink /></Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="line"></div>
                <div className="footer-content">
                    <p>Sonu kumar  &#169; 2024</p>
                </div>
                <div className="footer-socila-media">
                    <div className="footerSocialMediaContent">
                        <Link to="https://www.linkedin.com/in/sonu-kumar-abb2082aa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_linkedin"><IoLogoLinkedin /></Link>
                    </div>
                    <div className="footerSocialMediaContent">
                        <Link to="https://www.instagram.com/sonukushwaha4788?igsh=amRodHhheGhuOHY2" target="_instagram"><FaInstagramSquare /></Link>
                    </div>
                    <div className="footerSocialMediaContent">
                        <Link to="https://github.com/sonuxkushwaha98" target="_github"><FaGithubSquare /></Link>
                    </div>
                    <div className="footerSocialMediaContent">
                        <Link to="/contact" ><MdMessage /></Link>
                    </div>
                    <div className="footerSocialMediaContent">
                        <Link to="mailto:sonuxkumar98@gmail.com" ><MdEmail /></Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Home;