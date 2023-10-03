import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

class DogList extends React.Component {
  render() {
    const { dogs } = this.props;

    return (
      <div>
        <h2>Choose a dog:</h2>
        <ul className="DogList">
          {dogs.map((dog) => (
            <li key={dog.name}>
              <Link to={`/dogs/${dog.name}`} className="DogList-link">
                {dog.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DogList;