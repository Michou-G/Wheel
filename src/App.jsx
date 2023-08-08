import "./styles.css"


// Main App Component
export default function WheelApp() {
  const [segments, setSegments] = useState([]);
  const [rotation, setRotation] = useState(0);

  const handleAddSegment = () => {
    setSegments([...segments, { label: `Segment ${segments.length + 1}`, color: '#ccc' }]);
  };

  const handleRemoveSegment = () => {
    const newSegments = [...segments];
    newSegments.pop();
    setSegments(newSegments);
  };

  const spinWheel = () => {
		// Random number of full spins (e.g., between 3 to 10 full spins)
		const spins = Math.floor(Math.random() * (10 - 3 + 1) + 3);
		
		// Random segment position to ensure it stops at a different segment each time
		const randomSegmentStop = 360 / segments.length * Math.floor(Math.random() * segments.length);
		
		// Calculate the new rotation value
		const newRotation = rotation + (360 * spins) + randomSegmentStop;
		
		setRotation(newRotation);
	};
	

  return (
    <div className="app-container">
      <Wheel segments={segments} rotation={rotation} />
      <ControlPanel onAddSegment={handleAddSegment} onRemoveSegment={handleRemoveSegment} onSpin={spinWheel} />
    </div>
  );
}