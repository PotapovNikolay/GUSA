import React from "react";
import Profile from "./Profile";
import Rating from "./Rating";
import Statistic from "./Statistic";


const RightSide = (props) =>
{
    let UserInfo=props.UserInfo

    return <div className=" flex flex-col mr-6 space-y-3 ">
        <div className={'animate-none'}>
            <div className={"animate-none bg-[#e4e7ec] w-14 h-[42rem] absolute -left-12 z-0 "}></div>
        </div>

        <div className={"animate-RightSide"}>
            <Profile UserInfo={UserInfo}/>
        </div>
        <div className={"z-10 animate-RightSide"}>
            <Rating/>
        </div>
        <div className={"z-10 animate-RightSide"}>
            <Statistic/>
        </div>
    </div>
}

export default RightSide