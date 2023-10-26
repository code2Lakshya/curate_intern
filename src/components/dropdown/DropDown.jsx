import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HashLink } from 'react-router-hash-link';
import './DropDown.css';

const DropDown = ({ heading, values, url }) => {

    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="dropdown" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            <p>
                <HashLink to={`#${heading}`} smooth>
                    {heading}
                    <span><IoMdArrowDropdown /></span>
                </HashLink>
            </p>
            {
                dropdown &&
                <div className='dropdown-list'>
                    {
                        values.map((item, index) => <p key={index}>
                            <HashLink to={url ? `${url}#${item}` : `#${item}`} smooth>{item}</HashLink>
                        </p>)
                    }
                </div>
            }
        </div>
    );
}
export default DropDown;