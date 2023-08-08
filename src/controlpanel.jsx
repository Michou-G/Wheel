// Control Panel Component
function ControlPanel({ onAddSegment, onRemoveSegment, onSpin }) {
  const [label, setLabel] = useState('');
  const [color, setColor] = useState('#ff0000');

  const handleAdd = () => {
    onAddSegment({ label, color });
    setLabel('');
  };

  return (
    <div className="controls">
      <input value={label} onChange={e => setLabel(e.target.value)} placeholder="Segment Label" />
      <input type="color" value={color} onChange={e => setColor(e.target.value)} />
      <button onClick={handleAdd}>Add Segment</button>
      <button onClick={onRemoveSegment}>Remove Segment</button>
      <button onClick={onSpin}>Spin</button>
    </div>
  );
}
