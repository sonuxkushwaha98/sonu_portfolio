import React from "react";
import musicplayer from './images/musicPlayer.png'
import weatherImg from './images/Weather.png'
import { Link } from 'react-router-dom';
import { HiOutlineExternalLink } from "react-icons/hi";
let about = () => {
    return (
        <>
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
                            <button className="btn"><Link to="/MusicPlayer">Music player <HiOutlineExternalLink/></Link></button>
                        </div>
                        <div className="Aboutright-content">
                            <b>2. </b><p><b>Weather Detector Website:</b>I developed a weather detector website that provides real-time weather information. This project utilized APIs to fetch data and display it in an intuitive and visually appealing manner. </p>
                        </div>
                        <div className="weather-website MusicPlayer">
                            <img className="musicImg" src={weatherImg} />
                            <button className="btn">
                                <Link to="/weather-website">Weather web app <HiOutlineExternalLink/></Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default about;