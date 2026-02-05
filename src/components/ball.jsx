
import "../index.css";
import { motion } from "framer-motion"

const Ball = (props) => {


    return (

        <motion.div
        drag
        dragListener={true}
        dragConstraints={props.constraintBallRef}
        dragElastic={0}
        dragMomentum={false}
        dragPropagation={true}
        whileTap={{ cursor: "grabbing" }}
       
       className="z-30 absolute cursor-grab"
        style={{
                ...props.ballStartingPosition(),
                touchAction: "none" 
            }}

      >
      <div

          className="ballCover w-[30px] h-[30px] absolute z-30"
        >
          <div className=" wpBallCover w-[30px] h-[30px] mx-auto  absolute bg-transparent rounded z-30"></div>
          <img
            id={props.ballGlow}
            className="wpBall w-[30px] h-[30px] relative mx-auto  z-10"
            src="./static/img/Wp_Ball.png"

            style={{ filter: `dropShadow(5px 5px 5px black)` }}
          ></img>
        </div>
      </motion.div>

    )
}

export default Ball