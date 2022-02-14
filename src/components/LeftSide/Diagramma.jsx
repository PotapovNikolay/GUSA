import React from "react";
import {Doughnut} from "react-chartjs-2";
import statistic from "./icons/statistic.png";


const Diagramma = () => {

    const lab = 'новости'

    const hoverLabel = {
        id: 'hoverLabel',
        afterDraw(chart, args, options) {
            const {ctx, chartArea: {top, right, bottom, left, width, height}} = chart;
            ctx.save();

            if (chart._active.length > 0) {
                const textLabel = chart.config.data.labels[chart._active[0].index]
                const procLabel = chart.config.data.datasets[chart._active[0].datasetIndex].data[chart._active[0].index]
                ctx.font = '18px sans-serif';
                ctx.fillStyle = '#597aa6';
                ctx.textAlign = 'center';
                ctx.fillText(textLabel, width / 2, top + (height / 2) - 5)
                ctx.font = '16px sans-serif';
                ctx.fillText(procLabel + '%', width / 2, top + (height / 2) + 15)
            } else {
                ctx.font = '18px sans-serif';
                ctx.fillStyle = '#597aa6';
                ctx.textAlign = 'center';
                ctx.fillText('новости', width / 2, top + (height / 2) - 5)
                ctx.font = '16px sans-serif';
                ctx.fillText('34' + '%', width / 2, top + (height / 2) + 15)
            }
            ;
        }
    }
    const options = {
        // animation:{
        //   duration:3000,
        //   loop:true,
        //     easing:'easeInOutExpo',
        // },
        animation: {
            delay: 100, // change delay to suit your needs.
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false
            },

        },
        layout: {
            padding: {
                left: 2,
                right: 2,
                top: 2,
                bottom: 2,
            }
        },

    };
    const data = {
        type: 'pie',
        labels: ['новости', 'игры', 'спорт', 'машины'],

        datasets: [
            {
                label: 'kkk',
                data: [34, 22, 14, 10],
                backgroundColor: [
                    'rgba(42, 157, 143)',
                    'rgba(233, 196, 106)',
                    'rgba(244, 162, 97)',
                    'rgba(231, 111, 81)'
                ],
                borderWidth: 0,
                cutout: '70%',
                hoverOffset: 5
            },
        ],
    };

    return <div className="drop-shadow-lg bg-white rounded-xl pb-3 pt-3">
        <div className="flex flex-row justify-center space-x-2 pb-1">
                <img src={statistic} className={'w-7 h-7 '}/>
            <div className={'text-lg'}>Лучшие темы</div>
        </div>
        <div className={'flex flex-row justify-center p-3'}>
            <div className={'w-9/12 '}>
                <Doughnut data={data} plugins={[hoverLabel]} options={options}/>
            </div>
        </div>
    </div>
}

export default Diagramma