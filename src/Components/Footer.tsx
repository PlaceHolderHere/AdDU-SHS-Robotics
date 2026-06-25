import './Footer.css';
import InstaLogo from '../svgLogos/instagram';
import FacebookLogo from '../svgLogos/facebook';
import EmailLogo from '../svgLogos/email';

function Footer(){
    return(
        <footer>
            <a href="#home" className="footer-brand">
                <img className="footer-logo" src="/addu-shs-robotics.svg" alt="Ateneo Robotics Club Logo"/>
                <h3>Ateneo Robotics Club</h3>
            </a>
            
            <div className='contacts'>
                <h3>Contact Us!</h3>
                <div className='links'>
                    <a 
                        href="https://www.facebook.com/profile.php?id=61552247483076"
                        className='contact_link'
                        target="_blank">
                        <FacebookLogo
                            logoWidth={32}
                            logoHeight={32}>
                        </FacebookLogo>
                        <p>Ateneo Robotics Club </p>
                    </a>

                    <a 
                        href="https://www.instagram.com/robotics.addushs/" 
                        target="_blank"
                        className='contact_link'>
                        <InstaLogo
                            logoWidth={32}
                            logoHeight={32}>
                        </InstaLogo>
                        <p>robotics.addushs</p>
                    </a>

                    <a 
                        href="mailto:shs.roboticsclub@addu.edu.ph"
                        target="_blank"
                        className='contact_link'>
                        <EmailLogo
                            logoWidth={32}
                            logoHeight={32}>
                        </EmailLogo>
                        <p>shs.roboticsclub@addu.edu.ph</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;