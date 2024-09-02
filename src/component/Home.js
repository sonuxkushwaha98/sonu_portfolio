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


let Home = () => {
    const [popUp, setpopUp] = useState(false)
    const [popUpCross, setpopUpCross] = useState(false)
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
                    <span>#HTML</span>
                    <span>#CSS</span>
                    <span>#Javascript</span>
                    <span>#MERNSTACK</span>
                    </div>
                    <div className="mernstackIcon">
                        <SiMongodb/>
                        <SiExpress/>
                        <FaReact/>
                        <RiNodejsLine/>
                    </div>
                    <div className="mernstack">
                        <span>M</span>
                        <span>E</span>
                        <span>R</span>
                        <span>N</span>
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
            </div>

        </>
    )
}
export default Home;