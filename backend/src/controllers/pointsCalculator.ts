// pointsCalculator.ts

interface MatchOutcome {
    outcome: 'win' | 'loss' | 'draw';
    isTitleMatch: boolean;
    opponentRank: number; // Rank of the opponent
    userRank: number; // Rank of the user
}

class PointsCalculator {
    private static BASE_POINTS = 10;
    private static SERIES_BONUS = 5;
    private static TITLE_BONUS = 15;
    private static UPSET_BONUS = 10;

    static calculatePoints(matches: MatchOutcome[], consecutiveWins: number = 0): number {
        let totalPoints = 0;

        for (const match of matches) {
            let points = PointsCalculator.BASE_POINTS;

            if (match.outcome === 'win') {
                points += PointsCalculator.SERIES_BONUS * consecutiveWins; // Bonus for consecutive wins
                if (match.isTitleMatch) {
                    points += PointsCalculator.TITLE_BONUS; // Bonus for title match
                }
                if (match.opponentRank > match.userRank) {
                    points += PointsCalculator.UPSET_BONUS; // Bonus for upset win
                }
            }

            totalPoints += points;
        }

        return totalPoints;
    }
}

export default PointsCalculator;