import ObjectiveCard from "../Components/ObjectiveCard";
import './Objectives.css'

// Photos
import talentPhoto from '../assets/talent-development.jpg';
import collaborationPhoto from '../assets/collaboration.jpg';
import innovationPhoto from '../assets/innovate-and-automate.jpg'
import funPhoto from '../assets/fun.jpg';

function Objectives(){
    return(
        <section id="objectives" className="objectives">
            <h2 className="objectivesHeading">Club Objectives</h2>
            <div className="objectiveCards">
                <ObjectiveCard
                    title="Talent Development"
                    description="We help students develop their talents in robotics, programming, engineering, and problem-solving through hands-on projects, workshops, and competitions"
                    image={talentPhoto}>
                </ObjectiveCard>

                <ObjectiveCard
                    title="Promote Collaboration"
                    description="We strive to create an inclusive and supportive environment where members can work together, share ideas, and learn from one another while building innovative solutions."
                    image={collaborationPhoto}>
                </ObjectiveCard>

                <ObjectiveCard
                    title="Innovate and Automate"
                    description="We encourage members to think creatively and apply technology to design innovative projects and automated systems that solve real-world problems and improve everyday processes."
                    image={innovationPhoto}>
                </ObjectiveCard>

                <ObjectiveCard
                    title="Have Fun"
                    description="We want our members to enjoy learning, experimenting, and creating with technology while fostering curiosity and passion for robotics and innovation."
                    image={funPhoto}>
                </ObjectiveCard>
            </div>
        </section>
    )
}

export default Objectives;