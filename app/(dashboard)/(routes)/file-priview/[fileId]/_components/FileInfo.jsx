import React from 'react';
import Image from 'next/image';
const FileInfo = ({file}) => {
    console.log(file?.fileURL);
    return (
        <div className='flex flex-col gap-4 items-center justify-center'>
            <Image src={file?.fileURL} alt="previewImage" width={300} height={200}/>
            <div className='flex flex-col items-center'>
                <p className='font-bold'>{file?.fileName}</p>
                <p className='text-sm text-gray-400'>{file?.fileType}/{file?.fileSize}</p>
            </div>
        </div>
    );
}

export default FileInfo;
