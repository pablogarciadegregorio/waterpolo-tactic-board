const Buttons = (props) => {

    return (
      <>
      <button className=" top-[2%] left-[calc(100%-40px)] w-[20px] h-[20px] flex items-center justify-center bg-opacity-30  bg-black text-white font-bold   rounded-full absolute z-50
      sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
         onClick={props.increaseLocalPlayers}>
          +
      </button>
      <button className=" top-[2%] left-[calc(100%-65px)] w-[20px] h-[20px] flex items-center justify-center bg-opacity-30  bg-black text-white font-bold   rounded-full absolute z-50
      sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
         onClick={props.decreaseLocalPlayers}>
          -
      </button>
      <button className=" top-[96%] left-[calc(100%-40px)] w-[20px] h-[20px] flex items-center justify-center bg-opacity-30  bg-black text-white font-bold   rounded-full absolute z-50
      sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
         onClick={props.increaseVisitingPlayers}>
          +
      </button>
      <button className=" top-[calc(96%)] left-[calc(100%-65px)] w-[20px] h-[20px] flex items-center justify-center bg-opacity-30  bg-black text-white font-bold   rounded-full absolute z-50
      sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
         onClick={props.decreaseVisitingPlayers}>
          -
      </button>
      <button className=" top-[95.5%] left-[20px] text-xs p-1 flex items-center justify-center bg-opacity-30  bg-black text-white font-bold   rounded absolute z-50
      sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
         onClick={props.handleShowName}>
           {props.showName===''? "Hide Names" : "Show Names"}
      </button>
      <button
         className="left-[calc(100%+10px)] w-[30px] h-[30px] top-[5%] justify-center  items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg absolute
         hidden sm:flex md:flex lg:flex xl:flex 2xl:flex"
       onClick={props.increaseVisitingPlayers}
       >
         + 
       </button>
       <button
         className="left-[calc(100%+50px)] w-[30px] h-[30px] top-[5%] justify-center  items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg absolute
         hidden sm:flex md:flex lg:flex xl:flex 2xl:flex"
         onClick={props.decreaseVisitingPlayers}
       >
         - 
       </button>
       <button
        className="left-[calc(100%+10px)]  w-[30px] h-[30px] justify-center f items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded absolute
        hidden sm:flex md:flex lg:flex xl:flex 2xl:flex"
         onClick={props.increaseLocalPlayers}
       >
         + 
       </button>
       <button
         className="left-[calc(100%+50px)] w-[30px] h-[30px] justify-center  items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded absolute
         hidden sm:flex md:flex lg:flex xl:flex 2xl:flex"
         onClick={props.decreaseLocalPlayers}
       >
         - 
       </button>
       <button
         className="left-[calc(100%+10px)] top-[10%] w-[75px] ] text-[10px] py-1 justify-center items-center bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 border border-amber-700 rounded absolute
         hidden sm:flex md:flex lg:flex xl:flex 2xl:flex"
         onClick={props.handleShowName}
       >
         {props.showName===''? "Hide Names" : "Show Names"} 
       </button>
      

      </>
    )

  }

  export default Buttons