import './AboutUs.css'

function AboutUs(){
    return(
        <section className="about" id="about">
            <h2>About Us</h2>
            <div className="aboutGrid">
                <div className='imageSection'>
                    <img 
                        className="about-photo" 
                        src="src/assets/workshop.jpg" 
                        alt=""
                    />
                </div>
                <div className='description'>
                    <h3>Title here</h3>
                    <p>Placeholder description: Led by experienced professionals, these workshops provide the opportunity for students to learn from professional experience and gain knowledge about the industry. Hands-on and real time projects allow students to further develop their technical skills and gain experience exposure to the tech industry under the guidance of professionals.</p>
                </div>

                <div className='description'>
                    <h3>Title here</h3>
                    <p>Placeholder description: Led by experienced professionals, these workshops provide the opportunity for students to learn from professional experience and gain knowledge about the industry. Hands-on and real time projects allow students to further develop their technical skills and gain experience exposure to the tech industry under the guidance of professionals.</p>
                </div>
                <div className='imageSection'>
                    <img 
                        className="about-photo" 
                        src="src/assets/workshop.jpg" 
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutUs;