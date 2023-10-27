import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Apply.css';
import src from '../../../assets/apply.jpg';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Apply = () => {
    return (
        <section id='apply'>
            <div className="apply-wrapper">
                <h1>How to Apply</h1>
                <div className='apply-content'>
                    <div>
                        <p>
                            Ready to embark on this incredible journey? To apply for our internship program, follow these steps:
                        </p>
                        <ul>
                            <li><span>Step 1:</span>Visit our careers page and search for available internship opportunities.</li>
                            <li><span>Step 2:</span>Submit your resume and cover letter.</li>
                            <li><span>Step 3:</span>If your qualifications align with our requirements, you'll be invited for an interview.</li>
                            <li><span>Step 4:</span>Successful candidates will receive an offer to join our internship program.</li>
                        </ul>
                    </div>
                    <LazyLoadImage src={src} alt='apply' effect='blur'/>
                </div>
            </div>
        </section>
    );
}
export default Apply;