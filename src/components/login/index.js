import React from 'react'
import { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import login1 from '../../img/login1.svg'
// import { useHistory } from "react-router-dom";
// import { useLocation } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
import CapgeminiLogo from '../../img/capgemini.png'
// import { TextField } from '@material-ui/core'
// import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './app.css'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { useFormik } from 'formik';
// import * as yup from 'yup';


function LoginBefore() {
    const history = useHistory();

    const routeChange = () => {
        let path
        if (pmo) {
            path = `./pmolist`;
        }
        else {
            path = `./reqlist`;
        }
        history.push(path);
        // location.pathname = path
        console.log(history)
    }

    const [rerr, setrErr] = useState({
        email: false,
        password: false
    });
    const [perr, setpErr] = useState({
        email: false,
        password: false
    });

    const [rform, setRform] = useState({
        email: '',
        password: ''
    });
    const [pform, setPform] = useState({
        email: '',
        password: ''
    });
    const [pmo, setPmo] = useState(false)

    const handleClassName = () => {
        console.log('click')
        setPmo(pmo ? false : true)
    }
    const obj = []

    const handleRChange = (e) => {
        let name = e.target.name;
        setrErr({ ...rerr, [name]: false });
        setRform({ ...rform, [e.target.name]: e.target.value });
        obj.push(e.target.value)
    }


    const handlePChange = (e) => {
        let name = e.target.name;
        setpErr({ ...perr, [name]: false });
        setPform({ ...pform, [e.target.name]: e.target.value });
    }

    //   const diffToast = () => {
    //     toast("Login successful!!!!")
    //   }

    const handlerLogin = (e) => {
        // console.log(form);
        e.preventDefault();
        let errEmail = false, errPassword = false;
        if (rform.email == '' && rform.password == '') {
            errEmail = true;
            errPassword = true
        }
        else if (rform.email == '') {
            errEmail = true;
        }
        else if (rform.password == '') {
            errPassword = true;
        }
        else {
            alert('Login successful')
            // diffToast()
            routeChange()
        }
        setrErr({ email: errEmail, password: errPassword });
    }


    const handlepLogin = (e) => {
        // console.log(form);
        e.preventDefault();
        let errEmail = false, errPassword = false;
        if (pform.email == '' && pform.password == '') {
            errEmail = true;
            errPassword = true
        }
        else if (pform.email == '') {
            errEmail = true;
        }
        else if (pform.password == '') {
            errPassword = true;
        }
        else {
            alert('Login successful')
            // diffToast()
            routeChange()
        }
        setpErr({ email: errEmail, password: errPassword });
    }

    const fillRDetails = (e) => {
        // console.log('fill details');
        setRform({ ...rform, email: 'req', password: 'req' });
    }
    const fillPDetails = (e) => {
        console.log('fill details');
        setPform({ ...pform, email: 'pmo', password: 'pmo' });
    }

    return (
        <div className={pmo ? 'container pmo-mode' : 'container'}>
            <div className='forms-container'>
                {/* <div className='fill'>
          <button className='' onClick={()=>console.log('fill details')}>Fill Details</button>
        </div> */}

                <div className="req-pmo">
                    {/* {
            !pmo ?  */}
                    {/* <Container maxWidth="sm" className='req-form'>
                        <form onSubmit={formik.handleSubmit}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="outlined-basic" label="Outlined"
                                name="email"
                               
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <Button color="primary" variant="contained" fullWidth type="submit">
                                Submit
                            </Button>
                        </form>
                    </Container> */}
                    <form action="#" className="req-form" autoComplete='off'>
                        <div className="cap-brand">
                            <img className="cap-brand img-fluid h-100" src={CapgeminiLogo} alt='image' />
                        </div>
                        {/* <div className="btn solid text-center d-flex justify-content-center align-items-center w-md-50 w-75" onClick={fillRDetails}>System User(Requestor)</div> */}
                        <Typography variant="h4" gutterBottom component="div">
                            Login as Requestor
                        </Typography>
                        <TextField id="outlined-basic" label="Email Id" type="email" className='input' variant="outlined" margin="dense" name="email" value={rform.email} onChange={handleRChange} />
                        {/* <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email" placeholder="Email id" name="email" value={rform.email} onChange={handleRChange} id='input1' required />
            </div> */}
                        <div className='cust-row'>
                            {
                                rerr.email ?
                                    <div className='invalid'>Email is required</div>
                                    :
                                    <div className='valid'>No error</div>
                            }
                        </div>
                        {/* <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="password" value={rform.password} onChange={handleRChange} required />
            </div> */}
                        <TextField id="outlined-password-input" className='input' label="Password" type="password"
                            autoComplete="current-password" variant="outlined" margin="dense" name="password" onChange={handleRChange} value={rform.password} />
                        <div className='cust-row'>
                            {
                                rerr.password ?
                                    <div className='invalid'>Password is required</div>
                                    :
                                    <div className='valid'>No error</div>
                            }
                        </div>
                        {/* <NavLink activeClassName='login' className="nav-link btn solid" onClick={handlerLogin} to='/req'>Login</NavLink> */}
                        <Button variant="contained" onClick={handlerLogin}>Login</Button>
                        {/* <ToastContainer /> */}
                    </form>
                    {/* : */}
                    <form action="#" className="pmo-form" autoComplete='off'>
                        <div className="cap-brand">
                            <img className="cap-brand img-fluid h-100" src={CapgeminiLogo} alt='image' />
                        </div>
                        {/* <div className="btn solid text-center d-flex justify-content-center align-items-center w-md-50 w-75" onClick={fillPDetails}>System User(PMO)</div> */}
                        <Typography variant="h4" gutterBottom component="div">
                            Login as PMO
                        </Typography>

                        {/* <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email" placeholder="Username" name="email" value={pform.email} onChange={handlePChange} id='input2' required />
            </div> */}
                        <TextField id="outlined-basic" label="Email Id" className='input' variant="outlined" margin="dense" name="email" value={pform.email} onChange={handlePChange} />
                        <div className='cust-row'>
                            {
                                perr.email ?
                                    <div className='invalid'>Email id is required</div>
                                    :
                                    <div className='valid'>No error</div>
                            }
                        </div>


                        {/* <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="password" value={pform.password} onChange={handlePChange} required />
            </div> */}
                        <TextField id="outlined-basic" label="Password" className='input' variant="outlined" margin="dense" name="password" value={pform.password} onChange={handlePChange} />
                        <div className='cust-row'>
                            {
                                perr.password ?
                                    <div className='invalid'>Password is required</div>
                                    :
                                    <div className='valid'>No error</div>
                            }
                        </div>



                        {/* <NavLink activeClassName='login' className="nav-link btn solid" to='/pmo' onClick={handlepLogin}>Login</NavLink> */}
                        <Button variant="contained" onClick={handlepLogin} style={{ backgroundColor: '#FF6700' }}>Login</Button>
                        {/* <ToastContainer /> */}
                    </form>
                    {/* } */}

                </div>
                <div className='panels-container'>
                    <div className='panel left-panel'>
                        <div className='content'>
                            <Typography variant="h1" className='panelh1' component="div" gutterBottom>
                                Requestor
                            </Typography>
                            {/* <button className='btn pmobtn transparent' ></button> */}
                            <Button variant="contained" id='pmo-btn' onClick={handleClassName}>Login as PMO Team</Button>
                        </div>

                        <img src={login1} className='imageClass' alt='' />

                    </div>
                    <div className='panel right-panel'>
                        <div className='content'>
                            <Typography variant="h1" className='panelh1' component="div" gutterBottom>
                                Requestor
                            </Typography>
                            {/* <button className='btn pmobtn transparent' ></button> */}
                            <Button variant="contained" id='pmo-btn' onClick={handleClassName} style={{ backgroundColor: '#FF6700' }}>Login as Requestor</Button>
                        </div>

                        <img src={login1} className='imageClass' alt='' />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginBefore
