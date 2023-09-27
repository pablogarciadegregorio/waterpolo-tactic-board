const Goals = (props) => {
  return (
    <>
      <img
        className="goal  w-[100px] sm:w-[100px] lg:w-[100px] xl:w-[100px] 2xl:w-[100px]  top-[0%] absolute z-20
        xl:left-[43%] 2xl:left-[43%] lg:left-[43%]"
        src="./static/img/GoalTopv2.png"      
        style={props.calculateCenterGoal()}
      ></img>
      <img
        className={`goal  w-[100px] sm:w-[100px] lg:w-[100px] xl:w-[100px] 2xl:w-[100px]  top-[95%] absolute z-[40]`}
        src="./static/img/GoalBotv2.png"
        style={props.calculateCenterGoal()}
      ></img>
    </>
  );
};

export default Goals;
