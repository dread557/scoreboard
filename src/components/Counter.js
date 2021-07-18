import React from 'react';
import { Consumer } from './Context';

const Counter = ({ index }) => {
    return (
        <Consumer>
            {({ actions, players }) => (
                <div className="counter">
                    <button className="counter-action decrement" onClick={() => actions.scoreChange(index, -1)}>-</button>
                    <span>{players[index].score}</span>
                    <button className="counter-action increment" onClick={() => actions.scoreChange(index, 1)}>+</button>
                </div>
            )}
        </Consumer>

    );
}

export default Counter;