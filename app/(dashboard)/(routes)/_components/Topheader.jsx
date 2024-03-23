import React from 'react';
import { UserButton } from '@clerk/nextjs';
import { AlignJustify } from 'lucide-react';
const Topheader = () => {
    return (
             <div className='flex items-center justify-between w-full px-4 py-2 bg-gray-200 md:justify-end'>
                <AlignJustify  className='md:hidden'/>
                <h2 className='text-blue-500 text-2xl font-bold px-4 py-2 sm:hidden'>FileDrive</h2>
                <UserButton/>
                
              </div>
    );
}

export default Topheader;
