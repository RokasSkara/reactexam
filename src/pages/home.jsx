import Menu from '../components/menu/menu'
import { useEffect, useState } from 'react';

import SkillCard from '../components/SkillCard/skillCard';

const HomeMenuProps = ['Login', 'Register']



const Home = () => {

    const AuthToken = localStorage.getItem('token')

    const [SkillsData, setSkillsData] = useState()

    useEffect(() => {
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${AuthToken}`
            }
        })
            .then(res => res.json())
            .then(Skills => {
                console.log(Skills)
                setSkillsData(Skills)
                
            })
            .catch(err => {return alert(err)})
    }, [AuthToken])

    return (<>
        <Menu links={HomeMenuProps} />
        {AuthToken ?
            <main className='SkillCardTab'>
                {SkillsData ? SkillsData.map(skill => <SkillCard props={skill} key={skill.id} />) : <h4>Loading ...</h4>}
            </main>
            : <h4>No skill sets posted yet</h4>
        }
    </>);
}

export default Home;