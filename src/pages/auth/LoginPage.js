
import React from 'react'
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";
import { registerLogin } from '../../api';
import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  // const history = useHistory();
  const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [inCorrect, setIncorreact] = useState(false);

    const [status, setStatus] = useState('');
    const navigateToOtherPage = () => {
      // Use the history object to navigate to the other page
      // history.push('/');
      window.location.href = '/';
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  
      try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password );
  
        const result = await registerLogin(formData);
        console.log(result);
        if(result.status){
          window.location.href = '/landing-page';
          // navigate = '/landing-page';
        }else {
          setIncorreact(true);
          console.log(inCorrect);
        }
        setStatus(result);
      } catch (error) {
        setIncorreact(true);
        console.log(inCorrect);
        console.error('Error registering user:', error);
        setStatus('Error registering user.');
      }
    };
  return (
    <div>
        <form className="login-form" onSubmit={handleSubmit}>
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {inCorrect == true ? <><p style={{color:"red"}}>Email or Password not match</p></> : <></>}

                <div className="d-flex justify-content-between align-items-center">
                    {/* <!-- Checkbox --> */}
                    {/* <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                    </label>
                    </div> */}
                    {/* <Link to="/reset-password" className="text-body">Forgot password?</Link> */}
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
                    {/* <button type="submit" className="btn btn-primary btn-lg"><Link to="/landing-page">Login</Link></button> */}
                    {/* <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                        className="link-danger">Register</a></p> */}
                </div>
            </form>
    </div>
  )
}

export default authLayout(LoginPage);