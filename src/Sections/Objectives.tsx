import ObjectiveCard from "../Components/ObjectiveCard";
import './Objectives.css'

function Objectives(){
    return(
        <section id="objectives" className="objectives">
            <h2 className="objectivesHeading">Club Objectives</h2>
            <div className="objectiveCards">
                <ObjectiveCard
                    title="Skills Development"
                    description="We help students develop their programming skills and fundamentals through hands-on activities and workshops."
                    imageURL="src\assets\workshop.jpg">
                </ObjectiveCard>

                <ObjectiveCard
                    title="Skills Development"
                    description="We help students develop their programming skills and fundamentals through hands-on activities and workshops."
                    imageURL="src\assets\workshop.jpg">
                </ObjectiveCard>

                <ObjectiveCard
                    title="Skills Development"
                    description="We help students develop their programming skills and fundamentals through hands-on activities and workshops."
                    imageURL="src\assets\workshop.jpg">
                </ObjectiveCard>
            </div>
        </section>
    )
}

export default Objectives;