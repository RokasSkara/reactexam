import Menu from '../components/menu/menu'
import AddForm from '../components/addForm/AddForm';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import PageFooter from '../components/footer/footer';


const Add = () => {
    const redirect = useNavigate();
    const AuthToken = localStorage.getItem('token')

    useEffect(() => {
        if (AuthToken === null) {
            redirect('/Login')
        }
    })

    return (
        <>
            {AuthToken ?
                <><main>
                    <Menu />
                    <AddForm />
                    <PageFooter />
                </main> </>
                : <h4>Redirrecting ...</h4>}
        </>

    );
}

export default Add;
