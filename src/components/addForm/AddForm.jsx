const AddForm = () => {
    const AuthToken = localStorage.getItem('token')
    const AddFormEvent = (e) => {
        e.preventDefault()
        const skill = {
            title: e.target.elements.title.value,
            description: e.target.elements.description.value
        }

        fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${AuthToken}`
            },
            body: JSON.stringify(skill),
        })
            .then(res => res.json())
            .then(Skills => {
                e.target.elements.title.value = ''
                e.target.elements.description.value = ''
                alert(Skills.msg)
            })
            .catch(err => {return alert(err)})
    }

    return (<>
        <form onSubmit={AddFormEvent}>
            <h1>Add Skill</h1>
            <label htmlFor="title">Skill Title</label>
            <input type="text" name="title" />
            <label htmlFor="description">Description</label>
            <textarea name="description" id="" cols="30" rows="10"></textarea>
            <input type="submit" value={"Post Skill"} />
        </form>

    </>);
}

export default AddForm;