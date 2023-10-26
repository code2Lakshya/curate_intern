import { whyus } from "../../../utils/variables";
import './WhyUs.css';

const WhyUs = () => {

    return (
        <section id='whyus'>
            <div className="wrapper">
                <div className="whyus-heading">
                    <h1>Why Us ?</h1>
                    <p>Why Choose Curate Intern Internship Program?</p>
                </div>
                <div className="whyus-cards">
                    {
                        whyus.map((item, index) => <div className={`whyus-card card${index}`} key={index}>
                            <h3>{item.heading}</h3>
                            <p>{item.desc}</p>
                            <button>Know More</button>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
}
export default WhyUs;