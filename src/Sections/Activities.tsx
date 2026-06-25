import ActivityCard from "../Components/ActivityCard";
import './Activities.css';

// Photos
import workshopPhoto from '../assets/workshop.jpg';
import cyberknightsPhoto from '../assets/cyberknights.jpg';
import commengPhoto from "../assets/commeng.jpg";
import competitionsPhoto from '../assets/competitions.jpg'

function Activities(){
    return(
        <section className="activities" id='activities'>
            <h2>Activities</h2>
            <ActivityCard
                title="Workshops"
                description="Led by experienced mentors, professionals, and members of the Ateneo community, our workshops provide students with opportunities to explore robotics, programming, electronics, automation, and engineering through hands-on learning experiences. By working on real-world projects and interactive activities, members develop technical skills, strengthen problem-solving abilities, and gain valuable exposure to the fields of robotics and technology while collaborating with peers and learning from those with industry and academic experience."
                image={workshopPhoto}>
            </ActivityCard>

            <ActivityCard
                title="Cyberknights Arcade"
                description="During the Christ the King Festival (CTK), the Ateneo Robotics Club collaborates with other student organizations to set up an arcade booth where students, parents, and visitors can relax, play games, and enjoy the festivities. Through a combination of entertaining activities, friendly competition, and interactive technology-based experiences, the booth provides a fun and engaging space that brings the school community together while showcasing creativity, collaboration, and innovation."
                image={cyberknightsPhoto}>
            </ActivityCard>

            <ActivityCard
                title="Competitions"
                description="The Ateneo Robotics Club actively participates in robotics, programming, and technology competitions to challenge members, develop their technical skills, and apply their knowledge in competitive environments. In addition to joining external events such as RoboLution, organized by EROVOUTIKA, the club also hosts its own school-based competitions and challenges that encourage innovation, teamwork, and problem-solving among students. These events provide valuable opportunities for members to showcase their talents, gain experience, and foster a culture of excellence and continuous learning within the school community."
                image={competitionsPhoto}>
            </ActivityCard>

            <ActivityCard
                title="Community Engangements"
                description="Through our community engagement initiatives, members have the opportunity to visit, assist, and interact with various communities and organizations. These activities allow students to give back to society through meaningful service projects such as outreach programs, educational activities, environmental initiatives, and other volunteer efforts. By participating in these engagements, members develop compassion, social responsibility, and a deeper understanding of the importance of serving others while making a positive impact in the community."
                image={commengPhoto}>
            </ActivityCard>
        </section>
    )
}

export default Activities;