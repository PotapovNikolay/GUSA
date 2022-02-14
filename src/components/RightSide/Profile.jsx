import React, {useState} from "react";
import avatar from './icons/user.png'

const Profile = (props) => {

    let User = props.UserInfo
    return <div className={"flex flex-row "}>
        <div className={"basis-4/12"}>
            <img src={avatar}/>
        </div>
        <div className={"self-center"}>
            <div className={"flex flex-col"}>
                <div className={"text-xl font-medium"}>
                    {User.name} {User.sername}
                </div>
                <div >
                    редактировать
                </div>
            </div>
        </div>
    </div>
}

export default Profile