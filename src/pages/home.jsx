import Menu from '../components/menu/menu'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import SkillCard from '../components/SkillCard/skillCard';
import PageFooter from '../components/footer/footer';


const Home = () => {
    const redirect = useNavigate();

    const AuthToken = localStorage.getItem('token')

    const [SkillsData, setSkillsData] = useState([])

    useEffect(() => {
        if (AuthToken === null) {
            redirect('/Login')
        } else {
            fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${AuthToken}`
                }
            })
                .then(res => res.json())
                .then(Skills => {setSkillsData(Skills)})
                .catch(err => { return alert(err) })
        }

    }, [AuthToken])

    return (<>
        <Menu/>
        <main className='SkillCardTab'>
            {SkillsData.length !==0 ? SkillsData.map(skill => <SkillCard props={skill} key={skill.id} />) : <h4>No skills added yet</h4>}
        </main>
        <PageFooter />
    </>);
}

export default Home;