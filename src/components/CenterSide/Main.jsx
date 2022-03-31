import React from "react";
import slide from "./icons/slide1.png"
import pic1 from "../../content/Campfire-bro.png"
import data from "../../CardData";

function Card(props) {
    const staterightside = props.staterightside
    const stateleftside = props.stateleftside
    return<div className={(props.textcolor)+ ' w-52  mx-2 mb-4 snap-center relative'}>
            <div className={(props.bg)+' rounded-xl   p-3'}>
                <div className={'font-medium text-lg'}>
                    {props.title}
                </div>
                <div className={'text-sm'}>
                    {props.text}...
                </div>
                <div className={''}>
                    <img src={pic1} className={''}/>
                </div>
                <div className={'flex flex-row justify-end'}>
                    {props.author}
                </div>
            </div>
        </div>

}

const Main = (props) => {
    const staterightside = props.staterightside
    const stateleftside = props.stateleftside
    const data = props.dataSearch.filter(el=>el.category===props.section)
    return<div id="journal-scroll" className="snap-mandatory snap-y  flex flex-row justify-center flex-wrap h-[34rem]  overflow-y-scroll relative" >
        {data.map((item,index)=>{
            return <Card bg={item.bg} textcolor={item.textcolor} title={item.title} author={item.author} text={item.text} staterightside={staterightside} stateleftside={stateleftside} />
        })}

        </div>
}
export default Main