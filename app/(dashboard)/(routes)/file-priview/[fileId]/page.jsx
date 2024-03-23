"use client"
import React, { useState } from 'react';
import { useEffect } from 'react';
import FileForm from './_components/FileForm';
import FileInfo from './_components/FileInfo';
import { getFirestore,doc,getDoc, updateDoc } from "firebase/firestore";
import {app} from "../../../../../firebaseConfig";
import {Accessibility, SquareArrowLeft} from "lucide-react"
import Link from 'next/link';
const FilePreview = ({params}) => {
    const db = getFirestore(app);
    const [file,setFile]= useState();
    useEffect(() => { 
        console.log(params.fileId);
        params.fileId&&getFileInfo(params.fileId);
    }, []);

    const onSavePassword=async (pass)=>{
        let docRef= doc(db,"uploadingFile",params?.fileId);
        await updateDoc(docRef,{
            password:pass
        })
    }
    const getFileInfo= async(fileId)=>{
        const docRef = doc(db, "uploadingFile",fileId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setFile(docSnap.data());
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
    }
    return (
        <div>
            <Link href="/upload">
            <button className='flex px-3 py-1 bg-blue-500 text-white mb-2 rounded-md'><SquareArrowLeft /> Back To Upload</button></Link>
        <div className='flex w-80% border border-gray-300 rounded-md px-2 py-2 gap-4'>
            <FileInfo file={file}></FileInfo>
            <FileForm file={file} onSavePassword={onSavePassword}></FileForm>
        </div>
        </div>
    );
}

export default FilePreview;
