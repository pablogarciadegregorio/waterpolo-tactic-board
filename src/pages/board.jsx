import React, { useEffect } from "react";
import Draggable from "react-draggable";
import "../index.css";
import "../../css/style.css";
import { useRef, useState } from "react";
import Player from "../components/singlePlayer";
import { motion } from "framer-motion"

const Board = () => {
  const constraintPlayerRef = React.useRef(null);   //Boundaries for draggable field elements
  const constraintRef = useRef(null)                // Ball and Players
  const [ballGlow, setBallGlow] = useState("");
  const [localPlayers, setLocalPlayers] = useState([
    { position: { x:500, y:58 }, name: "Player 1", image:"src/assets/Img/local.PNG",},
    { position: { x: 420, y: 168 }, name: "Player 2", image:"src/assets/Img/local.PNG",},
    { position: { x: 265, y: 226 }, name: "Player 3", image:"src/assets/Img/local.PNG",},
    { position: { x: 110, y: 168 }, name: "Player 4", image:"src/assets/Img/local.PNG",},
    { position: { x: 40, y: 58 }, name: "Player 5", image:"src/assets/Img/local.PNG",},
    { position: { x: 265, y: 58 }, name: "Player 6", image:"src/assets/Img/local.PNG",},
  ]);

  const [localNumber, setLocalNumber] = useState(0);
  const [visitorPlayers, setVisitorPlayers] = useState([
    { position: { x: 40, y: 660 }, name: "Player 1", image:"src/assets/Img/visitante.PNG",  },
    { position: { x: 110, y: 555 }, name: "Player 2", image:"src/assets/Img/visitante.PNG",},
    { position: { x: 265, y: 500 }, name: "Player 3", image:"src/assets/Img/visitante.PNG", },
    { position: { x: 420, y: 557 }, name: "Player 4", image:"src/assets/Img/visitante.PNG",},
    { position: { x: 500, y: 660 }, name: "Player 5", image:"src/assets/Img/visitante.PNG", },
    { position: { x: 265, y: 660 }, name: "Player 6", image:"src/assets/Img/visitante.PNG",  },
  ]);
  const [visitorNumber, setVisitorNumber] = useState(0);
  const [play, setPlay] = useState('free')
  const [showName, setShowName] = useState('')



  // #### FUNCTIONS #### \\





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



  const handleLocalPlayers = ()  => {

  

      return ( localPlayers.slice(0, localNumber).map((item, index) =>   
      <Player index={index} key={index} position={item.position} bounds={constraintPlayerRef} name={item.name} image={item.image} showName={showName}/>
      ) )
    
    }

  const handleVisitorPlayers = () => {

    return ( visitorPlayers.slice(0, visitorNumber).map((item, index) =>   
    <Player index={index} key={index} position={item.position} bounds={constraintPlayerRef} name={item.name} image={item.image} showName={showName}/>
    ) )
   
  }  

  const handlePlayers = () => {
    
    const local = handleLocalPlayers
    const visiting = handleVisitorPlayers

    
    return( 
      <>
      {local()}
      {visiting()}
      </>
    )
   

  }



// HIDING/SHOWING NAMES

const handleShowName = () => {

  if (showName === '') {setShowName('hidden')}
  else {setShowName('')}
}
   

      
  
// TACTICS \\

const onevsone = () => {

 
  
    let localPos =  ([{ position: { x:254, y:385}, name: "Player 1", image:"src/assets/Img/local.PNG", }]);

    let visitingPos = ([{ position: { x: 225, y: 438 }, name: "Player 1", image:"src/assets/Img/visitante.PNG" }]);

    setLocalPlayers(localPos)
    setVisitorPlayers(visitingPos)
    setLocalNumber(1)
    setVisitorNumber(1)
    setPlay('1vs1')


}

  return (

    <motion.div
      ref={constraintRef}
      className="board w-[600px] h-[800px] flex-1 mx-auto rounded-md border-4 border-white relative
        // bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 to-sky-500"
    >
    <motion.div className="playerBounds z-0 bg-transparent w-[540px] h-[740px] absolute"
                ref={constraintPlayerRef}></motion.div>

      <motion.div
        drag
        dragConstraints={{ top:-400, bottom:388, left: -285, right: 285 }}
        dragElastic={0}
        dragMomentum={false}
        dragPropagation={true}
        whileTap={{ cursor: "grabbing" }}
        whileDrag={ballDragged}
        className="z-30 absolute"
        style={{top:'386px', left:'280px'}}
        

      >
      <div
          
          
          className="ballCover w-[30px] h-[30px] absolute z-30"
        >
          <div className=" wpBallCover w-[30px] h-[30px] mx-auto  absolute bg-transparent rounded z-30"></div>
          <img
            id={ballGlow}
            className="wpBall w-[30px] h-[30px] relative mx-auto  z-10"
            src="./src/assets/Img/Wp_Ball.png"
            
            style={{ filter: `dropShadow(5px 5px 5px black)` }}
          ></img>
        </div>
      </motion.div>  

      



       {/* WP BALL */}
      {/* <Draggable
        bounds={{ left: -10, top: -10, right: 580, bottom: 770 }} //Bound limits for ball movement set to field
        nodeRef={nodeRef}
        defaultPosition={{ x: 280, y: 386 }}
        onDrag={ballDragged} // Ball glows when dragged
        onStop={() => setBallGlow("")} //Glow dissapears when dragging stops
      >
        <div
          
          ref={nodeRef}
          className="ballCover w-[30px] h-[30px] absolute z-20"
        >
          <div className=" wpBallCover w-[30px] h-[30px] mx-auto  absolute bg-transparent rounded z-30"></div>
          <img
            id={ballGlow}
            className="wpBall w-[30px] h-[30px] relative mx-auto  z-10"
            src="./src/assets/Img/Wp_Ball.png"
            //   style={{boxShadow:`${ballGlow}`}}
            style={{ filter: `dropShadow(5px 5px 5px black)` }}
          ></img>
        </div>
      </Draggable> */}


      {handlePlayers()}
 
      


      {/* FIELD DRAWING */}

      <div className="goalLineTop bg-white w-[592px] h-[3px] mx-auto top-[15px] absolute"></div>
      <div className="2mLine w-[592px] bg-red-600 h-[3px]  mx-auto absolute top-[75px]"></div>
      <div className="5mLine w-[592px] bg-yellow-300 h-[3px] top-[180px] mx-auto absolute"></div>
      <div className="middleLine w-[592px] h-[3px]  bg-none absolute top-[400px] items-center border-dashed border-2 border-white"></div>
      <div className="5mLine w-[592px] bg-yellow-300 h-[3px] bottom-[180px] mx-auto absolute"></div>
      <div className="2mLine w-[592px] bg-red-600 h-[3px]  mx-auto absolute bottom-[75px]"></div>
      <div className="goalLineBot bg-white w-[592px] h-[3px] mx-auto bottom-[15px] absolute "></div>
      <img
        className="wpLogo w-[200px] h-[200px] absolute left-[194px]  top-[299px] opacity-10 z-1"
        src="./src/assets/Img/logo_background.png"
      ></img>

      {/* LANE MARKERS */}

      <div className="laneMarkers absolute">
        <div className="laneMarketTop flex flex-row relative">
          <div className="h-[10px] w-[10px] mx-1 bg-red-600 relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1  bg-red-600 relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] ml-[115px] mr-1 bg-red-600 relative  left-[2px] rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative  rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-white relative  rounded-sm "></div>
          <div className="h-[10px] w-[10px] mx-[1px] bg-red-600 relative  rounded-sm "></div>
        </div>

        <div className="laneMarketBot flex flex-row top-[761px] relative">
          <div className="h-[10px] w-[10px] mx-1 bg-red-600 relative   rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-white relative   rounded-sm "></div>
          <div className="h-[10px] w-[20px] mx-1 bg-red-600 relative   rounded-sm "></div>
          <div className="h-[10px] w-[20px] ml-[115px] mr-1 bg-red-600 relative   left-[2px] rounded-sm "></div>
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

      {/* LATERAL MARKS */}
      <div className="2mMark  bg-red-600 h-[56px] w-[10px] absolute left-[-20px] top-[18px] "></div>
      <div className="5mMark  bg-yellow-300 h-[97px] w-[10px] absolute left-[-20px] top-[80px] "></div>
      <div className="safeMark bg-green-400 h-[419px] w-[10px] absolute left-[-20px] top-[185px] "></div>
      <div className="5mMark  bg-yellow-300 h-[97px] w-[10px] absolute left-[-20px] bottom-[80px] "></div>
      <div className="2mMark  bg-red-600 h-[56px] w-[10px] absolute left-[-20px] bottom-[18px] "></div>

      {/* GOALS */}

      <img
        className="goal ml-[250px] mr-[246px] w-[100px] mt-[0px] top-[-15px] absolute"
        src="./src/assets/Img/GoalTopv2.png"
      ></img>
      <img
        className="goal ml-[250px] mr-[246px] w-[100px] mt-[0px] bottom-[1px] absolute z-[20]"
        src="./src/assets/Img/GoalBotv2.png"
      ></img>


    {/* BUTTONS */}

      <button
        className="right-[-135px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded absolute"
        onClick={increaseLocalPlayers}
      >
        + Local Player
      </button>
      <button
        className="right-[-164px] top-[50px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded absolute"
        onClick={decreaseLocalPlayers}
      >
        - Local Player
      </button>
      <button
        className="right-[-135px] top-[100px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded absolute"
        onClick={increaseVisitingPlayers}
      >
        + Visiting Player
      </button>
      <button
        className="right-[-164px] top-[150px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded absolute"
        onClick={decreaseVisitingPlayers}
      >
        - Visiting Player
      </button>



      <button
        className="right-[-145px] top-[200px] h-[20px] w-[126px] bg-red-500 hover:bg-red-700 text-white   border border-red-700 rounded absolute"
        onClick={handleShowName}
      >
        {showName===''? "Hide Names" : "Show Names"}
      </button>
      <button
        className="right-[-145px] top-[250px] h-[20px] w-[126px] bg-red-500 hover:bg-red-700 text-white   border border-red-700 rounded absolute"
        onClick={onevsone}
      >
        1vs1
      </button>
    </motion.div>
  );
};

export default Board;
