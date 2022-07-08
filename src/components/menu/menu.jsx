import Logo from '../../images/Capture.PNG'
import './menu.css'

import AddLink from '../link/link'

const LoggedLinks = ['Home', 'Add','Logout']
const StartingLinks = ['Login', 'Register']

const Menu = () => {
    const AuthToken = localStorage.getItem('token')
    return (
        <header>
            <div>
                <img src={Logo} alt="Logo" height="60px" />
            </div>
            <div className='MenuLinks'>
                {AuthToken ? <>
                    {LoggedLinks.map((link, i) => <AddLink props={link} key={i} />)}
                </> : <>
                    {StartingLinks.map((link, i) => <AddLink props={link} key={i} />)}
                </>}
            </div>
        </header >
    );
}

export default Menu;