import { Link } from 'react-router-dom';



const AddLink = ({props}) => {
    return ( 
        <div>
            <Link to={`/${props}`}><button className='menuBarButtonLink'>{props}</button></Link>
        </div>
     );
}
 
export default AddLink;