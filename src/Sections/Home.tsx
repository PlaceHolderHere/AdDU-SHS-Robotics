import Button from "../Components/Button"
import "./Home.css"

function Home(){
    return(
        <section id="home" className="home">
            <img 
                className="home-logo" 
                src="/addu-shs-robotics.svg" 
                alt="Ateneo Robotics Logo"
                id="nav-trigger"
            />
            <h1 className="home-title">Ateneo Robotics Club</h1>
            <Button text="Learn more->" hrefLink="#about"/>
        </section>
    )
}

export default Home