import React from 'react';
import { RiUserLine } from "react-icons/ri";
const Profileimg = ({ avater }) => {
console.log("avater",avater)
  return (
    <div className='rounded-full w-9 h-9 flex items-center justify-center overflow-hidden  border'>
   <img src={avater? avater :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vB-49_BT-dirwttYZaeE_VByjlQ3raVJZg&usqp=CAU"} alt="" className="" /> 
     
    </div>
  );
};

export default Profileimg;
