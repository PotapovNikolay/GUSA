import React, {useEffect, useState} from "react";

function Clock() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

    return <div >{clockState}</div>;
}


const Logo = () => {
    return <div className="flex flex-col text-center justify-center">
        <div className="w-32 h-16 bg-blue-300 text-center self-center">
            logo
            <Clock ></Clock>
        </div>
        <div>
            GASU
        </div>
    </div>
}

setInterval(Clock, 1000);

export default Logo