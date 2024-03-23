"use client"
import React, {useState } from 'react';
import Uploading from "./_components/Uploading";
import {app} from '../../../../firebaseConfig';
import { getStorage,ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { getFirestore,setDoc,doc } from "firebase/firestore";
import generateRandomString from "../../../_utils/genRandomString";
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
const Upload = () => {

    var [pro,setPro]= useState(-1);
    var storage= getStorage(app);
    const db = getFirestore(app);
    const router= useRouter();
    var {user}= useUser();

    const uploadFile= (file)=>{
        const storageRef = ref(storage, 'fileDrive/'+file?.name);
        const uploadTask = uploadBytesResumable(storageRef, file, file.type);

 uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = parseInt((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    console.log('Upload is ' + progress + '% done');
    setPro(progress);
    progress== 100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        saveInfo(file,downloadURL);
      });
      })
    }

    const saveInfo= async(file,fileUrl)=>{
      var docId= generateRandomString();
      await setDoc(doc(db, "uploadingFile", docId), {
        fileName:file.name,
        fileType:file.type,
        fileSize:file.size,
        fileURL:fileUrl,
        useEmail: user.primaryEmailAddress.emailAddress,
        userName:user.fullName,
        password:"",
        id:docId,
        sortURL: process.env.NEXT_PUBLIC_BASEURL+ docId,
      });

      router.push("/file-priview/"+docId);
    }
    return (
        <div className='h-full w-[80%] flex flex-col items-center mt-10 gap-3'>
            <h2 className='text-2xl font-bold text-slate-800'>Start <span className='text-blue-500'>Uploading</span> and <span className='text-blue-500'>Shere</span> it</h2>
            <Uploading onUpload={(file)=> uploadFile(file)} pro={pro} setPro={setPro}/>
        </div>
    );
}

export default Upload;
