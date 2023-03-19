function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        if (passengers < 0 || !Number.isInteger(passengers)) {
            throw Error("The number of passengers must be a positive integer value");
        }
        if (capacity <= 0 || !Number.isInteger(capacity)) {
            throw Error("The capacity of the flight must be a positive integer value");
        }
        return Math.ceil(passengers / capacity);
    }

    function checkAircraftRevision(distanceLimit, distancesArray) {
        const totalDistance = distancesArray.reduce((sum, num) => sum + num, 0);
        if (totalDistance <= 0.5 * distanceLimit) {
            return "The revision needs to be done within the next 3 months";
        } else if (totalDistance <= 0.75 * distanceLimit) {
            return "The revision needs to be done within the next 2 months";
        } else if (totalDistance <= distanceLimit) {
            return "The revision needs to be done within the next month";
        } else {
            throw Error("The total distance exceeds the distance limit");
        }
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}


module.exports = Flights();
