import React from "react";

const CustomVideo = ({src}) => {
  return (
    <video autoPlay loop muted style={{position: "absolute", height: '100%', width: '100%', top: '50%', left: '50%', objectFit: "cover", transform: 'translate(-50%, -50%)', zIndex: '-1'}}>
      <source src={src} type='video/mp4' />
    </video>  
  ) 
}

export default CustomVideo