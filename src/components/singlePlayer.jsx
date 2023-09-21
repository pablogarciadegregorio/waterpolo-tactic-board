import React from "react";
import Draggable from "react-draggable";
import "../index.css";
import "../../dist/output.css";
import { useRef, useState } from "react";
import { motion } from "framer-motion"

const Player = (props) => {
  const nodeRef = React.useRef(null);
  

  return (
    <>


      <motion.div 
      drag
      dragConstraints={props.bounds}
      dragElastic={0}
      dragMomentum={false}
      dragPropagation={true}
      whileTap={{ cursor: "grabbing" }}
      className="z-20 absolute"
      style={props.position}
      animate={props.animation}
      transition={{ duration: 1 }}
      
      
      >
        <div
          ref={nodeRef}
          id={`player${props.index+1}`}
          className=" playerWrapper mx-auto my-auto player flex  rounded-full absolute z-10 p-2"
      
        >
          <div className=" playerTopCover flex w-[60px] h-[60px] top-[0px] left-[0px] absolute z-20 rounded-full"></div>
          <img
            className=" player flex  rounded-full  w-[60px] h-[60px] top-[0px] left-[0px] mx-auto  absolute bg-transparent z-1 "
            src={props.image}
          ></img>
          <div className="nameWrapper flex-col w-[100px]  top-[60px] absolute z-12">
            <p className={`relative z-10 text-black font-black ${props.showName}`} >{props.name}</p>

          </div>
        </div>
      </motion.div>


{/* 

      
      <Draggable 
      nodeRef={nodeRef}
      bounds={{left: -10, top: -10, right: 580, bottom: 770}}
      position={props.position}
      
      >
        <div
          ref={nodeRef}
          id={`player${props.index+1}`}
          className=" playerWrapper mx-auto my-auto player flex  rounded-full absolute z-10 p-2"
      
        >
          <div className=" playerTopCover flex w-[60px] h-[60px] top-[0px] left-[0px] absolute z-20 rounded-full"></div>
          <img
            className=" player flex  rounded-full  w-[60px] h-[60px] top-[0px] left-[0px] mx-auto  absolute bg-transparent z-1 "
            src={props.image}
          ></img>
          <div className="nameWrapper flex-col w-[100px]  top-[60px] absolute z-12">
            <p className={`relative z-10 text-black font-black ${props.showName}`} >{props.name}</p>

          </div>
        </div>
      </Draggable> */}
      
    </>
  );
};

export default Player;
