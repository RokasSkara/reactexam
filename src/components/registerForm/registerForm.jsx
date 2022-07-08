import { useNavigate} from 'react-router-dom'

const RegisterForm = () => {
    const redirect = useNavigate()

    const RegisterForm = (e) => {
        e.preventDefault()
        const login = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        e.target.elements.email.value = ''
        e.target.elements.password.value = ''
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login),
        })
            .then(response => response.json())
            .then(data => {
                if (data.changes !== 1) return alert('Email or password is not valid')
                else {
                    // eslint-disable-next-line no-unused-expressions
                    data.changes === 1 ? alert('Registration succesfull, you will be redirected to Login window soon'): '';
                    setTimeout(() => redirect('/login'), 1000)
                };
            })
            .catch(err => {return alert(err)})

    }

    return (
    <form onSubmit={RegisterForm}>
        <h1>Register</h1>
        <label htmlFor="email">Email</label>
        <input type="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password"/>
        <input type="submit" value={"Register"} />
    </form>
    );
}

export default RegisterForm;