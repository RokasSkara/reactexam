import Menu from '../components/menu/menu'
import RegisterForm from '../components/registerForm/registerForm';

const RegisterMenuProps = ['Login', 'Register']

const Register = () => {
    return (
        <>
            <Menu links={RegisterMenuProps} />
            <RegisterForm />
        </>
    );
}

export default Register;