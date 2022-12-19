import './App.css';
import useContentfulFlowers from './useContentfulFlowers';
import { useEffect, useState } from 'react';
import FlowerCard from './flowerCard';

function Flowers() {

    const { getFlowers } = useContentfulFlowers();

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
export default Flowers;
