import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
function Card({ data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={{bouncefitness: 100, bounceDamping: 30}}className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {data?.desc || "No description provided"}
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className='flex items-center justify-between px-8 py-3 mb-3'>
          <h5>{data.size}</h5>
          <span className='w-8 bg-zinc-600 rounded-full flex items-center justify-center'> 
            {data.close ? <IoClose />:<LuDownload size='.7em' color='#fff'/>}
          </span>
        </div>
        {data.tag.isopen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
