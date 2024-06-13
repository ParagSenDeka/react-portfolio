import React from 'react';
import {Box} from "@mui/material";

export default function Toggler({darkMode, handleClick}) {
    const transition = 'all 100ms ease';

   return (
      <Box fontSize={'2rem '} padding={"4px"} sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-1px)', transition: transition}}}>
         {
            darkMode ?
               <span onClick={handleClick} aria-label="Full Moon" role="img">☀️</span>
               :
               <span onClick={handleClick} aria-label="New Moon" role="img">🌑</span>
         }
      </Box>
   )
}