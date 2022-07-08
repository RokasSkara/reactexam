import { useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

/* Handles logout by clearing token fom local storage */

const Logout = () => {
    const redirect = useNavigate();
    localStorage.clear()

    useEffect( () => {
        redirect('/Login')
    })

    return ( <>
        <h4>Logging out</h4>
        
    </> );
}
 
export default Logout;