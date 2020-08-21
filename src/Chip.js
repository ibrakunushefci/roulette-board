import React, { useRef } from 'react';

import ChipImage from './Images/Chip.png'

const Chip = () => {
   const ChipStyles = useRef({
      width: '20px',
      height: '20px',
      position: 'absolute',
      left: Math.floor(Math.random() * (53 - 47) + 47)+'%',
      top: Math.floor(Math.random() * (60 - 40) + 40)+'%',
      transform: 'translate(-50%, -50%)'
   })

   return (
      <img src={ChipImage} style={ChipStyles.current} alt="" />
   )
}

export default Chip;