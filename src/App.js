import LeftSide from "./components/LeftSide/LeftSide";
import CenterSide from "./components/CenterSide/CenterSide";
import React, {useCallback, useEffect, useState} from "react";
import RightSide from "./components/RightSide/RightSide";
import {ResponsivePie} from "@nivo/pie";
// import user from './icons/user.png'

function App() {

    const UserInfo = {
        'name': 'Николай',
        'sername': 'П',
        // 'avatar':{user},
    }

    const [IsOnLeftSide, SetLeftSide] = useState(false)
    const [IsOnRightSide, SetRightSide] = useState(false)

    return (
        <div className={'h-full'}>
            <div
                className={IsOnLeftSide ? 'p-5 grid grid-cols-6 gap-x-2 relative' :
                    IsOnRightSide ? 'p-5 grid grid-cols-6 gap-x-2 relative' :
                        (!IsOnLeftSide && IsOnRightSide)
                            ?'p-5 grid grid-cols-6 gap-x-2 relative': ' p-5 grid grid-cols-6 gap-x-5 '}>
                {IsOnLeftSide ? (<div className=" ">
                    <LeftSide/>
                </div>) : null
                }
                <div
                    className={(IsOnLeftSide && !IsOnRightSide) ?
                        "col-span-5 col-start-2 row-start-1 animate-MainToRight" : (!IsOnLeftSide && IsOnRightSide) ?
                            "col-span-5 col-start-1 row-start-1 z-10 animate-MainToLeft" : (IsOnLeftSide && IsOnRightSide) ?
                                "col-span-4 col-start-2 row-start-1 z-10 " : "col-span-6 row-start-1  animate-MainToLeft "}>
                    <CenterSide staterightside={IsOnRightSide} setstaterightside={SetRightSide}
                                stateleftside={IsOnLeftSide} setstateleftside={SetLeftSide}/>
                </div>
                {IsOnRightSide ? (<div className="bg-[#e4e7ec] rounded-xl drop-shadow-lg h-full h-[42rem]">
                    <RightSide UserInfo={UserInfo}/>
                </div>) : null
                }
            </div>


        </div>
    );
}

export default App;
