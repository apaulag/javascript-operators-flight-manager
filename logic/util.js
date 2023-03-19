function Util() {
    function calculateTotalDistributedPassengers(passengerDistributions) {
        return Object.values(passengerDistributions).reduce((sum, num) => sum + num, 0);
    }

    function calculateTotalNumberOfPassengers(passengerCounts) {
        return passengerCounts.reduce((sum, num) => sum + num, 0);
    }

    function checkInput(input) {
        if (!input || isNaN(input)) {
            throw Error("The input should not be empty");
        }
    }

    function calculateTotalDistance(distances) {
        return distances.reduce((sum, num) => num < 0 ? sum : sum + num, 0)
    }

    function calculateBonusPoints(businessDistances, economyDistances, businessBonusPercent, economyBonusPercent) {
        const businessBonusPoints = calculateTotalDistance(businessDistances) * businessBonusPercent / 100;
        const economyBonusPoints = calculateTotalDistance(economyDistances) * economyBonusPercent / 100;
        return businessBonusPoints + economyBonusPoints;
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
}


module.exports = Util();
