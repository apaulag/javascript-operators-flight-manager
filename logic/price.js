function Prices() {
    function calculateFinalPrice(basePrice, variationPassengerType, variationFlightType) {
        let finalPrice = basePrice * (1 + variationPassengerType / 100) * (1 + variationFlightType / 100);
        return finalPrice.toFixed(2);
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        const defaultVariations = {
            // passenger types
            "regular": -5,
            "vip": 5,
            // flight types
            "economy": -3,
            "business": 10
        }

        return calculateFinalPrice(basePrice, defaultVariations[passengerType.toLowerCase()], defaultVariations[flightType.toLowerCase()]);
    }

    function calculateTotalFinalPrice(numSeats, passengerType, flightType, basePrice) {
        return numSeats * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}


module.exports = Prices();
