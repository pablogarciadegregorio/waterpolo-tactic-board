import React from "react";
import Draggable from "react-draggable";
import "../index.css";
import "../../css/style.css";
import { useRef, useState, useEffect } from "react";
import Player from "../components/singlePlayer";
import { motion } from "framer-motion";

const Board = () => {
  const constraintPlayerRef = React.useRef(null); //Boundaries for draggable field elements
  const constraintRef = useRef(null); // Ball and Players
  const [ballGlow, setBallGlow] = useState("");
  const [localPlayers, setLocalPlayers] = useState([
    {
      position: { x: 500, y: 58 },
      name: "Player 1",
      image: "src/assets/Img/local.PNG",
    },
    {
      position: { x: 420, y: 168 },
      name: "Player 2",
      image: "src/assets/Img/local.PNG",
    },
    {
      position: { x: 265, y: 226 },
      name: "Player 3",
      image: "src/assets/Img/local.PNG",
    },
    {
      position: { x: 110, y: 168 },
      name: "Player 4",
      image: "src/assets/Img/local.PNG",
    },
    {
      position: { x: 40, y: 58 },
      name: "Player 5",
      image: "src/assets/Img/local.PNG",
    },
    {
      position: { x: 265, y: 58 },
      name: "Player 6",
      image: "src/assets/Img/local.PNG",
    },
  ]);

  const [localNumber, setLocalNumber] = useState(0);
  const [visitorPlayers, setVisitorPlayers] = useState([
    {
      position: { x: 40, y: 660 },
      name: "Player 1",
      image: "src/assets/Img/visitante.PNG",
    },
    {
      position: { x: 110, y: 555 },
      name: "Player 2",
      image: "src/assets/Img/visitante.PNG",
    },
    {
      position: { x: 265, y: 500 },
      name: "Player 3",
      image: "src/assets/Img/visitante.PNG",
    },
    {
      position: { x: 420, y: 557 },
      name: "Player 4",
      image: "src/assets/Img/visitante.PNG",
    },
    {
      position: { x: 500, y: 660 },
      name: "Player 5",
      image: "src/assets/Img/visitante.PNG",
    },
    {
      position: { x: 265, y: 660 },
      name: "Player 6",
      image: "src/assets/Img/visitante.PNG",
    },
  ]);
  const [visitorNumber, setVisitorNumber] = useState(0);
  const [play01L, setPlay01L] = useState({});
  const [play01V, setPlay01V] = useState({});
  const [showName, setShowName] = useState("");
  const [logoStyle, setLogoStyle] = useState({});
  const [goalStyle, setGoalStyle] = useState({});
  

 
console.log(goalStyle)
  // #### FUNCTIONS #### \\

  // CENTER GOALS AND LOGO
 
  useEffect(() => {
    function resizeCenterGoal() {
      if (window.innerWidth < 640) {setGoalStyle ({left:`${parseInt(50-(100*100/window.innerWidth/2))}%`, right:`${parseInt(50-(100*100/window.innerWidth/2))}%` })}
      else {setGoalStyle({left:`${parseInt(50-(100*100/800/2))}%`})}
    }

    function resizeCenterLogo() {
      if (window.innerWidth < 640) {
        let dimensions = parseInt(window.innerHeight/4) 
        setLogoStyle ( {left:`${parseInt(50-(dimensions*100/window.innerWidth/2))}%`, top:`${parseInt(50-(dimensions*100/window.innerHeight/2))}%`,
                        right:`${parseInt(50-(dimensions*100/window.innerWidth/2))}%`, bottom:`${parseInt(50-(dimensions*100/window.innerHeight/2))}%`,
                        height:`${dimensions}px`, width:`${dimensions}px`})
        }
    }


    // Attach the event listener to the window object
    window.addEventListener('resize', () => {resizeCenterGoal(); resizeCenterLogo()});

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', () => {resizeCenterGoal(); resizeCenterLogo()});
    };
  }, []);



const calculateCenterGoal = () => {
  
  if (window.innerWidth < 640) {return goalStyle}
  else {return {left:`${parseInt(50-(100*100/800/2))}%`}}}

const calculateCenterLogo = () => {

  if (window.innerWidth < 640) {

  return logoStyle
  }
}



  // BALL GLOW EFFECT

  const ballDragged = () => {
    setBallGlow("ballDragged");
  };


  // SETTING NUMBER OF PLAYERS

  const increaseLocalPlayers = () => {
    if (localNumber < 6) {
      setLocalNumber(localNumber + 1);
    }
  };

  const decreaseLocalPlayers = () => {
    if (localNumber > 0) {
      setLocalNumber(localNumber - 1);
    }
  };

  const increaseVisitingPlayers = () => {
    if (visitorNumber < 6) {
      setVisitorNumber(visitorNumber + 1);
    }
  };

  const decreaseVisitingPlayers = () => {
    if (visitorNumber > 0) {
      setVisitorNumber(visitorNumber - 1);
    }
  };

  // MAPPING  PLAYERS

  const handleLocalPlayers = () => {
    return localPlayers
      .slice(0, localNumber)
      .map((item, index) => (
        <Player
          index={index}
          key={index}
          position={item.position}
          bounds={constraintPlayerRef}
          name={item.name}
          image={item.image}
          showName={showName}
          animation={play01L}
        />
      ));
  };

  const handleVisitorPlayers = () => {
    return visitorPlayers
      .slice(0, visitorNumber)
      .map((item, index) => (
        <Player
          index={index}
          key={index}
          position={item.position}
          bounds={constraintPlayerRef}
          name={item.name}
          image={item.image}
          showName={showName}
          animation={play01V}
        />
      ));
  };

  const handlePlayers = () => {
    const local = handleLocalPlayers;
    const visiting = handleVisitorPlayers;

    return (
      <>
        {local()}
        {visiting()}
      </>
    );
  };

  // HIDING/SHOWING NAMES

  const handleShowName = () => {
    if (showName === "") {
      setShowName("hidden");
    } else {
      setShowName("");
    }
  };

  // TACTICS \\

  const onevsone = () => {
    let localPos = [
      {
        position: { x: 254, y: 385 },
        name: "Player 1",
        image: "src/assets/Img/local.PNG",
      },
      {
        position: { x: 420, y: 168 },
        name: "Player 2",
        image: "src/assets/Img/local.PNG",
      },
      {
        position: { x: 265, y: 226 },
        name: "Player 3",
        image: "src/assets/Img/local.PNG",
      },
      {
        position: { x: 110, y: 168 },
        name: "Player 4",
        image: "src/assets/Img/local.PNG",
      },
      {
        position: { x: 40, y: 58 },
        name: "Player 5",
        image: "src/assets/Img/local.PNG",
      },
      {
        position: { x: 265, y: 58 },
        name: "Player 6",
        image: "src/assets/Img/local.PNG",
      },
    ];

    let visitingPos = [
      {
        position: { x: 225, y: 438 },
        name: "Player 1",
        image: "src/assets/Img/visitante.PNG",
      },
      {
        position: { x: 110, y: 555 },
        name: "Player 2",
        image: "src/assets/Img/visitante.PNG",
      },
      {
        position: { x: 265, y: 500 },
        name: "Player 3",
        image: "src/assets/Img/visitante.PNG",
      },
      {
        position: { x: 420, y: 557 },
        name: "Player 4",
        image: "src/assets/Img/visitante.PNG",
      },
      {
        position: { x: 500, y: 660 },
        name: "Player 5",
        image: "src/assets/Img/visitante.PNG",
      },
      {
        position: { x: 265, y: 660 },
        name: "Player 6",
        image: "src/assets/Img/visitante.PNG",
      },
    ];

    setLocalPlayers(localPos);
    setVisitorPlayers(visitingPos);
    setLocalNumber(1);
    setVisitorNumber(1);
    setPlay01L({ y: 50 });
    setPlay01V({ y: 110 });
  };

  return (
    <motion.div
      className="board  w-full 2xl:w-[600px] xl:w-[600px] lg:w-[600px] md:w-[600px] sm:w-[600px] 2xl:my-4 xl:my-4 lg:my-4 md:my-4 sm:my-4
      h-screen 2xl:h-[800px] xl:h-[800px] lg:h-[800px] md:h-[800px] sm:h-[800px] flex-1 
      mx-auto  relative rounded-md  border-4 border-white
      bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-sky-500"
    > 

  {/* FIELD LINES */}

       <div className="goalLineTop  bg-white w-full sm:w-[592px] lg:w-[592px] xl:w-[592px] 2xl:w-[592px] h-[3px] mx-auto top-[3%] absolute"></div>
       <div className="2mLine w-full sm:w-[592px] lg:w-[592px] xl:w-[592px] 2xl:w-[592px] bg-red-600 h-[3px]  mx-auto absolute 
       top-[10%] sm:top-[75px] lg:top-[75px] xl:top-[75px] 2xl:top-[75px]"></div>
       <div className="5mLine w-full sm:w-[592px] lg:w-[592px] xl:w-[592px] 2xl:w-[592px] bg-yellow-300 h-[3px]  mx-auto absolute
       top-[25%] sm:top-[180px] md:top-[180px] lg:top-[180px] xl:top-[180px] 2xl:top-[180px]"></div>
       <div className="middleLine w-full sm:w-[592px] lg:w-[592px] xl:w-[592px] 2xl:w-[592px] h-[3px]  bg-none absolute 
        top-[50%] sm:top-[400px] md:top-[400px] lg:top-[400px] xl:top-[400px] 2xl:top-[400px] items-center border-dashed border-2 border-white"></div>
       <div className="5mLine w-full sm:w-[592px] lg:w-[592px] xl:w-[592px] 2xl:w-[592px] bg-yellow-300 h-[3px]   absolute
       bottom-[25%] sm:bottom-[180px] md:bottom-[180px] lg:bottom-[180px] xl:bottom-[180px] 2xl:bottom-[180px]"></div>
       <div className="2mLine w-full sm:w-[592px] lg:w-[592px] xl:w-[592px] 2xl:w-[592px] bg-red-600 h-[3px]  mx-auto absolute 
       bottom-[10%] sm:bottom-[75px] lg:bottom-[75px] xl:bottom-[75px] 2xl:bottom-[75px]"></div>
       <div className="goalLineBot bg-white w-full sm:w-[592px] lg:w-[592px] xl:w-[592px] 2xl:w-[592px] h-[3px] mx-auto top-[97%] absolute "></div>
       <img
         className="wpLogo sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[200px] 2xl:w-[200px] sm:h-[200px] md:h-[200px] lg:h-[200px] xl:h-[200px] 2xl:-[200px] 
         absolute sm:left-[194px] md:left-[194px] lg:left-[194px] xl:left-[194px] 2xl:left-[194px] sm:top-[299px] md:top-[299px] xl:top-[299px] 2xl:top-[299px] opacity-10 z-1"
         src="./src/assets/Img/logo_background.png"
         style={calculateCenterLogo()}
       ></img>

   {/* GOALS */}

   <img
     className="goal  w-[100px] sm:w-[100px] lg:w-[100px] xl:w-[100px] 2xl:w-[100px] left-[36%] top-[0%] absolute z-20
     xl:left-[43%] 2xl:left-[43%] lg:left-[43%]"
     src="./src/assets/Img/GoalTopv2.png"
     style={calculateCenterGoal()}
   ></img>
   <img
     className={`goal  w-[100px] sm:w-[100px] lg:w-[100px] xl:w-[100px] 2xl:w-[100px] m-auto top-[95%] absolute z-[20]`}
    src="./src/assets/Img/GoalBotv2.png"
    style={calculateCenterGoal()}
   ></img>


<div className="  laneMarkers absolute">
         <div className="laneMarketTop hidden sm:flex md:flex lg:flex xl:flex 2xl:flex  flex-row relative top-[20px]">
           <div className="h-[10px] w-[10px] mx-1 bg-red-600 relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-2 bg-white relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1  bg-red-600 relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] ml-[110px] mr-1 bg-red-600 relative  left-[2px] rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
           <div className="h-[10px] w-[10px] mx-[1px] bg-red-600 relative  rounded-sm "></div>
         </div>

         <div className="laneMarketBot hidden sm:flex md:flex lg:flex xl:flex 2xl:flex flex-row top-[754px] relative">
           <div className="h-[10px] w-[10px] mx-1 bg-red-600 relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-2 bg-white relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] ml-[108px] mr-1 bg-red-600 relative   left-[2px] rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
           <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
           <div className="h-[10px] w-[10px] mx-[1px] bg-red-600 relative   rounded-sm "></div>
         </div>
       </div>







     </motion.div>

    // <motion.div
    //   ref={constraintRef}
    //   className="board   2xl:w-[600px] xl:w-[600px] lg:w-[600px] md:w-[600px] sm:w-[200px] h-[800px] flex-1 mx-auto rounded-md border-4 border-white relative
    //      bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-sky-500"
    // >
    // <motion.div className="playerBounds z-0 bg-transparent w-[540px] h-[740px] absolute"
    //             ref={constraintPlayerRef}></motion.div>

    //   <motion.div
    //     drag
    //     dragConstraints={{ top:-400, bottom:388, left: -285, right: 285 }}
    //     dragElastic={0}
    //     dragMomentum={false}
    //     dragPropagation={true}
    //     whileTap={{ cursor: "grabbing" }}
    //     whileDrag={ballDragged}
    //     className="z-30 absolute"
    //     style={{top:'386px', left:'280px'}}

    //   >
    //   <div

    //       className="ballCover w-[30px] h-[30px] absolute z-30"
    //     >
    //       <div className=" wpBallCover w-[30px] h-[30px] mx-auto  absolute bg-transparent rounded z-30"></div>
    //       <img
    //         id={ballGlow}
    //         className="wpBall w-[30px] h-[30px] relative mx-auto  z-10"
    //         src="./src/assets/Img/Wp_Ball.png"

    //         style={{ filter: `dropShadow(5px 5px 5px black)` }}
    //       ></img>
    //     </div>
    //   </motion.div>

    //   {handlePlayers()}

    //   {/* FIELD DRAWING */}

    //   <div className="goalLineTop bg-white w-[592px] h-[3px] mx-auto top-[15px] absolute"></div>
    //   <div className="2mLine w-[592px] bg-red-600 h-[3px]  mx-auto absolute top-[75px]"></div>
    //   <div className="5mLine w-[592px] bg-yellow-300 h-[3px] top-[180px] mx-auto absolute"></div>
    //   <div className="middleLine w-[592px] h-[3px]  bg-none absolute top-[400px] items-center border-dashed border-2 border-white"></div>
    //   <div className="5mLine w-[592px] bg-yellow-300 h-[3px] bottom-[180px] mx-auto absolute"></div>
    //   <div className="2mLine w-[592px] bg-red-600 h-[3px]  mx-auto absolute bottom-[75px]"></div>
    //   <div className="goalLineBot bg-white w-[592px] h-[3px] mx-auto bottom-[15px] absolute "></div>
    //   <img
    //     className="wpLogo w-[200px] h-[200px] absolute left-[194px]  top-[299px] opacity-10 z-1"
    //     src="./src/assets/Img/logo_background.png"
    //   ></img>

    //   {/* LANE MARKERS */}

    //   <div className="laneMarkers absolute">
    //     <div className="laneMarketTop flex flex-row relative">
    //       <div className="h-[10px] w-[10px] mx-1 bg-red-600 relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1  bg-red-600 relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] ml-[115px] mr-1 bg-red-600 relative  left-[2px] rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
    //       <div className="h-[10px] w-[10px] mx-[1px] bg-red-600 relative  rounded-sm "></div>
    //     </div>

    //     <div className="laneMarketBot flex flex-row top-[761px] relative">
    //       <div className="h-[10px] w-[10px] mx-1 bg-red-600 relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] ml-[115px] mr-1 bg-red-600 relative   left-[2px] rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
    //       <div className="h-[10px] w-[10px] mx-[1px] bg-red-600 relative   rounded-sm "></div>
    //     </div>
    //   </div>

    //   {/* LATERAL MARKS */}
    //   <div className="2mMark  bg-red-600 h-[56px] w-[10px] absolute left-[-20px] top-[18px] "></div>
    //   <div className="5mMark  bg-yellow-300 h-[97px] w-[10px] absolute left-[-20px] top-[80px] "></div>
    //   <div className="safeMark bg-green-400 h-[419px] w-[10px] absolute left-[-20px] top-[185px] "></div>
    //   <div className="5mMark  bg-yellow-300 h-[97px] w-[10px] absolute left-[-20px] bottom-[80px] "></div>
    //   <div className="2mMark  bg-red-600 h-[56px] w-[10px] absolute left-[-20px] bottom-[18px] "></div>

    //   {/* GOALS */}

    //   <img
    //     className="goal ml-[250px] mr-[246px] w-[100px] mt-[0px] top-[-15px] absolute"
    //     src="./src/assets/Img/GoalTopv2.png"
    //   ></img>
    //   <img
    //     className="goal ml-[250px] mr-[246px] w-[100px] mt-[0px] bottom-[1px] absolute z-[20]"
    //     src="./src/assets/Img/GoalBotv2.png"
    //   ></img>

    // {/* BUTTONS */}

    //   <button
    //     className="right-[-135px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded absolute"
    //     onClick={increaseLocalPlayers}
    //   >
    //     + Local Player
    //   </button>
    //   <button
    //     className="right-[-164px] top-[50px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded absolute"
    //     onClick={decreaseLocalPlayers}
    //   >
    //     - Local Player
    //   </button>
    //   <button
    //     className="right-[-135px] top-[100px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded absolute"
    //     onClick={increaseVisitingPlayers}
    //   >
    //     + Visiting Player
    //   </button>
    //   <button
    //     className="right-[-164px] top-[150px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded absolute"
    //     onClick={decreaseVisitingPlayers}
    //   >
    //     - Visiting Player
    //   </button>

    //   <button
    //     className="right-[-145px] top-[200px] h-[20px] w-[126px] bg-red-500 hover:bg-red-700 text-white   border border-red-700 rounded absolute"
    //     onClick={handleShowName}
    //   >
    //     {showName===''? "Hide Names" : "Show Names"}
    //   </button>
    //   <button
    //     className="right-[-145px] top-[250px] h-[20px] w-[126px] bg-red-500 hover:bg-red-700 text-white   border border-red-700 rounded absolute"
    //     onClick={onevsone}
    //   >
    //     1vs1
    //   </button>
    // </motion.div>
  );
};

export default Board;
