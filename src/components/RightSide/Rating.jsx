import React, {useState} from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend, Chart} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Rating = (props) =>
{

    const counter={
        id:'counter',
        afterDraw(chart, args, options) {
            const {ctx,chartArea:{top,right,bottom,left,width,height}}=chart;
            ctx.save();
            ctx.fillStyle='#597aa6';
            ctx.font='28px sans-serif';
            ctx.textAlign='center';
            ctx.fillText(' 67%',width/2,top+(height/2))
        },
    };
    const options={
      events:[]
    };
    const data = {
        type: 'pie',
        labels: [],

        datasets: [
            {
                label: '# of Votes',
                data: [67, 33],
                backgroundColor: [
                    'rgba(89,122,166,255)',
                    'rgba(255,255,255)',
                ],

                borderWidth: 0,
                cutout: '90%',

            },
        ],
    };
    return <div className={"bg-white flex flex-col rounded-xl p-2 space-y-4"}>
        <div className={'text-2xl text-center'}>
            Рейтинг 6
        </div>
        <div className={'hover:saturate-150 hover:duration-300 self-center w-7/12'} >
            <Doughnut data={data} plugins={[counter]} options={options} />
        </div>
        <div className={'text-sm pl-4'}>
            до повышения рейтинга <br/><span className={'font-medium text-lg'}>33%</span>
        </div>

    </div>

}

export default Rating