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
            transform: `rotate(${rotation}deg)`, 
            transition: 'transform 3s ease-out',
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

// Control Panel Component
function ControlPanel({ onAddSegment, onRemoveSegment }) {
  return (
    <div className="control-panel">
      <button onClick={onAddSegment}>Add Segment</button>
      <button onClick={onRemoveSegment}>Remove Segment</button>
      {/* Additional controls can be added here */}
    </div>
  );
}

// Main App Component
export default function App() {
  const [segments, setSegments] = useState([]); // Initial segments

  const handleAddSegment = () => {
    setSegments([...segments, { label: `Segment ${segments.length + 1}`, color: getRandomColor() }]);
  };

  const handleRemoveSegment = () => {
    const newSegments = [...segments];
    newSegments.pop();
    setSegments(newSegments);
  };

  return (
    <div className="app-container">
      <Wheel segments={segments} />
      <ControlPanel onAddSegment={handleAddSegment} onRemoveSegment={handleRemoveSegment} />
    </div>
  );
}

const [rotation, setRotation] = useState(0);

const spinWheel = () => {
  const spins = Math.floor(Math.random() * (10 - 3 + 1) + 3); // Random spins between 3 to 10
  const newRotation = rotation + (360 * spins);
  setRotation(newRotation);
};
