// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Form = () => {



    const [username , setUsername]=useState("");

    const handleChange = (e) => {
        setUsername(e.target.value);
        // alert("ur username is :${username}");
    }
console.log(username);

const [email, setEmail] = useState("");

const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // alert("ur email is :${email}");
}
console.log(email);

const handleSubmit = (e) => {
let userObj={
    name : username,
    email : email,

};
userArr.push(userObj);
localStorage.setItem("users", JSON.stringify(userArr));
alert("success");
setUsername("");
setEmail("");
}
  return (
    <div className='flex justify-center mt-5'>
      <input type="text" 
      placeholder='username' 
      required 
      value ={username} 
      onChange={handleChange} 
      className='bg-slate-900 text-lime-300' />

      <input type="email" 
      placeholder='user@gmail.com' 
      required
      value={email}
      onChange={handleEmailChange}
      className='bg-slate-50 text-orange-400'/>


      <button className='text-black bg-rose-700' onChange={handleSubmit}> Submit</button>
    </div>
  )

} 
export default Form;

