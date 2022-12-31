import oil from '../assests/projects/beyondOil.png';
import img2 from '../assests/projects/2.png';
import img3 from '../assests/projects/3.png';

function Projects() {
    return (
        <div>
            <div><h2 style={{margin:"10px 0 0 0"}}>-- MY PROJECTS --</h2>
                <a href='beyondoil'><img src={oil} className="proj_img" alt="portfolio" width="280px"></img></a>
                <a href='https://instacloneclient.herokuapp.com/' rel='noopener noreferrer'> <img src={img3} className="proj_img" alt="portfolio" width="280px"></img></a>
                <a href='http://movies.allwebsites.in/' rel='noopener noreferrer'><img src={img2} className="proj_img" alt="portfolio" width="280px"></img></a>
            </div>
        </div>
    )
}
export default Projects;