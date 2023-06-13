import oil from '../assests/projects/beyondOil.png';
import img2 from '../assests/projects/2.png';
import img3 from '../assests/projects/3.png';
import redux from '../assests/projects/redux.png';
import './my.css';

function Projects() {
    return (
        <div>
            <nav className='sidebar'>
                <header>
                    <h2 style={{ margin: "0px", paddingBottom: "5px" }}>-- MY PROJECTS --</h2>
                </header>
                <div className="allprojects">
                    <div className="projects-inner">

                        <div className="project">
                            <p style={{ padding: "0", margin: "20px 0 0 0" }}>Insta Clone (MERN)</p>
                            <a href='https://iinstafront.netlify.app/' rel='noopener noreferrer'> <img src={img3} className="proj_img" alt="portfolio" width="280px"></img></a>
                        </div>
                        <div className="project">
                            <p style={{ padding: "0", margin: "20px 0 0 0" }}>Ecommerce Cart (React & Redux)</p>
                            <a href='https://reduxcart-p8tj.onrender.com/' rel='noopener noreferrer'><img src={redux} className="proj_img" alt="portfolio" width="280px"></img></a>
                        </div>
                        <div className="project">
                            <p style={{ padding: "0", margin: "20px 0 0 0" }}>Movies API (React)</p>
                            <a href='https://srikrisna.github.io/display_movies/' rel='noopener noreferrer'><img src={img2} className="proj_img" alt="portfolio" width="280px"></img></a>
                        </div>
                        <div className="project">
                            <p style={{ padding: "0", margin: "20px 0 0 0" }}>Ecommerce (MERN)</p>
                            <a href='beyondoil'><img src={oil} className="proj_img" alt="portfolio" width="280px"></img></a>
                        </div>
                    </div>
                </div>
                <footer style={{ padding: "8px 0 20px 0" }}><strong>Note:</strong> Individually Developed</footer>
            </nav>
        </div>
    )
}
export default Projects;