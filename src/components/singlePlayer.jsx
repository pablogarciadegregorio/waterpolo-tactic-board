

import "../index.css";
// import "../../dist/output.css";

import { motion } from "framer-motion"

const Player = (props) => {
 


  return (
    <>


      <motion.div 
      drag
      dragConstraints={props.playerBounds}
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
          
          id={`player${props.index+1}`}
          className=" playerWrapper mx-auto my-auto player flex  rounded-full absolute z-10 p-2"
      
        >
          <div className=" playerTopCover flex w-[50px] h-[50px] top-[0px] left-[0px]   absolute z-20 rounded-full"></div>
          <img
            className=" player flex  rounded-full  w-[50px] h-[50px] top-[0px] left-[0px] mx-auto  absolute bg-transparent z-1 "
            src={props.image}
          ></img>
          <div className="nameWrapper flex-col  top-[100%] left-[-10%] text-xs relative z-12">
            <p className={`relative z-10 w-[50px] inline-flex text-black font-black ${props.showName}`} >{props.name}</p>

          </div>
        </div>
      </motion.div>



      
    </>
  );
};

export default Player;
