import React, { useState} from 'react';
import NavBar from '../../molecules/NavBar'

const Login = ({title})=>{
// const [welcomeText, setWelcomeText]=useState("Selamat Datang");
const [email, setEmail]=  useState("");
const [password,setPassword]= useState("");

const handleSubmit = () =>{
    const data ={
        email: email,
        password: password
    };
    console.log(data);
    // setWelcomeText("Welcome!!!");
};

// useEffect(()=>{
//     console.log("Componen did mount");
//     setTimeout(()=>{
//         setWelcomeText("Welcome");
//     }, 3000)
// }, []);

// useEffect(()=>{
//     console.log("Component did Update")
// },[welcomeText])

return(
    //JSX
    <div className="container">
      <NavBar />
        <h1>Login</h1>
        <h2>{title}</h2>
      
      <p> Email </p>
      <input 
      className="form-control"
      placeholder="masukan email anda" 
      value={email} 
      onChange={(e)=>setEmail(e.target.value)} />
      <p>Password</p>
      <input 
      className="form-control"
      placeholder="masukan password anda" 
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}/>
      <br />
      <br />
      <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
    </div>
  )
};

export default Login;