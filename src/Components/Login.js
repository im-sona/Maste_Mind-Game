import "./Login.css";
import { useNavigate } from 'react-router-dom';
import Imageplay from "./Imageplay";
import { useState } from "react";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        user: "",
        password: ""
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submit = (e) => {
        e.preventDefault();
        const sendData = {
            user: data.user,
            password: data.password
        };

        axios.post('http://localhost/login.php', sendData).then((result) => {
            if (result.data.status === 'invalid') {
                alert(result.data.error);
            } else {
                localStorage.setItem('user', result.data.user);
                navigate('/home');
            }
        }).catch(error => {
            console.error('There was an error!', error);
        });
    }

    return (
        <div className="main">
            <div className="row">
                <div className="bor1 col-6">
                    <h1 className="style text-center">LOGIN HERE</h1>
                    <form className="userform" onSubmit={submit}>
                        <label htmlFor="name">USER NAME:</label><br />
                        <input type="text" className="user w-50 border border-dark" name='user' onChange={handleChange} value={data.user} /><br /><br />
                        <label htmlFor='password'>PASSWORD:</label><br />
                        <input type="password" className="password w-50 border border-dark" name='password' onChange={handleChange} value={data.password} />
                        <br /><br />
                        <button type="submit" className="link rounded-pill rounded-3" >SUBMIT</button>
                    </form>
                    <br /><br /><br /><br /><br /><br /><br />
                </div>
                <div className="bor col-6">
                    <Imageplay />
                </div>
            </div>
        </div>
    );
}

export default Login;