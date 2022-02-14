import React from "react";

import Top from "./Top";
import Logo from "./Logo";
import Diagramma from "./Diagramma";

const LeftSide = () =>
{
    return <div className="flex flex-col space-y-5  animate-LeftSide ">
        <Logo/>
        <Top/>
        <Diagramma/>
    </div>
}

export default LeftSide