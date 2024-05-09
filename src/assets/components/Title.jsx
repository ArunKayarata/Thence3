import { useNavigate } from "react-router-dom";
import logo from "../../essentials/logo.png"
export function Title(){
    const navigate= useNavigate();
    function showform(){
        navigate('/register')
        
    }

    return <div className=" parent h-20  w-[1300px]  border flex justify-center items-center border-gray-200 rounded-full">
        <div className=" first child  flex justify-between items-center h-[80%] w-full  ">
        <div className="w-2/4 text-left h-full">
            <img src={logo} alt="logo" className="ml-14 mt-3"/>
           
        </div>
        <div className=" w-2/4 flex justify-end  items-center  ">
            <button className="bg-white px-8  border-2 border-black rounded-full h-[60px] w-[200px] mr-3  hover:bg-buttonhover" onClick={showform}>Get Projects</button>
            <button className=" bg-black px-8  border-2 border-black rounded-full  text-white  w-[200px] h-[60px] mr-2">Onboard Talent</button>
        </div>

        </div>
      
        

    </div>
}