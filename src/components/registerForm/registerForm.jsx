const RegisterForm = () => {
    const RegisterForm = (e) => {
        e.preventDefault()
        const login = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        console.log(login)
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login),
        })
            .then(response => response.json())
            .then(data => console.log(data))

    }


    return (
    <form onSubmit={RegisterForm}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password"/>
        <input type="submit" value={"Register"} />
    </form>
    );
}

export default RegisterForm;