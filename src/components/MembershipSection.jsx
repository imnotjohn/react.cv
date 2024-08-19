import '../styles/MembershipSection.css';

export default function MembershipSection() {
    return (
        <div className="wrapper">
            <div className="sectionTitle">memberships</div>
            <div className="membershipSection">
                <span><strong>Harvard Indigenous Design Collective, </strong>2022 – 2024</span><br />
                <span><strong>Harvard Circular Economy - Web Developer, </strong>2021 – 2022</span><br />
                <span><strong>EPIC (Ethnographic Praxis in Industry Conference) - Member, </strong>2018 – 2020</span><br />
                <ul className="membership"><span><strong>Phi Theta Kappa Honor Society - Alpha Kappa Psi Member, </strong>2011 – Present</span><br />
                    <li>Engaged the community through an outreach program to increase awareness of Hawai‘i’s Meth problem.</li>
                </ul>
                <ul className="membership"><span><strong>Pi Tau Sigma Mechanical Engineering Honor Society - Vice President, </strong>2012 – Present</span><br />
                    <li>Co-led coordination of Pi Tau Sigma events and new member recruitment.</li>
                    <li>Presented funding proposals to campus organizations, securing a 250% increase in funding.</li>
                </ul>
                <ul className="membership"><span><strong>Society of Women Engineers - Fundraising and Event Chair, </strong>2013 – 2014</span><br />
                    <li>Co-organized outreach event for freshman girls from under-represented communities; provided 
                        mentoring of engineering projects; developed activities for STEM recruitment still used by the SWE chapter today.
                    </li>
                </ul>
                <ul className="membership"><span><strong>Native Hawaiian Science and Engineering Mentorship Program, </strong>2012 — 2013</span><br />
                    <li>Particpated in multiple community workdays within Native Hawaiian organizations, thus increasing the reach of
                    Indigenous knowledge, language, and practices.</li>
                    <li>Tutored fellow NHSEMP Scholars in Physics, Thermodynamics, and Fluid Dynamics.</li>
                </ul>
                <ul><span><strong>Engineer’s Council at the University of Hawaii - Vice President of Communications, </strong>2022 – Present</span><br />
                    <li>Facilitated communication between College of Engineering Administration and undergraduate student
                    improve organization visibility, and bolster morale and pride within COE student community.</li>
                    <li>Co-led planning of events; led COE community engagement efforts to support STEM recruitment.</li>
                </ul>
            </div>
        </div>
    )
}
