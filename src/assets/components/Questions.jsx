import { Printallquestions } from "./Printallquestions"
import unionimg  from "../../essentials/Union.png"
export function Questions(){
    const questionslist=[
        {title:"Do you offer freelancing", answer:"Yes we do offer a freelancing"},
        {title:"What’s the guarantee that I will be satisfied with the hired talent?",answer: "we guarantee a lot "},
        {title:"Can I hire multiple talents at once?",answer:"If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."},    
        {title:"Why should I not go to an agency directly?",answer:"because we provide best offers "},
        {title:"Who can help me pick a right skillset",asnwer:"ALL"},
        {title:"and duration for me?",asnwer:"12 months"}
    
    ]
    return <div className="bg-customColor  h-[700px] mt-[150px] rounded-2xl flex justify-between">
      <div className="flex-col w-1/2 relative top-20 text-start ">
      <div className="   ml-[100px]">
        <p className="font-covered-by-your-grace text-whatsonyourmind text-2xl">what's on  your mind</p>
        <h1 className="text-questioncolor text-6xl">Ask Questions</h1>


      </div>
      <div className="mt-10">
      <img src={unionimg} alt="jnkcj" className=""/>

      </div>
      </div>
      <div className="w-1/2  ">
        <div className="mt-20">
        <Printallquestions questions={questionslist}/>
        </div>

      </div>
    </div>
}