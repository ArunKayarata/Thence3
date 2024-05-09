import { useState ,useEffect} from "react"
import tick from "../../essentials/Tick.png"
import { useNavigate } from "react-router-dom";
export function SuccessfulSubmit() {
    const [sec,setSec]=useState(5);
    const navigate=useNavigate();
   
    
  useEffect(() => {
    const timer = setInterval(() => {
      setSec((prevSec) => prevSec - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      // Redirect to home page when component unmounts
    };
  },[]);

  useEffect(() => {
    if (sec === 0) {
      navigate("/home"); // Redirect to home page when countdown reaches 0
    }
  }, [sec]);
    return <div className="w-1/3 h-[400px] flex flex-col justify-center items-center mx-auto mt-10">
    <div className="flex justify-center items-center">
      <img src={tick} alt="tick" className="" />
    </div>
    <div>
      <p className="font-covered-by-your-grace text-green-500  text-2xl">Success submitted</p>
    </div>
    <div>
      <h1 className="text-questioncolor-500 font-manrope  text-5xl p-2">Congratulations</h1>
    </div>
    <div>
      <p className="text-successcolor  font-manrope trxt-xl p-2"> 
        Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates
      </p>
    </div>
    <div className="absolute bottom-10">
        <p className="font-manrope text-successcolor">Redirecting you to Homepage in <span className="font-bold">{sec} {sec==0?'Second':'Seconds'}</span></p>
    </div>
  </div>
  
    
}