import Menu from '../components/menu/menu'
import LoginForm from '../components/loginForm/loginForm';

const LoginMenuProps = ['Login ', 'Register ']

const Login = () => {
    return (
        <>
            <Menu links={LoginMenuProps} />
            <LoginForm />
        </>
    );
}

export default Login;