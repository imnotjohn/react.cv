import '../styles/HeaderSection.css';

export default function HeaderSection() {
    return (
        <div className="wrapper">
            <div className="spacer"></div>
            <div className="headerSection">
                <span className="headerTitle">Jonathan Chinen</span>
                <span className="headerDetail">
                    <a href='mailto:jchinen@mde.harvard.edu'>jchinen@mde.harvard.edu</a>
                </span>
                <span className="headerDetail">
                    <a href="https://imnotjohn.io" target="_blank">https://imnotjohn.io</a>
                </span>
                <span className="headerDetail">
                    Cambridge, MA, USA
                </span>
            </div>
        </div>
    )
}
