import React from 'react';

const Leaderboard: React.FC = () => {
    // Sample data for leaderboard
    const leaderboardData = [
        { name: 'Fighter 1', score: 150 },
        { name: 'Fighter 2', score: 120 },
        { name: 'Fighter 3', score: 100 },
    ];

    return (
        <div>
            <h1>Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((fighter, index) => (
                        <tr key={index}>
                            <td>{fighter.name}</td>
                            <td>{fighter.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;