"use client";
import React, { useEffect, useState } from 'react';
import { useUser } from "@clerk/nextjs";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../../../firebaseConfig";
import ImageItem from "./_components/ImageItem";

const Files = () => {
    const { user } = useUser();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore(app);
                const email = user.primaryEmailAddress.emailAddress;
                const q = query(collection(db, "uploadingFile"), where("useEmail", "==", email));
                const querySnapshot = await getDocs(q);
                const newData = [];
                querySnapshot.forEach((doc) => {
                    newData.push(doc.data());
                });
                setData(newData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (user) {
            fetchData();
        }
    }, [user]);


    return (
        <div className='flex flex-col gap-2 overflow-scroll h-[80vh]'>
            {data.length > 0 &&
            <>
             {data.map((file)=>{
                return(<ImageItem file={file}/>)
             })}
            </>
            }
        </div>
    );
}

export default Files;
