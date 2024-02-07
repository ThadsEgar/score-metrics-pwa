import React from "react";
import { IconType } from "react-icons";
import { TbTargetArrow } from "react-icons/tb";


const Sidebar = () => {
    return (
        <div className='fixed top-0 left-0 h-screen bg-gray-700 w-20 flex flex-col shadow-lg'>
            <div className='flex pb-20 text-center w-auto'>
                <p className='text-white text-lg font-bold'>Score-Metrics.com</p>
            </div>
            <div  >
                <ul className='flex flex-col items-center'>
                    <SideBarNavItem Icon={TbTargetArrow} tooltip={'Home'} />
                    <SideBarNavItem Icon={TbTargetArrow} tooltip={'Scores'} />
                    <SideBarNavItem Icon={TbTargetArrow} tooltip={'AI Odds'} />
                    <SideBarNavItem Icon={TbTargetArrow} tooltip={'About'} />
                </ul>
            </div>
        </div>

    )
}

const SideBarNavItem = ({ Icon, tooltip }: SideBarIconProps) => (
    <li className='group my-1 w-16 h-16 flex justify-center items-center bg-gray-600 text-white font-semibold rounded-sm hover:bg-yellow-400 hover:text-black hover:rounded-3xl transition-all duration-300 ease-linear relative'>
        <div className='flex justify-center items-center'>
            <Icon size={'25'} />
        </div>
        <span className='absolute hidden group-hover:block w-auto rounded-md p-2 text-white bg-gray-700 text-s font-bold left-full top-1/2 transform -translate-y-1/2 translate-x-3 transition-opacity duration-300 ease-linear'>
            {tooltip}
        </span>
    </li>
);

type SideBarIconProps = {
    Icon: IconType;
    tooltip: String;
}

export { Sidebar }