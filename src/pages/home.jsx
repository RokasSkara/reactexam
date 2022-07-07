import Menu from '../components/menu/menu'

const HomeMenuProps=['Home','Add']


const Home = () => {
    return (<>
        <Menu links={HomeMenuProps} />
    </>);
}

export default Home;