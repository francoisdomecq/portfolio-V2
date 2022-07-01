import './Home.css';
import { useEffect, useState, Fragment } from 'react';

import Header from '../../components/Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Name from '../../components/Home_Name/Name';

function Home() {
    const [x, setX] = useState();
    const [y, setY] = useState();
    useEffect(() => {
        const update = (e) => {
            setX(e.x);
            setY(e.y);
        };
        window.addEventListener('mousemove', update);
        window.addEventListener('touchmove', update);
        return () => {
            window.removeEventListener('mousemove', update);
            window.removeEventListener('touchmove', update);
        };
    }, [setX, setY]);
    return (
        <div style={{ height: '400vh' }}>
            <div className="Home" id="Home">
                {/* {console.log(x, y)} */}
                <Name />

                <div className="ContainerDescription">
                    <p>I am a french </p>
                </div>
            </div>
            <AboutMe />
        </div>
    );
}

export default Home;
