import React, {useEffect, useState} from "react";
import Nav from "./Nav";
import Main from "./Main";
import row from './icons/left-chevron.png'
import data from "../../CardData";

const CenterSide = (props) =>
{

    console.log(props.stateleftside)

    let stateleftside = props.stateleftside

    const reverseleft = function (){
        // props.setstateleftside(!props.stateleftside)
        if(stateleftside==false){
            props.setstateleftside(true)
        }
        else {
            props.setstateleftside(false)

        };
    };

    let staterightside = props.staterightside

    const reverseright = function (){
        // props.setstaterightside(!props.staterightside)
        if(staterightside==false){
            props.setstaterightside(true)
        }
        else {
            props.setstaterightside(false)

        };
    };

    function RowLeft(props){
        return<div className="self-center basis-0 relative z-10">
            <div className=" flex flex-row bg-white w-4 h-10 rounded-l-lg">
                <button onClick={()=>props.changeOn1()}>
                    <img src={row} className="self-center"/>
                </button>
            </div>
        </div>
    };

    function RowRight(props){
        return<div className="self-center basis-0 relative z-10">
            <div className=" flex flex-row bg-white w-4 h-10 rounded-r-lg">
                <button onClick={()=>props.changeOn2()}>
                    <img src={row} className="self-center -rotate-180"/>
                </button>
            </div>
        </div>
    };


    function Center(props){

        const [section,SetSection] = useState('новости')
        const [filter, SetFilter] = useState('');

        const SearchText=(event)=>{
            SetFilter(event.target.value);
        }
        let dataSearch=data.CardData.filter(item=>{
            return Object.keys(item).some(key=>item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
        })

        const [items,SetItems] = useState(data.CardData);

        const filterItem = (categItem)=>{
            const updatedItem = data.CardData.filter((curElem)=>{
                return curElem.category === categItem;
            });
            SetItems(updatedItem);
        }


        return(
            <div  className="flex flex-row h-[42rem]  " >

                {stateleftside?(
                    <RowLeft changeOn1={reverseleft}/>
                ):null
                }
                <div className="bg-white rounded-xl drop-shadow-lg p-3 py-1 w-full ">
                    <Nav SetSection={SetSection} filterItem={filterItem} filter={filter} SearchText={SearchText} changeOn2={reverseright} changeOn1={reverseleft}/>
                    <Main section={section} dataSearch={dataSearch} staterightside={staterightside } stateleftside={stateleftside} />
                </div>
                {staterightside?(
                    <RowRight changeOn2={reverseright}/>
                ):null
                }
            </div>
        )
    }

    return <Center/>
}

export default CenterSide