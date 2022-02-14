import React, {useState} from "react";
import row from './icons/left-chevron.png'

const Statistic = (props) =>
{
    return<div className={'flex flex-col space-y-3'}>
        <div className={'bg-white rounded-xl px-3 py-1'}>
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-col'}>
                    <div className={'text-sm'}>
                        статей
                    </div>
                    <div className={'font-medium'}>
                        14
                    </div>
                </div>
                <div className={'-rotate-180 self-center'}>
                    <button>
                        <img src={row} className={'w-5'}/>
                    </button>
                </div>
            </div>
        </div>
        <div className={'bg-white rounded-xl px-3 py-1'}>
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-col'}>
                    <div className={'text-sm'}>
                        читателей
                    </div>
                    <div className={'font-medium'}>
                        256
                    </div>
                </div>
                <div className={'-rotate-180 self-center'}>
                    <button>
                        <img src={row} className={'w-5'}/>
                    </button>
                </div>
            </div>
        </div>
        <div className={'bg-white rounded-xl px-3 py-1'}>
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-col'}>
                    <div className={'text-sm'}>
                        читаю
                    </div>
                    <div className={'font-medium'}>
                        19
                    </div>
                </div>
                <div className={'-rotate-180 self-center'}>
                    <button>
                        <img src={row} className={'w-5'}/>
                    </button>
                </div>
            </div>
        </div>

    </div>
}

export default Statistic
