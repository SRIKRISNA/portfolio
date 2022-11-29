import img1 from '../assests/projects/1.png';
import img2 from '../assests/projects/2.png';
import img3 from '../assests/projects/3.png';

function Projects() {
    return (
        <div>
            <div><h2 style={{margin:"10px 0 0 0"}}>-- MY PROJECTS --</h2>
                <a href='#'><img src={img1} className="proj_img" alt="portfolio" width="280px"></img></a>
                <a href='https://instacloneclient.herokuapp.com/'> <img src={img3} className="proj_img" alt="portfolio" width="280px"></img></a>
                <a href='#'><img src={img2} className="proj_img" alt="portfolio" width="280px"></img></a>
            </div>
        </div>
    )
}
export default Projects;