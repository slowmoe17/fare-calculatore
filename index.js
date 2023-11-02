class RideFare {

    static base_fare = 6;
    static price_per_minute = 1;

    static calculateFare(time, distance) {
        if (distance <= 7) {
            return RideFare.base_fare + distance * 4 + RideFare.price_per_minute * time;
        } else if (7 < distance <= 9.5) {
            return RideFare.base_fare + distance * 3.3 + RideFare.price_per_minute * time;
        } else if (9.5 < distance <= 12.9) {
            return RideFare.base_fare + distance * 2.48 + RideFare.price_per_minute * time;
        } else if (12.9 < distance <= 15) {
            return RideFare.base_fare + distance * 2.35 + RideFare.price_per_minute * time;
        } else if (15 < distance <= 16) {
            return RideFare.base_fare + distance * 2.25 + RideFare.price_per_minute * time;
        } else if (16 < distance <= 23) {
            return RideFare.base_fare + distance * 2.1 + RideFare.price_per_minute * time;
        } else if (23 < distance > 37) {
            return RideFare.base_fare + distance * 1.8 + RideFare.price_per_minute * time;
        } else {
            return RideFare.base_fare + distance * 1.73 + RideFare.price_per_minute * time;
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate-button");

    calculateButton.addEventListener("click", function() {
        const timeInput = document.getElementById("time").value;
        const distanceInput = document.getElementById("distance").value;

        const time = parseFloat(timeInput);
        const distance = parseFloat(distanceInput);

        if (!isNaN(time) && !isNaN(distance)) {
            const fare = RideFare.calculateFare(time, distance);
            const fareElement = document.getElementById("fare");
            fareElement.innerHTML = fare;
        } else {

            fareElement.innerHTML ="Invalid input for time or distance.";
        }
    });
});
