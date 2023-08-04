// src/PlayersList.js
import React from 'react';
import Player from './player';
import players from './players'; // Assuming you have the players array in the players.js file
// src/PlayersList.js
const PlayersList = () => {
    return (
      <div>
        {players.map((player) => (
          <Player key={player.id} {...player} />
        ))}
      </div>
    );
  };
  
  export default PlayersList;
  
