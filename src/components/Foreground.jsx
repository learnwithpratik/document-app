import React, { useRef, useState } from 'react'
import Cards from './Cards'


function Foreground() {

    const ref = useRef(null);

    const data = [
        {desc:"Hello! Welcome to this react project.",
            filesize:".9Mb",
            close:"false",
            tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"}
        },
        {desc:"This is the first project in react.",
            filesize:".9Mb",
            close:"false",
            tag:{isOpen:true, tagTitle:"Get Info", tagColor:"blue"}
        },
        {desc:"Hope you will like it!",
            filesize:".9Mb",
            close:"false",
            tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"}
        }
    ];
    useState()
  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5'>
       {/* <Cards /> */}
       {data.map((item,index)=>(
        <Cards data={item} reference={ref}/>
       ))}
    </div>
  )
}

export default Foreground