import { useState } from "react"
import thence from "../../essentials/thence.png"
import arrow from "../../essentials/arrow.png"
export function Core() {
    const [current,setcurrent]=useState(0);

    function handlecurrent(ind){
        setcurrent(ind)
    }
    return <div className=" flex justify-between items-center w-full ">
        <div className="">
            <img src={thence} alt="image" className="w-full h-[600px]  ml-20 rounded-[45px]" />

        </div>

        <div className=" w-[300px] mr-[150px] absolute right-0 top-24 flex-col  ">
     <p className="text-3xl  text-start font-manrope font-bold">Enhance fortune 50 company’s insights teams research capabilities</p>
        </div>
        <div className="absolute right-[380px]  ">
            {[0,1,2].map((ind)=>(
                <button className=
                {` h-3 rounded-full  cursor-pointer w-3 mr-2  ${
                    current === ind ? 'bg-green-500' : 'bg-carouselcolor'
                  }`} key={ind} onClick={()=>handlecurrent(ind)}></button>
            ))}
                
              
            </div>
            <div className=" absolute bottom-20 right-[230px]  flex justify-center items-center">
            <button className="h-[75px] p-2 w-[230px] flex justify-center items-center  bg-black rounded-full hover:bg-hovercolor  text-white text-xl    ">
            Explore More
            <img src={arrow} alt="arrow" className="w-[20px] ml-5 mt-1 "/>
        </button>
        

            </div>

       



    </div>
}
