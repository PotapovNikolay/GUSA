import React, {useState} from "react";
import layer from "./icons/layer.png"
import glass from './icons/magnifying-glass.png'
import menu from './icons/hamburger.png'
import user from './icons/user.png'
import data from "../../CardData";


function SearchBar(props) {

    function help(){
        alert('вы вставили текст');
    }

    return <form action="/" method="get" className=" w-full flex flex-row justify-end">
        <input
            type="text"
            id="header-search"
            name="s"
            value={props.filter}
            onPaste={()=>help()}
            onChange={props.SearchText.bind(this)}
            className={"bg-[#f2f3f9] w-11/12  rounded-xl focus:outline-0 "}
        />
        <button type="submit"><img src={glass} alt="tt " className=" w-6 h-6 items-center self-center mr-2"/></button>
    </form>
};

const Nav = (props) => {

    const [BotNav, SetBotNav] = useState(false)

    const HideBotNav = function () {
        if (BotNav == false) {
            SetBotNav(true)
        } else {
            SetBotNav(false)
        }
        ;
    };

    const filter = props.filter
    const SearchText = props.SearchText


    return <div className={'flex flex-col p-3 space-y-2'}>

        <div className="flex flex-row space-x-2">
            <button onClick={() => props.changeOn1()}
                    className="bg-[#f2f3f9] rounded-xl transition delay-150 duration-700 ease-in-out">
                <img src={layer} alt="tt" className="w-10 h-10 p-1 "/>
            </button>

            <div className="bg-[#f2f3f9] rounded-xl grow p-0 flex flex-row justify-end ">
                <SearchBar filter={filter} SearchText={SearchText}/>
            </div>
            <button onClick={() => HideBotNav()} className="bg-[#f2f3f9] rounded-xl">
                <img src={menu} alt="tt" className="w-10 h-10 p-2"/>
            </button>
            <button onClick={() => props.changeOn2()} className="bg-[#f2f3f9] rounded-xl">
                <img src={user} alt="tt" className="w-10 h-10 p-1"/>
            </button>
        </div>
        <div
            className={BotNav ? 'w-full bg-[#f2f3f9]  rounded-xl   flex flex-row justify-around animate-SecondNav' : 'hidden'}>
            <div className={'  mt-2  '}>
                <div className={'flex flex-row relative'}>
                    <div className={' '}>
                        <button className={'focus:bg-white pb-2 px-5 rounded-t-xl hover:bg-white hover:rounded-t-xl'} onClick={()=>props.SetSection('новости')}>новости</button>
                    </div>
                </div>
            </div>
            <div className={'  mt-2  '}>
                <div className={'flex flex-row relative'}>
                    <div className={''}>
                        <button className={'focus:bg-white pb-2 px-5 rounded-t-xl hover:bg-white hover:rounded-t-xl'} onClick={()=>props.SetSection('развлечения')}>развлечения</button>
                    </div>
                </div>
            </div>
            <div className={'  mt-2  '}>
                <div className={'flex flex-row relative'}>
                    <div className={''}>
                        <button className={'focus:bg-white pb-2 px-5 rounded-t-xl hover:bg-white hover:rounded-t-xl'} onClick={()=>props.SetSection('игры')}>игры</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Nav


