import Menu from '../components/menu/menu'
import LoginForm from '../components/loginForm/loginForm';
import PageFooter from '../components/footer/footer';

const LoginMenuProps = ['Login ', 'Register ']

const Login = () => {
    return (
        <>
            <Menu links={LoginMenuProps} />
            <LoginForm />
            <PageFooter />
        </>
    );
}

export default Login;