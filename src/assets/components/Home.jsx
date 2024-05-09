import { Core } from "./Core"
import { Questions } from "./Questions"
import { Contanct } from "./Contanct"
import { OfferBox1 } from "./OfferBox1"
import { Days } from "./Days"
import { Saving } from "./Saving"
export function Home() {
    return <div className="  ">
        <div className="flex justify-center mt-[50px]">
            <div className=" textdiv h-1/6 flex-col  w-2/5   justify-center items-center ">
                <div>
                    <h1 className="font-covered-by-your-grace text-green-400 text-4xl ">success stories</h1>

                </div>
                <div className=" centerit  ">
                    <p className="text-center text-[45px] text-questioncolor font-bold font-manrope">Every success journey we’ve encountered.</p>
                </div>


            </div>

        </div>

        <div className="imagediv relative top-20">
            <Core />
            <OfferBox1/>
            <Days/>
            <Saving/>
        </div>

        <Questions/>
        <Contanct/>





    </div>
}