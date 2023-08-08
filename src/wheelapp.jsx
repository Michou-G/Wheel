import React, { useState } from 'react';

// Wheel Component
function Wheel({ segments }) {
  return (
    <div className="wheel-container">
      {segments.map((segment, index) => (
        <div
          key={index}
          className="wheel-segment"
          style={{
            '--segment-angle': `${360 / segments.length}deg`,
            '--segment-color': segment.color
          }} 
        >
          {segment.label}
        </div>
      ))}
    </div>
  );
}