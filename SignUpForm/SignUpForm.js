import React, {useState,useContext } from 'react';
import { FirebaseContext } from '../../context/FirebaseContext';
import './SignUpForm.css';
const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {firebase} = useContext(FirebaseContext);
    return(
        <div className="container">
 <form onSubmit ={(event) => {
     event.preventDefault();
     firebase.auth().createUserWithEmailAndPassword(email,password)
     .then(() => alert("signed up!"))
     .catch((error) => alert(error.message));
     alert(email+" "+password);
     setEmail("");
     setPassword("");
     }}>
     <label>E-mail</label>
     <input type="email"
     value={email}
     onChange= {(event) => setEmail(event.target.value)}
     ></input>
     <label>Password</label>
     <input type="password"
     value={password}
     onChange={(event) => setPassword(event.target.value)}
     ></input>
     <button type="submit">Sign up</button>
 </form>
 </div>
 
    )
}

export default SignUpForm;