import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {
    state = {
        players: [
            {
                name: "Dread",
                score: 0,
                id: 1
            },
            {
                name: "Burna",
                score: 0,
                id: 2
            },
            {
                name: "Baddest",
                score: 0,
                id: 3
            },
            {
                name: "Wizzy",
                score: 0,
                id: 4
            }
        ]
    };
    //get previous player id to generate new id for added players
    prevPlayerId = 4;

    handleScoreChange = (index, delta) => {
        this.setState(prevState => {
            // New 'players' array – a copy of the previous `players` state
            const updatedPlayers = [...prevState.players];
            // A copy of the player object we're targeting
            const updatedPlayer = { ...updatedPlayers[index] };

            // Update the target player's score
            updatedPlayer.score += delta;
            // Update the 'players' array with the target player's latest score
            updatedPlayers[index] = updatedPlayer;

            // Update the `players` state without mutating the original state
            return {
                players: updatedPlayers
            };
        });
    }

    handleRemoveplayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            }
        });

    }

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name: name,
                        score: 0,
                        id: this.prevPlayerId += 1
                    }
                ]
            }
        });
    }

    render() {
        return (
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                    scoreChange: this.handleScoreChange,
                    removePlayer: this.handleRemoveplayer,
                    addPlayer: this.handleAddPlayer
                }
            }}>
                {this.props.children}
            </ScoreboardContext.Provider>
        );
    }
}
export const Consumer = ScoreboardContext.Consumer;