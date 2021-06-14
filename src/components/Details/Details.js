import React from 'react';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Details = (props) => {
    const { img, salary, name } = props.player;
    console.log(props);
    return (
        <div className="details-main">
            <div className="img-details">
                <img src={img} alt="" />
            </div>
            <div className="player-details">
                <h2 className="player-name">{name}</h2>
                <h3><small>Salary: {salary}</small></h3>
                <button className="player-button"
                onClick={() =>props.handleAddPlayer(props.player)}
                
                >
                    
                    <FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
            </div>
        </div>
    );
};

export default Details;