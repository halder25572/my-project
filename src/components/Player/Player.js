import React, { useState } from 'react';
import Data from '../../Data/Data.json';
import Details from '../Details/Details';
import Clublist from '../Clublist/Clublist';
import './Player.css';

const Player = () => {
     const first10 = Data.slice([]);
     const [players, setPlayers] = useState(first10);
     const [detail, setDetail] = useState([]);

     const handleAddPlayer = (player) => {
         const newDetail = [...detail, player];
         setDetail(newDetail)
     }


    return (
        <div className="Player-container">
            <div className="player-info">
                {
                    players.map(player => <Details
                        handleAddPlayer={handleAddPlayer}
                        player={player}></Details>)
                }
            </div>
            <div className="club-info">
                <Clublist detail={detail}></Clublist>
            </div>
        </div>
    );
};

export default Player;