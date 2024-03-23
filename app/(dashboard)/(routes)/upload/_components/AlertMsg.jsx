import React from 'react';
import { CircleAlert } from 'lucide-react';
const AlertMsg = ({msg}) => {
    return (
        <div className='flex items-center gap-2 bg-red-500 w-full py-4 rounded-sm pl-4'>
            <CircleAlert className="text-white"/>
            <h2 className='text-white'>{msg}</h2>
        </div>
    );
}

export default AlertMsg;
