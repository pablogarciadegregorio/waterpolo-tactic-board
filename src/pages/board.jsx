import React from "react";

import "../index.css";
import "../../css/style.css";
import { useRef, useState, useEffect } from "react";
import Player from "../components/singlePlayer";
import LaneMarkers from "../components/laneMarkers";
import Ball from "../components/ball";
import Goals from "../components/goals";
import FieldLines from "../components/fieldLines";
import Buttons from "../components/buttons"; 
import { motion } from "framer-motion";

const Board = () => {
  const constraintPlayerRef = useRef(null); //Boundaries for draggable field elements
  const constraintBallRef = useRef(null); // Ball and Players
  const [localPlayers, setLocalPlayers] = useState([{}]);
  const [localNumber, setLocalNumber] = useState(0);
  const [visitorPlayers, setVisitorPlayers] = useState([
    {
      position: { x: 40, y: 660 },
      name: "Player 1",
      image: "./static/img/visitante.PNG",
    },
    {
      position: { x: 110, y: 555 },
      name: "Player 2",
      image: "./static/img/visitante.PNG",
    },
    {
      position: { x: 265, y: 500 },
      name: "Player 3",
      image: "./static/img/visitante.PNG",
    },
    {
      position: { x: 420, y: 557 },
      name: "Player 4",
      image: "./static/img/visitante.PNG",
    },
    {
      position: { x: 500, y: 660 },
      name: "Player 5",
      image: "./static/img/visitante.PNG",
    },
    {
      position: { x: 265, y: 660 },
      name: "Player 6",
      image: "./static/img/visitante.PNG",
    },
  ]);
  const [visitorNumber, setVisitorNumber] = useState(0);
   const [showName, setShowName] = useState("hidden");
  const [logoStyle, setLogoStyle] = useState({
    left: `${parseInt(
      50 - ((parseInt(window.innerHeight) / 4) * 100) / window.innerWidth / 2
    )}%`,
    right: `${parseInt(
      50 - ((parseInt(window.innerHeight) / 4) * 100) / window.innerWidth / 2
    )}%`,
    top: `${parseInt(
      50 - ((parseInt(window.innerHeight) / 4) * 100) / window.innerHeight / 2
    )}%`,
    bottom: `${parseInt(
      50 - ((parseInt(window.innerHeight) / 4) * 100) / window.innerHeight / 2
    )}%`,
    height: `${parseInt(window.innerHeight) / 4}px`,
    width: `${parseInt(window.innerHeight) / 4}px`,
  });
  const [goalStyle, setGoalStyle] = useState({
    left: `${parseInt(50 - (100 * 100) / window.innerWidth / 2)}%`,
    right: `${parseInt(50 - (100 * 100) / window.innerWidth / 2)}%`,
  });
  const [playerBounds, setPlayerBounds] = useState({})
  const [ballGlow, setBallGlow] = useState("");




  // #### FUNCTIONS #### \\

  // CENTER GOALS AND LOGO



  useEffect(() => {
    // ON LOAD CENTERS LOGO AND GOALS DEPENDING ON DEVICE

    // SET LOGO STYLE
    if (window.innerWidth < 640) {
      let dimensions = parseInt(window.innerHeight / 4);
      setLogoStyle({
        left: `${parseInt(50 - (dimensions * 100) / window.innerWidth / 2)}%`,
        top: `${parseInt(50 - (dimensions * 100) / window.innerHeight / 2)}%`,
        right: `${parseInt(50 - (dimensions * 100) / window.innerWidth / 2)}%`,
        bottom: `${parseInt(
          50 - (dimensions * 100) / window.innerHeight / 2
        )}%`,
        height: `${dimensions}px`,
        width: `${dimensions}px`,
      });
    } else {
      setLogoStyle({
        left: `${parseInt(50 - (200 * 100) / 600 / 2)}%`,
        right: `${parseInt(50 - (200 * 100) / 600 / 2)}%`,
        top: `${parseInt(50 - (200 * 100) / 800 / 2)}%`,
        bottom: `${parseInt(50 - (200 * 100) / 800 / 2)}%`,
      });
    }


      // SET GOAL STYLE
    if (window.innerWidth < 640) {
      setGoalStyle({
        left: `${parseInt(50 - (100 * 100) / window.innerWidth / 2)}%`,
        right: `${parseInt(50 - (100 * 100) / window.innerWidth / 2)}%`,
      });
    } else {
      setGoalStyle({ left: `${parseInt(50 - (100 * 100) / 792 / 2)}%` });
    }

    // SET INITIAL PLAYERS

    if (window.innerWidth > 640) {

      setPlayerBounds({top:0, left:0, right:600-60, bottom:800-60})

      setLocalPlayers([
        {
          position: { x: 500, y: 58 },
          name: "Player 1",
          image: "./static/img/local.PNG",
        },
        {
          position: { x: 420, y: 168 },
          name: "Player 2",
          image: "./static/img/local.PNG",
        },
        {
          position: { x: 265, y: 226 },
          name: "Player 3",
          image: "./static/img/local.PNG",
        },
        {
          position: { x: 110, y: 168 },
          name: "Player 4",
          image: "./static/img/local.PNG",
        },
        {
          position: { x: 40, y: 58 },
          name: "Player 5",
          image: "./static/img/local.PNG",
        },
        {
          position: { x: 265, y: 58 },
          name: "Player 6",
          image: "./static/img/local.PNG",
        },
      ]);
    }
      else { 
        
        let right =  window.innerWidth -60
        let bottom = window.innerHeight -60

        setPlayerBounds(constraintPlayerRef)

        let player1 = parseInt(window.innerWidth*0.84 -30);  let player1H = parseInt(window.innerHeight*0.1-20); let player1HV = parseInt(window.innerHeight*0.85);
        let player2 = parseInt(window.innerWidth*0.7 -20); let player2H = parseInt(window.innerHeight*0.25-20); let player2HV = parseInt(window.innerHeight*0.70)
        let player3 = parseInt(window.innerWidth*0.5 -30); let player3H = parseInt(window.innerHeight*0.35-20); let player3HV = parseInt(window.innerHeight*0.60)
        let player4 = parseInt(window.innerWidth*0.3 -35); let player4H = parseInt(window.innerHeight*0.25-20); let player4HV = parseInt(window.innerHeight*0.70)
        let player5 = parseInt(window.innerWidth*0.16 -20); let player5H = parseInt(window.innerHeight*0.1-20); let player5HV = parseInt(window.innerHeight*0.85);
        let player6 = parseInt(window.innerWidth*0.5 -30); let player6H = parseInt(window.innerHeight*0.1-20); let player6HV = parseInt(window.innerHeight*0.85);
        
        setLocalPlayers([
        {
          position: {x: player1, y: player1H},
          name: "Player 1",
          image: "./static/img/local.PNG",
        },
        {
          position: { x: player2, y: player2H },
          name: "Player 2",
          image: "./static/img/local.PNG",
        },
        {
          position: { x: player3, y: player3H },
          name: "Player 3",
          image: "./static/img/local.PNG",
        },
        {
          position: { x: player4, y: player4H },
          name: "Player 4",
          image: "./static/img/local.PNG",
        },
        {
          position: { x: player5, y: player5H },
          name: "Player 5",
          image: "./static/img/local.PNG",
        },
        {
          position: { x: player6, y: player6H },
          name: "Player 6",
          image: "./static/img/local.PNG",
        },
      ]);
    
      setVisitorPlayers([
        {
          position: {x: player1, y: player1HV},
          name: "Player 1",
          image: "./static/img/visitante.PNG",
        },
        {
          position: { x: player2, y: player2HV },
          name: "Player 2",
          image: "./static/img/visitante.PNG",
        },
        {
          position: { x: player3, y: player3HV },
          name: "Player 3",
          image: "./static/img/visitante.PNG",
        },
        {
          position: { x: player4, y: player4HV },
          name: "Player 4",
          image: "./static/img/visitante.PNG",
        },
        {
          position: { x: player5, y: player5HV },
          name: "Player 5",
          image: "./static/img/visitante.PNG",
        },
        {
          position: { x: player6, y: player6HV },
          name: "Player 6",
          image: "./static/img/visitante.PNG",
        },
      ]);

    }



  }, []);

  useEffect(() => {
    // WATCHES WIDTH SIZE TO ADJUST PROPORTIONS ON WIDTH CHANGE
    function resizeCenterGoal() {
      if (window.innerWidth < 640) {
        setGoalStyle({
          left: `${parseInt(50 - (100 * 100) / window.innerWidth / 2)}%`,
          right: `${parseInt(50 - (100 * 100) / window.innerWidth / 2)}%`,
        });
      } else {
        setGoalStyle({ left: `${parseInt(50 - (100 * 100) / 800 / 2)}%` });
      }
    }

    function resizeCenterLogo() {
      if (window.innerWidth < 640) {
        let dimensions = parseInt(window.innerHeight / 4);
        setLogoStyle({
          left: `${parseInt(50 - (dimensions * 100) / window.innerWidth / 2)}%`,
          top: `${parseInt(50 - (dimensions * 100) / window.innerHeight / 2)}%`,
          right: `${parseInt(
            50 - (dimensions * 100) / window.innerWidth / 2
          )}%`,
          bottom: `${parseInt(
            50 - (dimensions * 100) / window.innerHeight / 2
          )}%`,
          height: `${dimensions}px`,
          width: `${dimensions}px`,
        });
      } else {
        setLogoStyle({
          left: `${parseInt(50 - (200 * 100) / 600 / 2)}%`,
          right: `${parseInt(50 - (200 * 100) / 600 / 2)}%`,
          top: `${parseInt(50 - (200 * 100) / 800 / 2)}%`,
          bottom: `${parseInt(50 - (200 * 100) / 800 / 2)}%`,
        });
      }
    }

    // Attach the event listener to the window object
    window.addEventListener("resize", () => {
      resizeCenterGoal();
      resizeCenterLogo();
    });

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", () => {
        resizeCenterGoal();
        resizeCenterLogo();
      });
    };
  }, []);

  const calculateCenterGoal = () => {
    if (window.innerWidth < 640) {
      return goalStyle;
    } else {
      return { left: `${parseInt(50 - (100 * 100) / 800 / 2)}%` };
    }
  };

  const calculateCenterLogo = () => {
    return logoStyle;
  };

  // BALL STARTING POSITION

  const ballStartingPosition = () => {
    if (window.innerWidth < 640) {
      return {
        left: `${parseInt(window.innerWidth / 2 - 20)}px`,
        right: `${parseInt(window.innerWidth / 2 - 20)}px`,
        top: `${parseInt(window.innerHeight / 2 - 15)}px`,
        bottom: `${parseInt(window.innerHeight / 2 - 20)}px`,
      };
    } else {
      return { top: "386px", left: "280px" };
    }
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
          playerBounds={playerBounds}
          name={item.name}
          image={item.image}
          showName={showName}
         
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
          playerBounds={playerBounds}
          name={item.name}
          image={item.image}
          showName={showName}
          
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

  

 


  return (
    <motion.div
      className="board  w-full 2xl:w-[600px] xl:w-[600px] lg:w-[600px] md:w-[600px] sm:w-[600px] 2xl:my-4 xl:my-4 lg:my-4 md:my-4 sm:my-4
      h-screen 2xl:h-[800px] xl:h-[800px] lg:h-[800px] md:h-[800px] sm:h-[800px] flex-1 
      mx-auto  relative rounded-md  border-4 border-white
      bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-sky-500"
    >
      {/* INVISIBLE LAYERS TO SET BOUNDARIES (YOU CANNOT UPDATE DRAGCONSTRAINTS WITH USESTATES) */}

      <motion.div
        className="ballBounds z-0 bg-transparent w-full h-full sm:w-[570px] md:w-[570px] lg:w-[570px] xl:w-[570px] 2xl:w-[570px] sm:h-[770px] md:h-[770px] lg:h-[770px] xl:h-[770px] 2xl:h-[770px] absolute"
        ref={constraintBallRef}
      ></motion.div>
      <motion.div
        className="playerBounds z-0 bg-transparent w-[calc(100%-50px)] h-[calc(100%-50px)] sm:w-[540px] md:w-[540px] lg:w-[540px] xl:w-[540px] 2xl:w-[540px] sm:h-[740px] md:h-[740px] lg:h-[740px] xl:h-[740px] 2xl:h-[740px] absolute"
        ref={constraintPlayerRef}
      ></motion.div>

      {/* FIELD AND LANES */}

      <FieldLines calculateCenterLogo={calculateCenterLogo}/>
      <Goals calculateCenterGoal={calculateCenterGoal} />
      <LaneMarkers />
      <Ball
        ballStartingPosition={ballStartingPosition}
        constraintBallRef={constraintBallRef}
      />

      {handlePlayers()}
      <Buttons increaseLocalPlayers={increaseLocalPlayers} increaseVisitingPlayers={increaseVisitingPlayers} decreaseLocalPlayers={decreaseLocalPlayers}
      decreaseVisitingPlayers={decreaseVisitingPlayers} showName={showName} handleShowName={handleShowName}/>
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
