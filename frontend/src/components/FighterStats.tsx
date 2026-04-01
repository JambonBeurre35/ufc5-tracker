import React from 'react';

interface FighterStatsProps {
    fighter: {
        name: string;
        wins: number;
        losses: number;
        draws: number;
        weightClass: string;
        reach: number;
    };
}

const FighterStats: React.FC<FighterStatsProps> = ({ fighter }) => {
    return (
        <div className="fighter-stats">
            <h2>{fighter.name}</h2>
            <p>Wins: {fighter.wins}</p>
            <p>Losses: {fighter.losses}</p>
            <p>Draws: {fighter.draws}</p>
            <p>Weight Class: {fighter.weightClass}</p>
            <p>Reach: {fighter.reach} cm</p>
        </div>
    );
};

export default FighterStats;
