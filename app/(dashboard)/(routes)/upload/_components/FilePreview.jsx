import { CircleX,File } from 'lucide-react';
import React from 'react';
const FilePreview = ({file,removeFile}) => {
    return (
        <div className='flex items-center justify-between px-2 py-2 rounded-md border-2 border-blue-400 w-full'>
            <div className='flex items-center justify-start gap-2'>
               <File className="text-blue-500 text-2xl"/>
               <div className='text-gray-400 text-md'>
                    <p>{file.name}</p>
                    <p>{file.type}/{(file.size/1024/1024).toFixed(2)} MB</p>
               </div>
            </div>
            <CircleX  className='hover:cursor-pointer' onClick={()=>removeFile()}/>
        </div>
    );
}

export default FilePreview;
