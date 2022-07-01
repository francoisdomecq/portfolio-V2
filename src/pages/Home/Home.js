import './Home.css';
import Header from '../../components/Header/Header';
import AboutMe from '../AboutMe/AboutMe';

function Home() {
    return (
        <div style={{ height: '400vh' }}>
            <div className="Home">
                <Header />
            </div>
            <AboutMe />
        </div>
    );
}

export default Home;
