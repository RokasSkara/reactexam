import Logo from '../../images/Capture.PNG'
import './menu.css'

import AddLink from '../link/link'


const Menu = ({ links }) => {
    return (
        <header>
            <div>
                <img src={Logo} alt="Logo" height="60px" />
            </div>
            <div className='MenuLinks'>
                {links ? links.map((link, i) => <AddLink props={link} key={i} />) : ''}
            </div>
        </header >
    );
}

export default Menu;