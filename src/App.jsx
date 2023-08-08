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
    const spins = Math.floor(Math.random() * (10 - 3 + 1) + 3);
    const newRotation = rotation + (360 * spins);
    setRotation(newRotation);
  };

  return (
    <div className="app-container">
      <Wheel segments={segments} rotation={rotation} />
      <ControlPanel onAddSegment={handleAddSegment} onRemoveSegment={handleRemoveSegment} onSpin={spinWheel} />
    </div>
  );
}