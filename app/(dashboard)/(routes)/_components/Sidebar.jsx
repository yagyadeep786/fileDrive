"use client"
import { Shield, Upload,File } from 'lucide-react';
import React,{useState} from 'react';
import Link from 'next/link';
const Sidebar = () => {

   const [activeIndex,setActiveIndex]= useState(0);

    let sidemenu= [
        {
            id:1,
            name:"upload",
            icon:Upload,
            path:"/upload"
        },
        {
            id:2,
            name:"Files",
            icon:File,
            path:"/files"
        },
        {
            id:3,
            name:"Updrade",
            icon:Shield,
            path:"/upgrade"
        }
    ]
    return (
        <div className='flex flex-col items-start w-[100%] bg-gray-100 h-screen md-hidden'>
            <h2 className='text-blue-500 text-2xl font-bold px-4 py-2'>FileDrive</h2>
            <div className='w-full'>
                {sidemenu.map((item,index)=>
                <Link href={item.path} key={item.id}>
                    <div className={`flex items-center justify-start py-4 w-[100%] hover:bg-blue-100 hover:cursor-pointer px-2 ${activeIndex == index? 'bg-blue-100 text-blue-500':null}`} onClick={()=> setActiveIndex(index)}>
                        <item.icon className='text-gray-500'/>
                       <h3 className='ml-2 text-gray-500'>{item.name}</h3>
                    </div>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Sidebar;
