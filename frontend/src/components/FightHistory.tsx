import React from 'react';

const FightHistory: React.FC = () => {
    // Sample data - replace with actual data fetching logic
    const fights = [
        { id: 1, opponent: 'John Doe', date: '2026-03-28', result: 'Win' },
        { id: 2, opponent: 'Jane Smith', date: '2026-02-14', result: 'Loss' },
        { id: 3, opponent: 'Mike Johnson', date: '2026-01-10', result: 'Win' },
    ];

    return (
        <div>
            <h2>Fight History</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Opponent</th>
                        <th>Date</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {fights.map(fight => (
                        <tr key={fight.id}>
                            <td>{fight.id}</td>
                            <td>{fight.opponent}</td>
                            <td>{fight.date}</td>
                            <td>{fight.result}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FightHistory;