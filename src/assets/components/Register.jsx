import { useState } from "react"
import {z } from "zod";
import close from "../../essentials/Close.png"
import logo from "../../essentials/logo.png"
import { useNavigate } from "react-router-dom";
import incorrect from "../../essentials/error.png"
export function Register() {
  const [email,setemail]=useState("");
  const[name,setname]=useState("")
  const[isValid,setIsValid]=useState(true);
  const navigate=useNavigate();
  function showemail(event){
    setemail(event.target.value)
  }
 function showname(event){
  setname(event.target.value)
 }
  function disclose(){
    navigate('/home')
  }
  const handleSubmit = () => {
    const emailSchema = z.string().email();

    try {
      emailSchema.parse(email);
      setIsValid(true);
      navigate('/success')

    } catch (error) {
      setIsValid(false);
    }
  };
 const shouldidisable=name.trim() === "" || email.trim() === "";

  return <div>
  <img src={logo} alt="logo" className="ml-14 mt-3"/>
     <img src={close} alt="close" className=" absolute right-[75px] top-[100px]" onClick={disclose}/>
      <div className="flex justify-center mt-20">
   
  <div className="w-[400px]">
    <div className="flex flex-col items-center">
      <h1 className="font-covered-by-your-grace text-green-500 text-3xl">Registration form</h1>
      <h1 className="text-4xl font-manrope font-bold mx-3 my-2 text-questioncolor">Start your success journey here!</h1>
      <div className="flex flex-col items-center">
        <input placeholder="Enter your name" className="h-[50px] w-[400px] border bg-gray-200 px-4 my-2 rounded-full" onChange={showname} ></input>
        <input placeholder="Enter your email" className="h-[50px] w-full border bg-gray-200 px-4 my-2 rounded-full" onChange={showemail}></input>
        {isValid || ( <div className=" flex justify-start items-center w-full">
          <img src={incorrect} alt="error"/>
        <p className="text-red-600 text-start font-manrope  font-semibold text-sm">Enter a valid email address</p>
        </div>)}
        <button className="bg-Submitcolor w-full h-[50px] rounded-full mt-10 text-white" onClick={handleSubmit} disabled={shouldidisable}>Submit</button>
      </div>
    </div>
  </div>

  </div>
  

</div>




}