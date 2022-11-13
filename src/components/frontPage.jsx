import pic from '../assests/photo.jpg';
import './my.css'
import git from '../assests/github.png';
import linkedin from '../assests/linkedin.png';
import download from '../assests/download.png';
import call from '../assests/call.png';
import whatsapp from '../assests/whatsapp.png';
import resume from '../assests/Srikrishna_MERN_6mon.pdf';

import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FrontPage() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.darkMode) setDarkMode(true);
        else setDarkMode(false)
    }, [localStorage.darkMode])

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        const json = JSON.stringify(darkMode);
        localStorage.setItem("site-dark-mode", json);
    }, [darkMode]);

    return (
        <> 

            <div className='container'>
                <div className="profilePic">
                    <img src={pic} id="myphoto" width="auto" height="300px" />
                </div>
                <div className="myInfo">
                    <h1>Hello, I'm <span style={{ color: "#345a6d" }}>Srikrishna</span></h1>
                    <h3>I'm a Full Stack Developer</h3>
                    <p><span style={{ color: "#345a6d", fontWeight: "bold" }}>Related Experience: </span>MERN (8 months)</p>
                    <p><span style={{ color: "#345a6d", fontWeight: "bold" }}>Earlier Experience: </span>WordPress(3+ years)</p>
                    <p><span style={{ color: "#345a6d", fontWeight: "bold" }}>Current Status: </span>Open to work (in India)</p>
                    <p><span style={{ color: "#345a6d", fontWeight: "bold" }}>Education: </span>MCA - 2018</p>
                    <a href="https://www.linkedin.com/in/srikrisna/" target='_blank'><img src={linkedin} id="myIcons" width="auto" height="30px" title='LinkedIn' /></a>
                    <a href="https://github.com/SRIKRISNA/" target='_blank'><img src={git} id="myIcons" width="auto" height="30px" title='Github' /></a>
                    <a href={resume} download><img src={download} alt="download resume" id="myIcons" width="auto" height="30px" title='Download Resume' /></a>
                    <a href="https://wa.me/9901437129" target='_blank'><img src={whatsapp} alt="WhatsApp Me" id="myIcons" width="auto" height="30px" title='WhatsApp' /></a>
                    <a href="tel:9901437129" target='_blank'><img src={call} alt="Call Me" id="myIcons" width="auto" height="30px" title='Connect me on a call' /></a>
                </div>

                {/* <div className="profilePic">
                    <img src={pic} id="myphoto" width="auto" height="200px" />
                </div> */}

            </div>
            <div>
                <button onClick={() => { setDarkMode(!darkMode) }} id='btnDark'>Dark / White Mode</button>
            </div>
        </>

    )
}
export default FrontPage