// Control Panel Component
function ControlPanel({ onAddSegment, onRemoveSegment, onSpin }) {
  return (
    <div className="control-panel">
      <button onClick={onAddSegment}>Add Segment</button>
      <button onClick={onRemoveSegment}>Remove Segment</button>
      <button onClick={onSpin}>Spin</button>
    </div>
  );
}