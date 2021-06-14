import React from 'react';

const Club = (props) => {
    const detail = props.detail;

    // let totalAmount = 0;
    // for(let i = 0; i<detail.length; i++){
    //     const player = detail[i];
    //     totalAmount = totalAmount + player.salary;
    // }
    const total = detail.reduce((total, player) => total + player.salary, 0);

    return (
        <div>
            <h2>Bangladesh National Team</h2>
            <h4>Total Player Add: {detail.length}</h4>
            <h5>Total Amount: ${total}</h5>
        </div>
    );
};

export default Club;