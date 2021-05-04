import React, { useState} from 'react';
import NavBar from '../../molecules/NavBar/'

const Register = ({title})=>{
const [fullName,setFullName]= useState("");
const [userName,setUserName]= useState("");
const [email, setEmail]=  useState("");
const [phone,setPhone]= useState("");
const [address,setAddress]= useState("");

const handleSubmit = () =>{
    const data ={
      fullname:fullName,
      username: userName,
      email:email,
      phonenumber: phone,
      address: address,
    };
    console.log(data);
};

return(
    //JSX
    <div className="container">
      <NavBar />
        <h1>Register</h1>
        <h2>{title}</h2>
      <p> Fullname </p>
      <input 
      className="form-control"
      placeholder="input your Fullname" 
      value={fullName} 
      onChange={(e)=>setFullName(e.target.value)} />
      <p> UserName </p>
      <input 
      className="form-control"
      placeholder="input your UserName" 
      value={userName} 
      onChange={(e)=>setUserName(e.target.value)} />
      <p> Email </p>
      <input 
      className="form-control"
      placeholder="input your email" 
      value={email} 
      onChange={(e)=>setEmail(e.target.value)} />
      <p> PhoneNumber </p>
      <input 
      className="form-control"
      placeholder="input your PhoneNumber" 
      value={phone} 
      onChange={(e)=>setPhone(e.target.value)} />
      <p>Address</p>
      <input 
      className="form-control"
      placeholder="input your address" 
      value={address}
      onChange={(e)=>setAddress(e.target.value)}/>
      <br />
      <br />
      <button type="button" onClick={handleSubmit} className="btn btn-primary">Register</button>
    </div>
  )
};

export default Register;