import React, {useEffect, useState} from "react";
import Calendar from 'react-calendar';

function Week() {
    const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС',]

    return<div className={'absolute w-full '}>
        <div className={'flex flex-row justify-between px-1 pr-2.5 pl-2 pt-1'}>

            {days.map((day)=><div className={'flex flex-col text-sm lowercase'}>
                <div>{day}</div>
            </div>)}
        </div>
    </div>

}
//     // const datedays=[d.getDate(),d.getDate(),d.getDate(),d.getDate(),d.getDate(),d.getDate(),d.getDate()]
//     function getWeekDay(date) {
//         let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ','ВС'];
//
//         return days[date.getDay()-1];
//     }
//     const d = new Date();
//     const n = d.getDate();
//
//
//
//
//     return<div className={'flex flex-row space-x-2 justify-center'}>
//
//             {days.map((day)=><div className={'flex flex-col'}>
//                 <div>{day}</div>
//                 <div> {n} </div>
//                 <div>  </div>
//             </div>)}
//     </div>
// }


// import 'react-calendar/dist/Calendar.css';

const Calen = ()=>{

    const [value, onChange] = useState(new Date());

    return <div className={'text-sm  bg-white rounded-xl relative '}>
        <Week/>
        <div className={'p-2 px-1 '}>
            <Calendar
                showNeighboringMonth={false}
                showNavigation={false}
                tileClassName={['text-sky-800 ']}
                className={['text-white ']}
                // onChange={onChange}
                // value={value}

            />
        </div>


        {/*<FullCalendar*/}
        {/*    plugins={[ dayGridPlugin ]}*/}

        {/*    className={"" }*/}

        {/*    headerToolbar={false}*/}
        {/*    border={'0'}*/}
        {/*    height={100}*/}
        {/*    locale= {'esLocale'}*/}
        {/*    dayNames={["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]}*/}
        {/*    dayNamesShort={["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"]}*/}
        {/*    // views = {{*/}
        {/*    //     agendaThreeDay: {*/}
        {/*    //         type: 'agenda',*/}
        {/*    //         duration: { days: 3 },*/}
        {/*    //         buttonText: '3 day',*/}
        {/*    //*/}
        {/*    //     }*/}
        {/*    // }}*/}

        {/*/>*/}
    </div>
}

export default Calen