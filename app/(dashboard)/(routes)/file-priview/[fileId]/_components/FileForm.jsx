import React, { useState } from 'react';
import {Files,Eye} from "lucide-react"
const FileForm = ({file,onSavePassword}) => {

    const [copy,setCopy]= useState(false);
    const [enablePass,setEnablePass]= useState(false);
    const [showPass,setShowPass]= useState(false);
    const [pass,setPass]= useState();
    const copyURL= (url)=>{
        navigator.clipboard.writeText(url)
        .then(()=>{
            setCopy(true);
        })
    }
    return (
        <div className='flex flex-col items-start gap-3'>
                <div className='w-full'>
                    <label htmlFor="UserEmail" className="block text-sm font-bold text-gray-500"> SortURL </label>

                 <div className='flex items-center gap-2 cursor-pointer'>
                    <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="mt-1 w-full rounded-md shadow-sm outline-2 px-2 py-1 outline-blue-300 sm:text-sm border-2 border-gray-300 "
                    value={file?.sortURL}
                    />
                    <Files className={`border border-gray-200 ${copy? "bg-gray-300":"bg-blue-500"} rounded-md text-white`} onClick={()=>{copyURL(file?.sortURL)}}/>

                    </div>
                </div>

              <div className='w-full'>
              <div class="flex items-center ">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-600 placeholder:text-gray-500" onClick={()=> setEnablePass(!enablePass)}/>
                <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 ">Enabled Password</label>
                </div>

                <div className={`${!enablePass?"hidden":"block"}`}>
                    <label htmlFor="UserEmail" className="block text-md  font-medium text-gray-500"> Password </label>

                 <div className='flex items-center gap-2 cursor-pointer'>
                    <input
                    type={`${showPass?"text":"password"}`}
                    id="password"
                    placeholder="Password"
                    className="mt-1 w-full rounded-md shadow-sm outline-2 px-2 py-1 outline-blue-300 sm:text-sm border-2 border-gray-300 placeholder:text-gray-500"
                    onChange={(event)=> setPass(event.target.value)}
                    />
                       <Eye  className='text-gray-700 border border-gray-200 bg-gray-100 rounded-md' onClick={()=> setShowPass(!showPass)}/>
                    </div>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full mt-2" onClick={()=> onSavePassword(pass)}>Save</button>
                </div>
               
              </div>

              <div>
                <p className='text-gray-500 font-bold text-sm'>Send File To Email</p>
                <input
                    type="email"
                    id="UserEmail"
                    placeholder="emailple@gmail.com"
                    className="mt-1 w-full rounded-md shadow-sm outline-2 px-2 py-1 outline-blue-300 sm:text-sm border-2 border-gray-300 "
                    />
                
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full mt-2">Send</button>
              </div>
        </div>
    );
}

export default FileForm;
