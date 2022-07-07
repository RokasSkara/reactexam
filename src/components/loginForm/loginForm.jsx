import { useNavigate} from 'react-router-dom'

const LoginForm = () => {
    const redirect = useNavigate()

    const LoginForm = (e) => {
        e.preventDefault()
        const login = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        e.target.elements.email.value = ''
        e.target.elements.password.value = ''
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login),
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('token', data.token)
                redirect('/Home')
            })
            .catch(err => {return alert(err)})

    }

    return (
        <form onSubmit={LoginForm}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={"Testas1@Test.com"} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={"Test1234!"} />
            <input type="submit" value={"Login"} />
        </form>
    );
}

export default LoginForm;