import express from 'express';

const router = express.Router();

// Mock data for leaderboard
const leaderboard = [
    { id: 1, name: 'Fighter 1', points: 150 },
    { id: 2, name: 'Fighter 2', points: 120 },
    { id: 3, name: 'Fighter 3', points: 100 },
];

// Mock data for fighter statistics
const fighterStats = {
    'Fighter 1': { wins: 10, losses: 2, winrate: 0.83, streak: 5 },
    'Fighter 2': { wins: 8, losses: 4, winrate: 0.67, streak: 3 },
    'Fighter 3': { wins: 5, losses: 5, winrate: 0.50, streak: 0 },
};

// GET leaderboard route
router.get('/leaderboard', (req, res) => {
    const sortedLeaderboard = leaderboard.sort((a, b) => b.points - a.points);
    res.json(sortedLeaderboard);
});

// GET fighter statistics route
router.get('/fighter/:name/stats', (req, res) => {
    const fighterName = req.params.name;
    const stats = fighterStats[fighterName];
    if (stats) {
        res.json(stats);
    } else {
        res.status(404).json({ message: 'Fighter not found' });
    }
});

export default router;
