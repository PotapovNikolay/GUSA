import React from "react";


const top = [
    {avatar:'none',username:'clay', place:'1'},
    {avatar:'none',username:'потапов', place:'2'},
    {avatar:'none',username:'shipovnica', place:'3'},
    {avatar:'none',username:'shipovnica', place:'4'},
    {avatar:'none',username:'shipovnica', place:'5'},
    {avatar:'none',username:'shipovnica', place:'6'},
    {avatar:'none',username:'shipovnica', place:'7'},
    {avatar:'none',username:'clay', place:'8'},
    {avatar:'none',username:'shipovnica', place:'9'},
    {avatar:'none',username:'clay', place:'10'},
]

let res = top.map(function (props){
    return <div className="flex flex-row  space-x-2 px-2 space-y-2" key={props.place}>
        <div className="w-7 h-7 border border-1 rounded-lg border-blue-900 mt-4"></div>
        <div className="flex flex-col text-sm">
            <div>{props.username}</div>
            <div>{props.place}</div>
        </div>
    </div>
})

const Top = () => {
    return <div className=" rounded-xl bg-white py-3 pb-5 drop-shadow-lg ">
        <div className="text-center pt-1 ">HOT 10</div>
        <div className="grid grid-cols-2 grid-rows-5  ">
            {res}
        </div>
    </div>
}

export default Top

