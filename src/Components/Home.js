import './Home.css';
import {Link} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
//import 'animate.css';
function Home(){
    const [user, setUser] = useState('');

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(user);
        }
    }, []);
    return(
        <div className='bo'>
        <div className="home">
            <div className=''>
            <h1 className=' wel text-center text-white  moving-text'>{user?`HII WELCOME ${user}`:'Loading....'}👩</h1></div>
            <div className="home1 row">
                <div className="col-6">
                        <Link to="/game" className='link1'> Picture Matching Game</Link>
                </div>
                <div className="col-6">
                <Link to="/master" className='link1'>Master Mind Game</Link>
                </div>
                
            </div>
            </div>
        </div>
    )  
}
export default Home;