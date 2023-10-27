import AboutSection from "./AboutSection/AboutSection";
import Apply from "./Apply/Apply";
import Eligiblity from "./Eligibility/Eligiblity";
import HeroSection from "./HeroSection/HeroSection";
import WhyUs from "./WhyUs/WhyUs";
import './HomePage.css';

const HomePage = () => {

    return (
        <main>
            <HeroSection />
            <AboutSection />
            <WhyUs />
            <Eligiblity />
            <Apply />
            <section id="join">
                <div className="join-wrapper">
                    <div>
                        <h1>Join Now</h1>
                        <p>Join Internship Program and Launch Your Career!</p>
                    </div>
                    <p id='join-description'>
                        At <span>Curate Intern</span>, we believe in nurturing the leaders of tomorrow. Join our internship program
                        and gain the experience, skills, and connections you need to succeed in your chosen field.
                        We can't wait to welcome you to our team and support your journey towards a bright and fulfilling
                        career.Ready to take the first step? Apply today and start your exciting internship experience
                        at <span>Curate Intern.!!!</span>
                    </p>
                </div>
            </section>
        </main>
    );
}
export default HomePage;