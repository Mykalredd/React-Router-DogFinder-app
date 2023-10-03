import React from 'react';
import { useParams } from 'react-router-dom';
import './DogDetails.css';

function DogDetails(props) {
  const { name } = useParams();
  const { dogs } = props;

  const dog = dogs.find((dog) => dog.name === name);
  if (!dog) {
    return <div>
            <h1>🚨 404 ERROR - Dog Not Found! 🚨</h1>
            </div>;
  }

  return (
    <div className="DogDetails">
      <h2>{dog.name}</h2>
      <div className="DogDetails-container">
        <div className="DogDetails-image">
          <img src={dog.src} alt={dog.name} />
        </div>
        <div className="DogDetails-facts">
          <ul>
            {dog.facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DogDetails;