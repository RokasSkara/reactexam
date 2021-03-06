import { useNavigate } from 'react-router-dom'

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
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login),
        })
            .then(response => response.json())
            .then(data => {
                if (data.err) {
                    return alert(data.err)
                }
                else {
                    localStorage.setItem('token', data.token)
                    redirect('/Home')
                }
            })
            .catch(err => { return alert(err) })

    }

    return (
        <form onSubmit={LoginForm}>
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" minLength={8} title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required  />
            <input type="submit" value={"Login"} />
        </form>
    );
}

export default LoginForm;