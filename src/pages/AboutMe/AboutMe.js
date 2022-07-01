import logo from '../../logo.svg';
import './AboutMe.css';
import PhotoFR from '../../assets/PhotoFR.jpg';
function AboutMe() {
    return (
        <div className="BackgroundAboutMe " id="AboutMe">
            <div className="Container">
                <div className="ContainerAbout">
                    <p>Francois</p>
                </div>
                <div className="ContainerPic">
                    <img
                        className="ProfilePic"
                        src={PhotoFR}
                        alt="Francois Domecq"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
