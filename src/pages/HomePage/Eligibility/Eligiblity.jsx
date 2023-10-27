import { LazyLoadImage } from 'react-lazy-load-image-component';
import { internContent } from '../../../utils/variables';
import './Eligibility.css';
import imgsrc from '../../../assets/eligibility.jpeg';

const Eligiblity = () => {
    return (
        <section id='eligibility'>
            <div className='wrapper'>
                <div className='eligibility-top'>
                    <div className='eligibility-image'>
                        <LazyLoadImage src={imgsrc} alt='eligibility' effect='blur' />
                    </div>
                    <div className='header-container'>
                        <div className='header'>
                            <h1>Eligibility</h1>
                            <p>What We Look For in Our Interns</p>
                        </div>
                        <ul className='content'>
                            {
                                internContent.map((item, index) => <li key={index}>
                                    <span>{item.heading}:</span>
                                    {item.desc}
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
                <p>
                    Join Curate Intern  for an Unforgettable Internship Experience
                    We're excited to invite you to join our internship program at Curate Intern.
                    If you're looking to learn, grow, and launch your career in a supportive and innovative
                    environment, you're in the right place. Explore our available internship opportunities
                    and embark on a journey that will shape your future.
                    Ready to take the first step? Apply now and become a part of the Curate Intern family,
                    where your potential meets endless possibilities.
                </p>
            </div>
        </section>
    )
}

export default Eligiblity;