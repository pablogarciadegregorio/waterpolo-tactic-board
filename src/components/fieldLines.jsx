const FieldLines = (props) => {

return (

    <>
        
    <div className="goalLineTop  bg-white w-full sm:w-[592px] lg:w-[592px] xl:w-[592px] 2xl:w-[592px] h-[3px] mx-auto top-[3%] absolute"></div>
    <div
      className="2mLine w-full sm:w-[592px] lg:w-[592px] xl:w-[592px] 2xl:w-[592px] bg-red-600 h-[3px]  mx-auto absolute 
     top-[10%] sm:top-[75px] lg:top-[75px] xl:top-[75px] 2xl:top-[75px]"
    ></div>
    <div
      className="5mLine w-full sm:w-[592px] lg:w-[592px] xl:w-[592px] 2xl:w-[592px] bg-yellow-300 h-[3px]  mx-auto absolute
     top-[25%] sm:top-[180px] md:top-[180px] lg:top-[180px] xl:top-[180px] 2xl:top-[180px]"
    ></div>
    <div
      className="middleLine w-full sm:w-[592px] lg:w-[592px] xl:w-[592px] 2xl:w-[592px] h-[3px]  bg-none absolute 
      top-[50%] sm:top-[400px] md:top-[400px] lg:top-[400px] xl:top-[400px] 2xl:top-[400px] items-center border-dashed border-2 border-white"
    ></div>
    <div
      className="5mLine w-full sm:w-[592px] lg:w-[592px] xl:w-[592px] 2xl:w-[592px] bg-yellow-300 h-[3px]   absolute
     bottom-[25%] sm:bottom-[180px] md:bottom-[180px] lg:bottom-[180px] xl:bottom-[180px] 2xl:bottom-[180px]"
    ></div>
    <div
      className="2mLine w-full sm:w-[592px] lg:w-[592px] xl:w-[592px] 2xl:w-[592px] bg-red-600 h-[3px]  mx-auto absolute 
     bottom-[10%] sm:bottom-[75px] lg:bottom-[75px] xl:bottom-[75px] 2xl:bottom-[75px]"
    ></div>
    <div className="goalLineBot bg-white w-full sm:w-[592px] lg:w-[592px] xl:w-[592px] 2xl:w-[592px] h-[3px] mx-auto top-[97%] absolute "></div>
    <img
      className="wpLogo sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[200px] 2xl:w-[200px] sm:h-[200px] md:h-[200px] lg:h-[200px] xl:h-[200px] 2xl:-[200px] 
       absolute  opacity-10 z-1"
      src="./static/img/logo_background.png"
      style={props.calculateCenterLogo()}
    ></img>

    </>
)


}


export default FieldLines