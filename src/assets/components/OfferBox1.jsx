import glow from "../../essentials/glow11.png"
export function OfferBox1(){
    return <div className=" w-[250px]  h-[250px]  absolute top-10 left-0 rounded-xl bg-white  ">
        <div className=" ml-3">
            <img src={glow} alt="glow" className=" font-switzer -rotate-21.27 -translate-x-12"/>
            <div className="text-questioncolor text-6xl text-start -translate-y-12" >40%</div>
            <p className="text-offercolor text-start absolute bottom-8 ">Achieved reduction in project execution time by optimising team availability</p>


        </div>
        {/* <div className="ml-3">

        <p className="text-offercolor  text-start ">Achieved reduction in project execution time by optimising team availability</p>
        </div> */}
    </div>
}