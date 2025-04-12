const rideModel = require('../models/ride.model')
const mapService = require('../services/map.services')
const crypto = require('crypto');

async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('Pickup and Destination are required')
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination)

    const baseFare = {
        auto: 20,
        car: 50,
        moto: 15
    };

    const perKmRate = {
        auto: 10,
        car: 20,
        moto: 8
    };

    const perMinuteRate = {
        auto: 1,
        car: 2,
        moto: 0.5
    };

    const fare = {
        auto: baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto),
        car: baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car),
        moto: baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + ((distanceTime.duration.value / 60) * perMinuteRate.moto)
    };

    return fare;
}

function generateOTP(num){
    const otp = crypto.randomBytes(num).toString('hex').slice(0, num);
    return otp;
}

module.exports.createRide = async ({
    user, pickup, destination, vehicalType
}) => {
    if (!user || !pickup || !destination || !vehicalType) {
        throw new Error('All fields are required')
    }
    const fare = await getFare(pickup, destination)
    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp:generateOTP(6),
        fare: fare[vehicalType]
    })
    return ride
}
