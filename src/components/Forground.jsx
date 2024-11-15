import React, { useRef } from 'react';
import Card from './Card';

function Forground() {
    const ref = useRef(null)
  const data = [
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      size: ".9mb",
      close: true,
      tag: { isopen: true, tagtitle: "Download Now", tagcolor: "green" },
    },
    {
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        size: ".9mb",
        close: true,
        tag: { isopen: true, tagtitle: "Download Now", tagcolor: "blue" },
      },
      {
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        size: ".9mb",
        close: true,
        tag: { isopen: true, tagtitle: "Upload", tagcolor: "green" },
      },
  ];

  return (
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap">
      {data.map((item, index) => (
        <Card data={item} reference={ref}/>
      ))}
      </div>
  );
}

export default Forground;
