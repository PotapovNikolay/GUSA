import React from "react";
import Profile from "./Profile";
import Rating from "./Rating";
import Statistic from "./Statistic";
import Calen from "./Calen"
import Registration from "./Registration"

const RightSide = (props) => {
    let UserInfo = props.UserInfo



    return <div>
        {props.signIn||props.logIn ?
            <div className=" flex flex-col mr-6 space-y-3 ">
                <div className={'animate-none'}>
                    <div className={"animate-none bg-[#e4e7ec] w-14 h-[42rem] absolute -left-12 z-0 "}></div>
                </div>
                <div className={"z-10 animate-RightSide"}>
                    <Profile name={props.name} sername={props.sername} />
                </div>
                <div className={"z-10 animate-RightSide"}>
                    <Rating/>
                </div>
                <div className={"z-10 animate-RightSide"}>
                    <Statistic/>
                </div>
                <div className={"z-10 animate-RightSide"}>
                    <Calen/>
                </div>
            </div>
            : <div className=" flex flex-col mr-6 space-y-3 ">
                <div className={'animate-none'}>
                    <div className={"animate-none bg-[#e4e7ec] w-14 h-[42rem] absolute -left-12 z-0 "}></div>
                </div>
                <div className={"z-10 animate-RightSide"}>
                    <Registration
                        signIn={props.signIn}
                        setSignIn={props.setSignIn}
                        logIn={props.logIn}
                        setLogIn={props.setLogIn}
                        error={props.error}
                        setError={props.setError}
                        submitted={props.submitted}
                        setSubmitted={props.setSubmitted}
                        sername={props.sername}
                        setSername={props.setSername}
                        name={props.name}
                        setName={props.setName}
                        />
                </div>
            </div>
        }
    </div>
}

export default RightSide