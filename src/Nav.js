import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 

class Nav extends React.Component {
  render() {
    const { dogs } = this.props;

    return (
      <nav className="Nav">
        <ul>
          {dogs.map((dog) => (
            <li key={dog.name}>
              <Link to={`/dogs/${dog.name}`} className="Nav-link">
                {dog.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;