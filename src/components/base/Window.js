import React, {useState} from  'react';
import  Draggable from "react-draggable";

const WindowBase = () => {

  return(
  <Draggable
     axis="both"
     handle=".handle"
     defaultPosition={{x: 200, y: 0}}
     position={null}
     scale={1}
     bounds = ".mainpage"
    >
     <div  className="w-25 border border-primary bg-white">
       <div className="handle">Drag from here</div>
     </div>
   </Draggable>
 );
}


export default WindowBase;
