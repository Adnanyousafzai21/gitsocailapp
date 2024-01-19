import React from 'react';
const Profileimg = ({ avater, classname }) => {
  return (
    <div className={`rounded-full ${classname?classname:"w-10 h-10"} border  flex items-center justify-center overflow-hidden`}>
   <img src={avater? avater :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vB-49_BT-dirwttYZaeE_VByjlQ3raVJZg&usqp=CAU"} alt="" className="w-full" /> 
     
    </div>
  );
};

export default Profileimg;
