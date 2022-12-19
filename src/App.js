import './App.css';
import useContentful from './useContentful.js';
import { useEffect, useState } from 'react';
import FlowerCard from './flowerCard';

function App() {
  const { getFlowers } = useContentful();

  const [flowers, setflowers] = useState([]);

  useEffect(() => {
    getFlowers().then((response) => setflowers(response))

  })
  return (
    <div className="App">
      <h1>Flowers</h1>
      {flowers.map((flower, index) => (
        <FlowerCard key={index} flower={flower} />
      ))}
    </div>
  );
}
export default App;
