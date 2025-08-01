import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgProfile } from "react-icons/cg";
import { FaArrowAltCircleRight } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import {Link} from 'react-router-dom';
function Homes() {
   return (
    <div>
    <div className='row'>
    <div className='col-lg-3'>
      {/* <div className=''>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Spin />} /> 
            
            <Route path='/home' element={<Home />} />
            <Route path='/game' element={<Game />} />
            <Route path='/master' element={<Mastermind  level="medium"  />} />
          </Routes>
        </BrowserRouter>
      </div> */}
      <h5 className='px-5 fw-bold pt-3 d-flex align-items-center gap-2'>
  
    <CgProfile className='text-primary' size={23} />
 
 <span className='text-white'> Sona</span> <span className='text-primary'> IM</span>

</h5>
</div>
<div className='col-lg-5 pt-1 ps-5 d-grid gap-3 fw-bold'>
  <nav class="nav">
   <a class="nav-link text-white" href="/">Home</a> 
  <Link class="nav-link text-white" to='/about'>About</Link>
   <a class="nav-link text-white" href="/skill">Skill</a>
  <a class="nav-link text-white" href="/project">Projects</a>
  <a class="nav-link text-white" href="/contact">Contact</a>

</nav>
</div>
<div className='col-lg-1 '>

</div>
<div className='col-lg-3 ps-5 pt-1'>
 <nav class="nav">
  <span className='text-primary' ><FaArrowAltCircleRight/></span>  <a className="btn btn-outline-primary bg-primary text-white ms-2 pt-1" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
 </nav>
 </div>
 </div>
 <div className='row'>
  <div className='col-lg-6 text-white'>
    <div className='s'>
      <h4 className=''> <span className='text-primary'>Hello ,</span> It's Me</h4>
     <h1>Sona IM</h1>
     <h5>And I'm a <span className='text-primary'>Full Stack Intern(Former)</span> </h5>
     <h6>Highly motivated and detail-oriented Full Stack Developer with a passion for building robust and scalable web applications.
Proven ability in developing both frontend (React, JavaScript, HTML, CSS, Bootstrap) and backend (Java, Java Servlets)
solutions. Eager to leverage strong problem-solving skills and a collaborative approach to deliver high-quality results in
dynamic development environments.</h6>
        <input type='button' value="Hire Me" className='i1 text-white mt-5 rounded border-primary bg-primary fs-5 px-5 ' ></input>
         <input type='button' value="Contact Me" className='i2 text-white mt-5 rounded border-primary bg-primary fs-5 px-5  '></input>
         <div className='mt-3 fs-4'><a href='https://www.linkedin.com/in/sona-im-1b4877265/'  className='a1' > <FaLinkedin/></a>
         <a href='https://github.com/sonaim3054' className='a2'> <FaGithub/></a>
         <a href='mailto:sonaim72595@gmail.com' className='a2'> <IoMail/></a>
         </div>
    </div>
    
  </div>
  <div className='col-lg-6'>
    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="rounded-circle border-white w-50 pe-5 pt-5 mt-5 me-5" alt="..."/>
  </div>
  </div>
 </div>



 

  );
}

export default Homes
