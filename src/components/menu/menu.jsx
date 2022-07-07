import Logo from '../../images/Capture.PNG'
import './menu.css'

import AddLink from '../link/link'


const Menu = ({ links }) => {
    console.log(links)
    return (
        <header>
            <div>
                <img src={Logo} alt="Logo" height="100px" />
            </div>
            <div>
                {links ? links.map((link,i) => <AddLink props={link} key={i} />) : ''}
            </div>
        </header>
    );
}

export default Menu;