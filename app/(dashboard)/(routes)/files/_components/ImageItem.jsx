import React from 'react';
import Image from 'next/image';
import  Link from 'next/link';
const ImageItem = ({file}) => {
    return (
        <Link href={process.env.NEXT_PUBLIC_BASEURL+"file-priview/"+file.id}>
        <div className='flex gap-3 border border-blue-500 bg-blue-300 rounded-sm px-4 py-2 items-center justify-between w-full'>
            <div className='flex'>
            <Image src={file.fileURL} width={100} height={70} className='rounded-sm' alt={file.fileName}/>
            <p className='text-black font-bold'>{file.fileName}  / {file.fileType}</p>
            </div>
            <Link href={file.fileURL} download={file.fileName} className='inline px-6 py-2 bg-blue-500 rounded-full'>Download</Link>
        </div>
        </Link>
    );
}

export default ImageItem;
