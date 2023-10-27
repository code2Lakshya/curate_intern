import { LazyLoadImage } from 'react-lazy-load-image-component';
import './HeroSection.css';
import imgsrc from '../../../assets/heroImage.jpg'
import 'react-lazy-load-image-component/src/effects/blur.css';

const HeroSection = () => {

    return (
        <section id='home'>
            <div className="hero-section">
                <div id='hero-left'>
                    <h1>Curate Intern</h1>
                    <p>Unlocking Your Potential, One Internship at a Time</p>
                </div>
                <div id='hero-right'>
                <LazyLoadImage src={imgsrc} alt='hero' effect='blur' />
                </div>
            </div>
        </section>
    );
}
export default HeroSection;