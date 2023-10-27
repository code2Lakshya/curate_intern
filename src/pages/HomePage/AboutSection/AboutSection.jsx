import { LazyLoadImage } from 'react-lazy-load-image-component';
import './AboutSection.css';
import aboutImg from '../../../assets/about.jpeg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import valuesImg from '../../../assets/values.jpg';
import missionImg from '../../../assets/mission.jpg';
import impactImg from '../../../assets/impact.avif';

const AboutSection = () => {



    return (
        <div className='about'>
            <div className="about-cards">

                <section id='about' className="about-card">
                    <div className='about-right'>
                        <span></span>
                        <LazyLoadImage src={aboutImg} alt='about' effect='blur' />
                    </div>
                    <div className='about-left'>
                        <h1>About Us</h1>
                        <p>
                            At Curate Intern, we believe in the power of innovation, the strength of collaboration,
                            and the potential of the next generation. Our internship program is a testament to our
                            commitment to fostering young talent and providing them with an opportunity to grow and
                            thrive in their chosen fields. Here's a glimpse into who we are:
                        </p>
                        <button>Learn More</button>
                    </div>
                </section>

                <section id='values' className='about-card'>
                    <h1>Our Values</h1>
                    <div className='values-content'>
                        <div className="value-cards left">
                            <div className='value-card'>
                                <h1>Excellence</h1>
                                <p>
                                    We strive for excellence in everything we do. Our commitment to quality and innovation is
                                    the driving force behind our success.
                                </p>
                            </div>
                            <div className='value-card'>
                                <h1>Diversity and Inclusion</h1>
                                <p>
                                    We embrace diversity and believe that it is at the core of creativity and innovation.
                                    We welcome individuals from all backgrounds and foster an inclusive environment where
                                    everyone's voice is heard and valued.
                                </p>
                            </div>
                        </div>

                        <div className='center'>
                            <LazyLoadImage src={valuesImg} alt='values' effect='blur' />
                        </div>

                        <div className='value-cards right'>
                            <div className='value-card'>
                                <h1>Integrity</h1>
                                <p>
                                    Trust and integrity are the foundation of our relationships with both our employees
                                    and our clients. We operate with the highest ethical standards.
                                </p>
                            </div>
                            <div className='value-card'>
                                <h1>Continuous Learning</h1>
                                <p>
                                    We believe that learning never stops. Our commitment to growth extends to our interns,
                                    employees, and the community. We encourage continuous learning and development.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='mission' className="about-card">
                    <div className='about-right'>
                        <span></span>
                        <LazyLoadImage src={missionImg} alt='about' effect='blur' />
                    </div>
                    <div className='about-left'>
                        <h1>Our Mission</h1>
                        <p>
                            Our mission is to provide students and recent graduates with an unparalleled opportunity
                            to gain hands-on experience, develop their skills, and embark on a fulfilling career
                            journey. We are dedicated to nurturing the leaders of tomorrow by offering a dynamic and
                            supportive environment that encourages growth and learning.
                        </p>
                    </div>
                </section>
            </div>
            <section id='impact'>
                <div className='impact-wrapper'>
                    <div>
                        <h1>Our Impact</h1>
                        <p>
                            Over the years, Curate Intern has made a significant impact in the industry.
                            We've been at the forefront of innovation, pioneering new technologies, and finding
                            solutions to complex challenges. Our interns have played a crucial role in our success,
                            bringing fresh perspectives, ideas, and energy to our projects.
                        </p>
                    </div>
                    <LazyLoadImage src={impactImg} alt='impact' effect='blur' />
                </div>
            </section>
        </div>
    );
}
export default AboutSection;