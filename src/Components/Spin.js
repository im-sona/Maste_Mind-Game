import { useEffect, useState } from "react";
import Login from "./Login";
import "./Spin.css";
import 'animate.css';

function Spin(){
    const [text,setText]=useState('')
    const [showImg,setshowImg]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setshowImg(false)
            setText(
                <Login/>
            )
        },5000)
    },[])
    return(
        <>
        <div>
            {
                showImg ?(
                    <div className="qu">

                    <h1 className="hh animate__animated animate__zoomIn">BOOST YOUR MEMORY</h1>
                    </div>
                ):<h3>{text}</h3>
            }
        </div>
        </>
    )
}
export default Spin;