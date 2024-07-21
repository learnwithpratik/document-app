import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion"

function Cards({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1} dragTransition={{bounceStiffness:200, bounceDamping:8}} className='relative flex-shrink-0 w-48 h-60 bg-zinc-900/90 rounded-[30px] text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm mt-5 font-semibold leading-tight '>{data.desc}</p>

        <div className='footer absolute bottom-0  w-full left-0'>
            <div className='flex items-center justify-between mb-3 py-3  px-6'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                 
                 {data.close ? <MdClose /> : <MdOutlineFileDownload size="1.1em" color="#fff" />}
                
                </span>
            </div>
        
        {
            data.tag.isOpen && (
            <div className={`tag w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-4  flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
        </div>
            )}

        
        </div>

    </motion.div>

  )
}

export default Cards