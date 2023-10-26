import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import { Link } from 'react-router-dom';
import DropDown from '../dropdown/DropDown';


const Navbar = () => {

    const [navList, setNavList] = useState(false);

    return (
        <header>
            <nav>

                <h1><Link to='/'>Curate</Link></h1>

                <ul className={navList ? 'active' : ''}>
                    <li><HashLink to='#home' smooth>Home</HashLink></li>

                    <li>
                        <DropDown heading='about' values={[ 'values','mission', 'impact']}></DropDown>
                    </li>

                    <li><HashLink to='#whyus' smooth>Why Us?</HashLink></li>

                    <li><HashLink to='#eligibility' smooth>Eligibilty</HashLink></li>

                    <li><HashLink to='#apply' smooth>Apply</HashLink></li>

                    <li onClick={() => setNavList(false)} id='close-menu'><AiOutlineClose /></li>
                </ul>

                <span onClick={() => setNavList(true)} id='open-menu'><AiOutlineMenu /></span>
            </nav>
        </header>
    );
}
export default Navbar;