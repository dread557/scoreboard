import React, {Component} from 'react';
import Counter from './Counter';

class Player extends Component {
    render() {
        const {
            name,
            score,
            index,
            id,
            changeScore,
            removePlayer
        
        } = this.props;
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                    {name}</span>
                <Counter
                    score={score}
                    index={index}
                    changeScore={changeScore} 
                />

            </div>

        );
    }
}

export default Player;