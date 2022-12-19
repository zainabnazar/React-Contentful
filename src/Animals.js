import './App.css';
import { useEffect, useState } from 'react';
import AnimalCard from './animalCard';
import useContentfulAnimals from './useContentfulAnimals';

function Animals() {

    const { getAnimals } = useContentfulAnimals();

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        getAnimals().then((response) => setAnimals(response))
    })

    return (
        <div className="App">
            <h1>Animals</h1>
            {animals.map((animal, index) => (
                <AnimalCard key={index} animal={animal} />
            ))}
        </div>
    );
}
export default Animals;