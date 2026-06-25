import './AboutUs.css'
import aboutPhoto from '../assets/about-us-1.jpg'

function AboutUs(){
    return(
        <section className="about" id="about">
            <h2 className="about-title">About Us</h2>
            <div className="aboutGrid">
                <div className='imageSection'>
                    <img 
                        className="about-photo" 
                        src={aboutPhoto}
                        alt="About Us"
                    />
                </div>
                <div className='about-description'>
                    <h3 className='about-sub-title'>The Official Robotics Club of AdDU-SHS</h3>
                    <p>Known as ARC (Ateneo Robotics Club), we strive to inspire students to explore the world of robotics, engineering, programming, and automation through hands-on projects, workshops, competitions, and collaborative learning experiences. We aim to develop innovative thinkers, problem-solvers, and future technology leaders while fostering creativity, teamwork, and a passion for building solutions that make a difference.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;