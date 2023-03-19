function Passengers() {
    function checkFlightCapacity(capacity, passengerCountsArray) {
        const totalPassengers = passengerCountsArray.reduce((sum, num) => sum + num, 0);
        if (totalPassengers <= capacity) {
            return totalPassengers;
        } else {
            throw Error("The capacity of the flight is exceeded");
        }
    }

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, numFlights, businessSeatsPerFlight, economySeatsPerFlight) {
        const vipPassengersWithBusinessSeats = Math.min(vipPassengers, businessSeatsPerFlight * numFlights);
        const vipPassengersWithEconomySeats = Math.min(vipPassengers - vipPassengersWithBusinessSeats, economySeatsPerFlight * numFlights);
        const regularPassengersWithBusinessSeats = Math.min(regularPassengers, businessSeatsPerFlight * numFlights - vipPassengersWithBusinessSeats);
        const regularPassengersWithEconomySeats = Math.min(regularPassengers - regularPassengersWithBusinessSeats, economySeatsPerFlight * numFlights - vipPassengersWithEconomySeats);

        return { vipPassengersWithBusinessSeats, vipPassengersWithEconomySeats, regularPassengersWithBusinessSeats, regularPassengersWithEconomySeats};
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}


module.exports = Passengers();
