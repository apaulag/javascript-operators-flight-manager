function Util() {
    function calculateTotalDistributedPassengers(passengerDistributions) {
        return Object.values(passengerDistributions).reduce((sum, num) => sum + num, 0);
    }

    function calculateTotalNumberOfPassengers(passengerCountsArray) {
        return passengerCountsArray.reduce((sum, num) => sum + num, 0);
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}


module.exports = Util();
