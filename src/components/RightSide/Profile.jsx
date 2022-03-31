import React, {useState} from "react";
import avatar from './icons/user.png'
import logout from './icons/log-out.png'
import {logOut} from "../../Base";

const Profile = (props) => {

    async function handleLogOut(){
        try {
            await logOut();
        } catch {
            alert('error')
        }

    }


    return <div className={"flex flex-row "}>
        <div className={"basis-4/12"}>
            <img src={avatar}/>
        </div>
        <div className={"self-center"}>
            <div className={"flex flex-col"}>
                <div className={"text-xl font-medium flex flex-row "}>
                    {props.name} {props.sername[0]}
                    <div className={'self-center'}>
                        <form action={'/'} method={"GET"}>
                            <button onClick={handleLogOut}>
                                <img src={logout} className={'w-6 pl-1 pt-1'} alt={''} />
                            </button>
                        </form>

                    </div>
                </div>
                <div >
                    редактировать
                </div>
            </div>
        </div>
        {/*<div className={'basis-1/12 self-start'}>*/}
        {/*    <img src={logout} className={''} alt={''} />*/}
        {/*</div>*/}
    </div>
}

export default Profile