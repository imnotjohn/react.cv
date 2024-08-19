import '../styles/ExperienceSection.css';

export default function ExperienceSection() {
    return (
        <div className="wrapper">
            <div className="sectionTitle">experience</div>
            <div className="experienceSection">
                <ul><span><strong>Harvard University - Senior Teaching Fellow, Cambridge, MA, </strong>September 2023 – January 2024</span>
                    <li>
                        <span className="experienceDetail">Senior Teaching Fellow for a graduate-level seminar course 
                        for graduate students at Harvard. The course focuses on building an integrated intellectual 
                        framework to explore the complex relationships between science, engineering, manufacturing, design, 
                        innovation, environment, sustainability, culture, aesthetics, business, and public policy.
                        </span>
                    </li>
                </ul>
                <ul><span><strong>Harvard Business School - Research Assistant, Cambridge, MA, </strong>July 2022 – September 2023</span>
                    <li>
                        <span className="experienceDetail">Developed research strategy and implementation for computation pipeline to aggregate, clean, and process large 
                        datasets collected from the YouTube API to infer behavioral insights into consumer behavior. 
                        Leveraged data science methods and OpenAI API to explore data and perform sentiment analysis.
                        </span>
                    </li>
                </ul>
                <ul><span><strong>Facebook - Frontend Engineer [CW], Menlo Park, CA, </strong>December 2020 – July 2021</span>
                    <li>
                        <span className="experienceDetail">Work with various internal stakeholders and large teams to 
                        develop functional, responsive desktop + mobile experiences from mockups and wireframes. 
                        Develop tooling and scalable components to anticipate and accelerate development of public-facing websites.
                        </span>
                    </li>
                </ul>
                <ul><span><strong>Renault-Nissan Innovation Lab - UX Researcher / Design Engineer, Sunnyvale, CA, </strong>March 2019 – May 2020</span>
                    <li>
                        <span className="experienceDetail">
                        Led development of in-vehicle interactive prototypes for multiple end-user scenarios.  Co-developed user testing and validation protocols to 
                        better understand the nature of social interactions, user needs, and concept exploration within future driverless mobility contexts.
                        </span>
                    </li>
                    <li>
                        <span className="experienceDetail">
                        Led the collaboration with researchers, engineers, and designers from multiple internal teams to develop features of a future mobility dispatch platform. Led analysis and visualization of 
                        urban traffic data for a project with a European municipality.
                        </span>
                    </li>
                </ul>
                <ul><span><strong>Renault-Nissan Innovation Lab - Interaction Design Engineer, Sunnyvale, CA, </strong>January 2018 – March 2019</span>
                    <li>
                        <span className="experienceDetail">Led design of custom hardware and system integration 
                        and development of an immersive, mediated in-vehicle testing platform that enabled 
                        exploration of novel experiences and media of future mobility concepts; managed projection mapping and real-time collection of 
                        vehicle telemetry through TouchDesigner and Python.
                        </span>
                    </li>
                    <li>
                        <span className="experienceDetail">Consulted and mentored student teams at UC Berkeley and Stanford’s CDR 
                        (Center for Design Research); led hardware integration and system development for immersive mobility contexts; 
                        co-developed qualitative and quantitative data visualization and analysis of social interaction studies within 
                        simulated driverless vehicles.
                        </span>
                    </li>
                    <li>
                        <span className="experienceDetail">Conducted user research and interviews across neighborhoods in San Francisco 
                        to better understand public perception and social acceptance of driverless vehicle testing and technologies.
                        </span>
                    </li>
                </ul>
                <ul><span><strong>Design Incubation Centre - Interaction Designer, Singapore, </strong>October 2015 – March 2017</span>
                    <li>
                        <span className="experienceDetail">
                        Led development of a 7-week course for Industrial Design students to establish foundations in typography and visual information hierarchy.
                        </span>
                    </li>
                    <li>
                        <span className="experienceDetail">
                        Co-led the design and execution of an immersive projection mapping installation as part of Singapore’s 
                        Night Festival exhibition. Oversaw the strategy, planning, and execution of design research and student 
                        projects.
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
