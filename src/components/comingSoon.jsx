// import soon from '../assests/projects/3.png';
import oil from '../assests/logo.png';

function ComingSoon() {

    return (
        <div className="soonBg">
            <img src={oil} className="soon_img" style={{marginTop:"100px"}} alt="Coming-Soon" height="100px" ></img>
            <h1 style={{marginTop:"50px", fontSize:"75px"}}>Coming Soon</h1>
            <p>This is my dream project, so working on every module with care. Will launch it soon...!</p>
        </div>
    )
}
export default ComingSoon;