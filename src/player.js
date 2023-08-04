// src/Player.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import './player.css';

const Player = ({
  name = 'Unknown',
  team = 'Unknown',
  nationality = 'Unknown',
  jerseyNumber = 'Unknown',
  age = 'Unknown',
  imageUrl = 'https://via.placeholder.com/150', // A placeholder image URL in case none is provided
}) => {
  return (
    <Card className="player-card" style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
