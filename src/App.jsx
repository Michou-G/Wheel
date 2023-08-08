import "./styles.css"

export default function App() {
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    const spins = Math.floor(Math.random() * (10 - 3 + 1) + 3); // Random spins between 3 to 10
    const newRotation = rotation + (360 * spins);
    setRotation(newRotation);
  };
}