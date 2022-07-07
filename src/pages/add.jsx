import Menu from '../components/menu/menu'
import AddForm from '../components/addForm/AddForm';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


const Add = () => {
    const redirect = useNavigate();
    const AuthToken = localStorage.getItem('token')
    console.log(AuthToken)

    useEffect(() => {
        if(AuthToken === null){
            redirect('/Login')
        }
    })

    return (
        <>
            {AuthToken ?
                <><main>
                    <Menu />
                    <AddForm />
                </main> </>
                : <h4>Redirrecting ...</h4>}
        </>

    );
}

export default Add;
