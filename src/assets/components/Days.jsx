import  vector from "../../essentials/Vector.png"
export function Days(){
    return <div className="absolute bottom-10 left-[30px] h-[70px] w-[200px] flex justify-evenly items-center  bg-white rounded-full">
        <div>
            <img src={vector} alt="vector" className="w-[35px]  "/>
        </div>
        <div>
            <p className="text-start text-questioncolor font-bold text-xl">10 Days</p>
            <p className="text-start text-offercolor"> Staff Deployment</p>
        </div>
    </div>

}